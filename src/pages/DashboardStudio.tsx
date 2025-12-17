import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Play, Square, Monitor, Camera, Keyboard, Mouse, Download, Volume2 } from "lucide-react";

interface InputEvent {
  timestamp: number;
  type: 'keyboard' | 'mouse';
  event: string;
  data: any;
}

interface RecordingSession {
  id: string;
  startTime: number;
  screenStream?: MediaStream;
  webcamStream?: MediaStream;
  inputEvents: InputEvent[];
  mediaRecorder?: MediaRecorder;
  recordedChunks: Blob[];
}

interface DashboardStudioProps {
  isRecording: boolean;
  selectedScreen: string;
  recordingSession: RecordingSession | null;
  inputEventCount: number;
  duration: number;
  isStreamReady: boolean;
  videoRef: React.RefObject<HTMLVideoElement>;
  canvasRef: React.RefObject<HTMLCanvasElement>;
  onSelectedScreenChange: (screen: string) => void;
  onStartRecording: () => void;
  onStopRecording: () => void;
}

export default function DashboardStudio({
  isRecording,
  selectedScreen,
  recordingSession,
  inputEventCount,
  duration,
  isStreamReady,
  videoRef,
  canvasRef,
  onSelectedScreenChange,
  onStartRecording,
  onStopRecording
}: DashboardStudioProps) {


  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Studio</h1>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
        <div className="flex items-center gap-4">
            <Select value={selectedScreen} onValueChange={onSelectedScreenChange}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="screen">Screen</SelectItem>
                <SelectItem value="window">Window</SelectItem>
              </SelectContent>
            </Select>

            <Button
              onClick={isRecording ? onStopRecording : onStartRecording}
              className={isRecording ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'}
              disabled={!isStreamReady && isRecording}
            >
              {isRecording ? (
                <>
                  <Square className="h-4 w-4 mr-2" />
                  Stop
                </>
              ) : (
                <>
                  <Play className="h-4 w-4 mr-2" />
                  Record
                </>
              )}
            </Button>

            <div className="flex gap-6 ml-auto">
              <div className="text-center">
                <Monitor className="h-5 w-5 mx-auto mb-1" />
                <div className="text-sm">Screen</div>
                <Badge variant={isRecording ? "default" : "secondary"} className="text-xs">
                  {isRecording ? "ON" : "Offline"}
                </Badge>
              </div>

              <div className="text-center">
                <Camera className="h-5 w-5 mx-auto mb-1" />
                <div className="text-sm">Camera</div>
                <Badge variant={isRecording ? "default" : "secondary"} className="text-xs">
                  {isRecording ? "ON" : "Offline"}
                </Badge>
              </div>

              <div className="text-center">
                <Volume2 className="h-5 w-5 mx-auto mb-1" />
                <div className="text-sm">Audio</div>
                <Badge variant={isRecording ? "default" : "secondary"} className="text-xs">
                  {isRecording ? "ON" : "Offline"}
                </Badge>
              </div>

              <div className="text-center">
                <Keyboard className="h-5 w-5 mx-auto mb-1" />
                <div className="text-sm">Input</div>
                <Badge variant={isRecording ? "default" : "secondary"} className="text-xs">
                  {isRecording ? "ON" : "Offline"}
                </Badge>
              </div>
            </div>
          </div>

          {isRecording && (
            <div className="mt-4 flex items-center gap-4 text-sm">
              <Badge variant="destructive">REC</Badge>
              <span>{Math.floor(duration / 60)}:{(duration % 60).toString().padStart(2, '0')}</span>
              <span>{inputEventCount} events</span>
            </div>
          )}
        </div>

      <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
        <div className="relative rounded-lg aspect-video overflow-hidden max-w-2xl mx-auto">
            <canvas
              ref={canvasRef}
              className="w-full h-full object-contain bg-black"
              style={{ display: isStreamReady ? 'block' : 'none' }}
            />
            <video
              ref={videoRef}
              className="w-full h-full object-contain bg-black"
              style={{ display: 'none' }}
              muted
            />

            {isRecording && (
              <Badge className="absolute top-2 left-2 bg-red-600 z-10">REC</Badge>
            )}

            {!isStreamReady && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-600 text-gray-500 dark:text-gray-400 rounded-lg">
                <Monitor className="h-8 w-8" />
              </div>
            )}
          </div>
        </div>


      <div className={`rounded-lg p-4 ${isRecording && recordingSession ? 'bg-blue-50 dark:bg-blue-900/20' : 'bg-gray-50 dark:bg-gray-800'}`}>
        <div className="flex items-center gap-2 mb-4">
          <Download className={`h-5 w-5 ${isRecording && recordingSession ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'}`} />
          <h3 className={`font-semibold ${isRecording && recordingSession ? 'text-blue-900 dark:text-blue-100' : 'text-gray-700 dark:text-gray-300'}`}>Session Info & Downloads</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="text-sm">
              <span className="font-medium">Session ID:</span> {recordingSession ? recordingSession.id : 'Not recording'}
            </div>
            <div className="text-sm">
              <span className="font-medium">Start Time:</span> {recordingSession ? new Date(recordingSession.startTime).toLocaleTimeString() : '--:--:--'}
            </div>
            <div className="text-sm">
              <span className="font-medium">Duration:</span> {isRecording ? `${Math.floor(duration / 60)}:${(duration % 60).toString().padStart(2, '0')}` : '0:00'}
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-sm">
              <span className="font-medium">Input Events:</span> {isRecording ? inputEventCount : 0}
            </div>
            <div className="text-sm">
              <span className="font-medium">Video Format:</span> WebM (VP9)
            </div>
                <div className="text-sm">
                  <span className="font-medium">Data Export:</span> ZIP Archive
                </div>
          </div>
        </div>
        <div className={`mt-4 p-3 rounded-lg ${isRecording && recordingSession ? 'bg-blue-100 dark:bg-blue-900/30' : 'bg-gray-100 dark:bg-gray-700'}`}>
          <p className={`text-sm ${isRecording && recordingSession ? 'text-blue-800 dark:text-blue-200' : 'text-gray-600 dark:text-gray-400'}`}>
            {isRecording && recordingSession ? (
              <>
                <strong>AI Training Ready:</strong> ZIP archive will auto-download when recording stops.
                Contains synchronized video (.webm) and input data (.json) with timestamped keyboard/mouse events.
              </>
            ) : (
              <>
                <strong>Ready to Record:</strong> Start recording to capture synchronized video and input data for AI training.
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
