import { useState, useEffect, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Images,
  Play,
  Download,
  Search,
  Calendar,
  Clock,
  Gamepad2,
  FileVideo,
  Upload
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { getLocaleForLanguage } from "@/i18n/locale";

interface Recording {
  id: string;
  name: string;
  date: Date;
  duration: number; // in seconds
  category?: "clip" | "best";
  game?: string;
  thumbnail?: string;
  videoUrl?: string;
  inputDataUrl?: string;
  size: number; // in MB
  status: 'completed' | 'processing' | 'failed';
}

// Note: In a web browser, we cannot access local files from Downloads folder
// This would require a desktop application (Electron) with File System API
// For now, showing mock data with the new filename format
export default function DashboardGallery() {
  const { t, i18n } = useTranslation();
  const [recordings, setRecordings] = useState<Recording[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<"all" | "clips" | "best">("all");
  const [filteredRecordings, setFilteredRecordings] = useState<Recording[]>([]);
  const mockRecordings: Recording[] = useMemo(
    () => [
      {
        id: 'nextmetal_video_1734361800000',
        name: t('gallery.mockNames.lolRanked'),
        date: new Date('2024-12-16T14:30:00'),
        duration: 1847,
        game: t('gallery.mockGames.lol'),
        size: 245,
        status: 'completed'
      },
      {
        id: 'nextmetal_video_1734364500000',
        name: t('gallery.mockNames.valorantCompetitive'),
        date: new Date('2024-12-16T16:15:00'),
        duration: 2341,
        game: t('gallery.mockGames.valorant'),
        size: 312,
        status: 'completed',
        category: "clip"
      },
      {
        id: 'nextmetal_video_1734309900000',
        name: t('gallery.mockNames.cs2Casual'),
        date: new Date('2024-12-15T20:45:00'),
        duration: 1567,
        game: t('gallery.mockGames.cs2'),
        size: 198,
        status: 'completed'
      },
      {
        id: 'nextmetal_video_1734306000000',
        name: t('gallery.mockNames.apexRanked'),
        date: new Date('2024-12-15T19:20:00'),
        duration: 1234,
        game: t('gallery.mockGames.apex'),
        size: 167,
        status: 'completed',
        category: "clip"
      },
      {
        id: 'nextmetal_video_1734217800000',
        name: t('gallery.mockNames.overwatchQuick'),
        date: new Date('2024-12-14T21:30:00'),
        duration: 987,
        game: t('gallery.mockGames.overwatch'),
        size: 134,
        status: 'completed'
      },
      {
        id: 'nextmetal_video_1734208800000',
        name: t('gallery.mockNames.rocketTournament'),
        date: new Date('2024-12-14T18:00:00'),
        duration: 2156,
        game: t('gallery.mockGames.rocket'),
        size: 289,
        status: 'completed',
        category: "best"
      },
      {
        id: 'nextmetal_video_1734110700000',
        name: t('gallery.mockNames.dotaRanked'),
        date: new Date('2024-12-13T15:45:00'),
        duration: 2876,
        game: t('gallery.mockGames.dota'),
        size: 387,
        status: 'processing',
        category: "best"
      },
      {
        id: 'nextmetal_video_1734097800000',
        name: t('gallery.mockNames.fortniteCreative'),
        date: new Date('2024-12-13T12:30:00'),
        duration: 756,
        game: t('gallery.mockGames.fortnite'),
        size: 98,
        status: 'completed'
      }
    ],
    [t, i18n.language],
  );

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      setRecordings(mockRecordings);
    }, 500);
    return () => clearTimeout(timer);
  }, [mockRecordings]);

  useEffect(() => {
    // Filter recordings based on search and active tab
    const filtered = recordings.filter((recording) => {
      const matchesSearch =
        recording.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (recording.game && recording.game.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesTab =
        activeTab === "all" ||
        (activeTab === "clips" && recording.category === "clip") ||
        (activeTab === "best" && recording.category === "best");
      return matchesSearch && matchesTab;
    });
    setFilteredRecordings(filtered);
  }, [recordings, searchQuery, activeTab]);

  // Group recordings by date
  const groupedRecordings = filteredRecordings.reduce((groups, recording) => {
    const dateKey = recording.date.toDateString();
    if (!groups[dateKey]) {
      groups[dateKey] = [];
    }
    groups[dateKey].push(recording);
    return groups;
  }, {} as Record<string, Recording[]>);

  const formatDuration = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  };

  const getGameIcon = (game?: string) => {
    // Return appropriate icon based on game
    return <Gamepad2 className="h-4 w-4" />;
  };

  const getStatusBadge = (status: Recording['status']) => {
    switch (status) {
      case 'completed':
        return <Badge variant="default" className="bg-green-600">{t("status.completed")}</Badge>;
      case 'processing':
        return <Badge variant="secondary" className="bg-yellow-600">{t("status.processing")}</Badge>;
      case 'failed':
        return <Badge variant="destructive">{t("status.failed")}</Badge>;
      default:
        return <Badge variant="outline">{t("status.unknown")}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center gap-3">
        <div>
          <h1 className="text-2xl font-bold">{t("gallery.title")}</h1>
          <p className="text-sm text-muted-foreground">
            {t("gallery.filenameHint")}
          </p>
        </div>
        <Button variant="outline" size="sm">
          <Upload className="h-4 w-4 mr-2" />
          {t("gallery.uploadAll")}
        </Button>
      </div>

      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex rounded-full border border-border/70 bg-background/60 p-1">
          {(["all", "clips", "best"] as const).map((tab) => (
            <Button
              key={tab}
              size="sm"
              variant={activeTab === tab ? "default" : "ghost"}
              className="rounded-full px-3"
              onClick={() => setActiveTab(tab)}
            >
              {t(`gallery.tabs.${tab}`)}
            </Button>
          ))}
        </div>
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder={t("common.searchPlaceholder")}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Recordings by Date */}
      <div className="space-y-8">
        {Object.entries(groupedRecordings)
          .sort(([a], [b]) => new Date(b).getTime() - new Date(a).getTime())
          .map(([dateString, dayRecordings]) => (
            <div key={dateString} className="space-y-4">
              <h2 className="text-lg font-semibold mb-4">
                {new Date(dateString).toLocaleDateString(getLocaleForLanguage(i18n.language), {
                  month: 'short',
                  day: 'numeric'
                })}
                <span className="text-muted-foreground ml-2">
                  ({dayRecordings.length})
                </span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {dayRecordings.map((recording) => (
                  <div
                    key={recording.id}
                    className="rounded-lg border border-border bg-card p-4 transition-colors hover:bg-accent"
                  >
                      <div className="aspect-video bg-black rounded mb-3 flex items-center justify-center relative">
                        <FileVideo className="h-8 w-8 text-white/50" />
                        {getStatusBadge(recording.status)}
                      </div>

                      <h3 className="font-medium text-sm mb-2 line-clamp-2">{recording.name}</h3>

                      <div className="flex justify-between text-xs text-muted-foreground mb-3">
                        <span>{formatDuration(recording.duration)}</span>
                        <span>{recording.size} MB</span>
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex-1" disabled={recording.status !== 'completed'}>
                          <Play className="h-3 w-3 mr-1" />
                          {t("gallery.play")}
                        </Button>
                        <Button size="sm" variant="outline" disabled={recording.status !== 'completed'}>
                          <Download className="h-3 w-3" />
                        </Button>
                      </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>

      {filteredRecordings.length === 0 && recordings.length > 0 && (
        <div className="text-center py-12">
          <Search className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
          <h3 className="text-lg font-medium mb-2">{t("gallery.emptySearch.title")}</h3>
          <p className="text-muted-foreground">
            {t("gallery.emptySearch.description")}
          </p>
        </div>
      )}

      {recordings.length === 0 && (
        <div className="text-center py-12 space-y-4">
          <div className="text-sm text-muted-foreground space-y-2">
            <p>{t("gallery.emptyAll.title")}</p>
            <p className="text-xs">
              <strong>{t("gallery.emptyAll.browserLimitLabel")}</strong> {t("gallery.emptyAll.browserLimitDescription")}<br/>
              {t("gallery.emptyAll.desktopAppRequired")}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
