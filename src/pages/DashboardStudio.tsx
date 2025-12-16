import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Play, Square, Monitor, Camera, Keyboard, Mouse, Download } from "lucide-react";

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
                <Keyboard className="h-5 w-5 mx-auto mb-1" />
                <div className="text-sm">Input</div>
                <Badge variant={isRecording ? "default" : "secondary"} className="text-xs">
                  {isRecording ? `${inputEventCount}` : "Offline"}
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
        <div className="relative bg-black rounded-lg aspect-[4/1] overflow-hidden">
            <canvas
              ref={canvasRef}
              className="w-full h-full object-contain"
              style={{ display: isStreamReady ? 'block' : 'none' }}
            />
            <video
              ref={videoRef}
              className="w-full h-full object-contain"
              style={{ display: 'none' }}
              muted
            />

            {isRecording && (
              <Badge className="absolute top-2 left-2 bg-red-600">REC</Badge>
            )}

            {!isStreamReady && (
              <div className="absolute inset-0 flex items-center justify-center text-white/50">
                <Monitor className="h-8 w-8" />
              </div>
            )}
          </div>
        </div>


      {isRecording && recordingSession && (
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-4">
            <Download className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <h3 className="font-semibold text-blue-900 dark:text-blue-100">Session Info & Downloads</h3>
          </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="text-sm">
                  <span className="font-medium">Session ID:</span> {recordingSession.id}
                </div>
                <div className="text-sm">
                  <span className="font-medium">Start Time:</span> {new Date(recordingSession.startTime).toLocaleTimeString()}
                </div>
                <div className="text-sm">
                  <span className="font-medium">Duration:</span> {Math.floor(duration / 60)}:{(duration % 60).toString().padStart(2, '0')}
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-sm">
                  <span className="font-medium">Input Events:</span> {inputEventCount}
                </div>
                <div className="text-sm">
                  <span className="font-medium">Video Format:</span> WebM (VP9)
                </div>
                <div className="text-sm">
                  <span className="font-medium">Data Export:</span> JSON + Video
                </div>
              </div>
            </div>
            <div className="mt-4 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <p className="text-sm text-blue-800 dark:text-blue-200">
                <strong>AI Training Ready:</strong> Files will auto-download when recording stops.
                Video (.webm) contains synchronized screen + webcam. Input data (.json) contains timestamped keyboard/mouse events.
              </p>
            </div>
        </div>
      )}
    </div>
  );
}
