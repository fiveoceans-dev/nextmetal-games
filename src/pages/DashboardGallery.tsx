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
  FileVideo,
  Upload
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

// Note: In a web browser, we cannot access local files from Downloads folder
// This would require a desktop application (Electron) with File System API
// For now, showing mock data with the new filename format
const mockRecordings: Recording[] = [
  {
    id: 'nextmetal_video_1734361800000',
    name: 'League of Legends - Ranked Match',
    date: new Date('2024-12-16T14:30:00'),
    duration: 1847,
    game: 'League of Legends',
    size: 245,
    status: 'completed'
  },
  {
    id: 'nextmetal_video_1734364500000',
    name: 'Valorant - Competitive',
    date: new Date('2024-12-16T16:15:00'),
    duration: 2341,
    game: 'Valorant',
    size: 312,
    status: 'completed'
  },
  {
    id: 'nextmetal_video_1734309900000',
    name: 'Counter-Strike 2 - Casual Match',
    date: new Date('2024-12-15T20:45:00'),
    duration: 1567,
    game: 'Counter-Strike 2',
    size: 198,
    status: 'completed'
  },
  {
    id: 'nextmetal_video_1734306000000',
    name: 'Apex Legends - Ranked',
    date: new Date('2024-12-15T19:20:00'),
    duration: 1234,
    game: 'Apex Legends',
    size: 167,
    status: 'completed'
  },
  {
    id: 'nextmetal_video_1734217800000',
    name: 'Overwatch 2 - Quick Play',
    date: new Date('2024-12-14T21:30:00'),
    duration: 987,
    game: 'Overwatch 2',
    size: 134,
    status: 'completed'
  },
  {
    id: 'nextmetal_video_1734208800000',
    name: 'Rocket League - Tournament',
    date: new Date('2024-12-14T18:00:00'),
    duration: 2156,
    game: 'Rocket League',
    size: 289,
    status: 'completed'
  },
  {
    id: 'nextmetal_video_1734110700000',
    name: 'Dota 2 - Ranked Match',
    date: new Date('2024-12-13T15:45:00'),
    duration: 2876,
    game: 'Dota 2',
    size: 387,
    status: 'processing'
  },
  {
    id: 'nextmetal_video_1734097800000',
    name: 'Fortnite - Creative Mode',
    date: new Date('2024-12-13T12:30:00'),
    duration: 756,
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
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Gallery</h1>
          <p className="text-sm text-muted-foreground">
            Files saved as: nextmetal_video_*.webm
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="sm">
            <Upload className="h-4 w-4 mr-2" />
            Upload All
          </Button>
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 text-center">
        <div>
          <div className="text-2xl font-bold">{recordings.length}</div>
          <div className="text-sm text-muted-foreground">Recordings</div>
        </div>
        <div>
          <div className="text-2xl font-bold">
            {Math.round(recordings.reduce((acc, rec) => acc + rec.duration, 0) / 3600)}
          </div>
          <div className="text-sm text-muted-foreground">Hours</div>
        </div>
        <div>
          <div className="text-2xl font-bold">
            {recordings.reduce((acc, rec) => acc + rec.size, 0)}
          </div>
          <div className="text-sm text-muted-foreground">MB</div>
        </div>
        <div>
          <div className="text-2xl font-bold">
            {recordings.filter(rec => {
              const weekAgo = new Date();
              weekAgo.setDate(weekAgo.getDate() - 7);
              return rec.date >= weekAgo;
            }).length}
          </div>
          <div className="text-sm text-muted-foreground">This Week</div>
        </div>
      </div>

      {/* Recordings by Date */}
      <div className="space-y-8">
        {Object.entries(groupedRecordings)
          .sort(([a], [b]) => new Date(b).getTime() - new Date(a).getTime())
          .map(([dateString, dayRecordings]) => (
            <div key={dateString} className="space-y-4">
              <h2 className="text-lg font-semibold mb-4">
                {new Date(dateString).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric'
                })}
                <span className="text-muted-foreground ml-2">
                  ({dayRecordings.length})
                </span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {dayRecordings.map((recording) => (
                  <Card key={recording.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
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
                          Play
                        </Button>
                        <Button size="sm" variant="outline" disabled={recording.status !== 'completed'}>
                          <Download className="h-3 w-3" />
                        </Button>
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
        <div className="text-center py-12 space-y-4">
          <div className="text-sm text-muted-foreground space-y-2">
            <p>No recordings yet</p>
            <p className="text-xs">
              <strong>Browser Limitation:</strong> Cannot read local files.<br/>
              Desktop app needed for auto-detection.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
