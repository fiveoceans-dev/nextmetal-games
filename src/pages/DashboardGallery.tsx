import { useState, useEffect } from "react";
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
  FileVideo
} from "lucide-react";

interface Recording {
  id: string;
  name: string;
  date: Date;
  duration: number; // in seconds
  game?: string;
  thumbnail?: string;
  videoUrl?: string;
  inputDataUrl?: string;
  size: number; // in MB
  status: 'completed' | 'processing' | 'failed';
}

// Mock data for recordings
const mockRecordings: Recording[] = [
  {
    id: 'rec_001',
    name: 'League of Legends - Ranked Match',
    date: new Date('2024-12-16T14:30:00'),
    duration: 1847, // ~30 minutes
    game: 'League of Legends',
    size: 245,
    status: 'completed'
  },
  {
    id: 'rec_002',
    name: 'Valorant - Competitive',
    date: new Date('2024-12-16T16:15:00'),
    duration: 2341, // ~39 minutes
    game: 'Valorant',
    size: 312,
    status: 'completed'
  },
  {
    id: 'rec_003',
    name: 'CS2 - Casual Match',
    date: new Date('2024-12-15T20:45:00'),
    duration: 1567, // ~26 minutes
    game: 'Counter-Strike 2',
    size: 198,
    status: 'completed'
  },
  {
    id: 'rec_004',
    name: 'Apex Legends - Ranked',
    date: new Date('2024-12-15T19:20:00'),
    duration: 1234, // ~20 minutes
    game: 'Apex Legends',
    size: 167,
    status: 'completed'
  },
  {
    id: 'rec_005',
    name: 'Overwatch 2 - Quick Play',
    date: new Date('2024-12-14T21:30:00'),
    duration: 987, // ~16 minutes
    game: 'Overwatch 2',
    size: 134,
    status: 'completed'
  },
  {
    id: 'rec_006',
    name: 'Rocket League - Tournament',
    date: new Date('2024-12-14T18:00:00'),
    duration: 2156, // ~36 minutes
    game: 'Rocket League',
    size: 289,
    status: 'completed'
  },
  {
    id: 'rec_007',
    name: 'Dota 2 - Ranked Match',
    date: new Date('2024-12-13T15:45:00'),
    duration: 2876, // ~48 minutes
    game: 'Dota 2',
    size: 387,
    status: 'processing'
  },
  {
    id: 'rec_008',
    name: 'Fortnite - Creative Mode',
    date: new Date('2024-12-13T12:30:00'),
    duration: 756, // ~12 minutes
    game: 'Fortnite',
    size: 98,
    status: 'completed'
  }
];

export default function DashboardGallery() {
  const [recordings, setRecordings] = useState<Recording[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredRecordings, setFilteredRecordings] = useState<Recording[]>([]);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setRecordings(mockRecordings);
    }, 500);
  }, []);

  useEffect(() => {
    // Filter recordings based on search
    const filtered = recordings.filter(recording =>
      recording.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (recording.game && recording.game.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    setFilteredRecordings(filtered);
  }, [recordings, searchQuery]);

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
        return <Badge variant="default" className="bg-green-600">Completed</Badge>;
      case 'processing':
        return <Badge variant="secondary" className="bg-yellow-600">Processing</Badge>;
      case 'failed':
        return <Badge variant="destructive">Failed</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Images className="h-6 w-6" />
            Gallery
          </h1>
          <p className="text-muted-foreground">View and manage your game recordings</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search recordings..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 w-64"
            />
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-4">
            <div className="flex items-center gap-2">
              <FileVideo className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Total Recordings</span>
            </div>
            <div className="text-2xl font-bold mt-2">{recordings.length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-4">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Total Hours</span>
            </div>
            <div className="text-2xl font-bold mt-2">
              {Math.round(recordings.reduce((acc, rec) => acc + rec.duration, 0) / 3600)}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-4">
            <div className="flex items-center gap-2">
              <Download className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Storage Used</span>
            </div>
            <div className="text-2xl font-bold mt-2">
              {recordings.reduce((acc, rec) => acc + rec.size, 0)} MB
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-4">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">This Week</span>
            </div>
            <div className="text-2xl font-bold mt-2">
              {recordings.filter(rec => {
                const weekAgo = new Date();
                weekAgo.setDate(weekAgo.getDate() - 7);
                return rec.date >= weekAgo;
              }).length}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recordings by Date */}
      <div className="space-y-8">
        {Object.entries(groupedRecordings)
          .sort(([a], [b]) => new Date(b).getTime() - new Date(a).getTime())
          .map(([dateString, dayRecordings]) => (
            <div key={dateString} className="space-y-4">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-muted-foreground" />
                <h2 className="text-lg font-semibold">
                  {new Date(dateString).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </h2>
                <Badge variant="outline" className="ml-2">
                  {dayRecordings.length} recording{dayRecordings.length !== 1 ? 's' : ''}
                </Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {dayRecordings.map((recording) => (
                  <Card key={recording.id} className="group hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-3 relative overflow-hidden">
                        {recording.thumbnail ? (
                          <img
                            src={recording.thumbnail}
                            alt={recording.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="text-center">
                            <FileVideo className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                            <p className="text-xs text-muted-foreground">No preview</p>
                          </div>
                        )}

                        {/* Play overlay */}
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <Button size="sm" variant="secondary" className="rounded-full">
                            <Play className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      <CardTitle className="text-sm leading-tight line-clamp-2">
                        {recording.name}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          {recording.game && (
                            <div className="flex items-center gap-1">
                              {getGameIcon(recording.game)}
                              <span className="text-xs text-muted-foreground">{recording.game}</span>
                            </div>
                          )}
                          {getStatusBadge(recording.status)}
                        </div>

                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {formatDuration(recording.duration)}
                          </div>
                          <span>{recording.size} MB</span>
                        </div>

                        <div className="flex items-center justify-between">
                          <Button
                            size="sm"
                            variant="outline"
                            className="flex-1 mr-2"
                            disabled={recording.status !== 'completed'}
                          >
                            <Play className="h-3 w-3 mr-1" />
                            Play
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            disabled={recording.status !== 'completed'}
                          >
                            <Download className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
      </div>

      {filteredRecordings.length === 0 && recordings.length > 0 && (
        <div className="text-center py-12">
          <Search className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
          <h3 className="text-lg font-medium mb-2">No recordings found</h3>
          <p className="text-muted-foreground">
            Try adjusting your search terms or create your first recording.
          </p>
        </div>
      )}

      {recordings.length === 0 && (
        <div className="text-center py-12">
          <Images className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
          <h3 className="text-lg font-medium mb-2">No recordings yet</h3>
          <p className="text-muted-foreground mb-4">
            Start recording your gameplay sessions to build your gallery.
          </p>
          <Button>
            <Play className="h-4 w-4 mr-2" />
            Start Recording
          </Button>
        </div>
      )}
    </div>
  );
}
