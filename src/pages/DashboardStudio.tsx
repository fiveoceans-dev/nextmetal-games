import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Play, Square, Monitor, Camera, Keyboard, Mouse, Download, Volume2 } from "lucide-react";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">{t("studio.title")}</h1>
      </div>

      <div className="rounded-lg border border-border bg-card p-4">
        <div className="flex items-center gap-4">
            <Select value={selectedScreen} onValueChange={onSelectedScreenChange}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="screen">{t("studio.select.screen")}</SelectItem>
                <SelectItem value="window">{t("studio.select.window")}</SelectItem>
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
                  {t("studio.action.stop")}
                </>
              ) : (
                <>
                  <Play className="h-4 w-4 mr-2" />
                  {t("studio.action.record")}
                </>
              )}
            </Button>

            <div className="flex gap-6 ml-auto">
              <div className="text-center">
                <Monitor className="h-5 w-5 mx-auto mb-1" />
                <div className="text-sm">{t("studio.labels.screen")}</div>
                <Badge variant={isRecording ? "default" : "secondary"} className="text-xs">
                  {isRecording ? t("studio.state.on") : t("studio.state.off")}
                </Badge>
              </div>

              <div className="text-center">
                <Camera className="h-5 w-5 mx-auto mb-1" />
                <div className="text-sm">{t("studio.labels.camera")}</div>
                <Badge variant={isRecording ? "default" : "secondary"} className="text-xs">
                  {isRecording ? t("studio.state.on") : t("studio.state.off")}
                </Badge>
              </div>

              <div className="text-center">
                <Volume2 className="h-5 w-5 mx-auto mb-1" />
                <div className="text-sm">{t("studio.labels.audio")}</div>
                <Badge variant={isRecording ? "default" : "secondary"} className="text-xs">
                  {isRecording ? t("studio.state.on") : t("studio.state.off")}
                </Badge>
              </div>

              <div className="text-center">
                <Keyboard className="h-5 w-5 mx-auto mb-1" />
                <div className="text-sm">{t("studio.labels.input")}</div>
                <Badge variant={isRecording ? "default" : "secondary"} className="text-xs">
                  {isRecording ? t("studio.state.on") : t("studio.state.off")}
                </Badge>
              </div>
            </div>
          </div>

          {isRecording && (
            <div className="mt-4 flex items-center gap-4 text-sm">
              <Badge variant="destructive">REC</Badge>
              <span>{Math.floor(duration / 60)}:{(duration % 60).toString().padStart(2, '0')}</span>
              <span>{t("studio.events", { count: inputEventCount })}</span>
            </div>
          )}
        </div>

      <div className="rounded-lg bg-muted p-4">
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
              <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-background/60 text-muted-foreground">
                <Monitor className="h-8 w-8" />
              </div>
            )}
          </div>
        </div>


      <div
        className={`rounded-lg border border-border p-4 ${
          isRecording && recordingSession ? 'bg-primary/5' : 'bg-card'
        }`}
      >
        <div className="flex items-center gap-2 mb-4">
          <h3
            className={`font-semibold ${
              isRecording && recordingSession ? 'text-primary' : 'text-foreground'
            }`}
          >
            {t("studio.session.title")}
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="text-sm">
              <span className="font-medium">{t("studio.session.id")}</span> {recordingSession ? recordingSession.id : t("studio.session.notRecording")}
            </div>
            <div className="text-sm">
              <span className="font-medium">{t("studio.session.start")}</span> {recordingSession ? new Date(recordingSession.startTime).toLocaleTimeString() : '--:--:--'}
            </div>
            <div className="text-sm">
              <span className="font-medium">{t("studio.session.duration")}</span> {isRecording ? `${Math.floor(duration / 60)}:${(duration % 60).toString().padStart(2, '0')}` : '0:00'}
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-sm">
              <span className="font-medium">{t("studio.session.inputEvents")}</span> {isRecording ? inputEventCount : 0}
            </div>
            <div className="text-sm">
              <span className="font-medium">{t("studio.session.videoFormat")}</span> WebM (VP9)
            </div>
                <div className="text-sm">
                  <span className="font-medium">{t("studio.session.dataExport")}</span> {t("studio.session.dataExportFormat")}
                </div>
          </div>
        </div>
        <div
          className={`mt-4 rounded-lg border border-border p-3 ${
            isRecording && recordingSession ? 'bg-primary/10' : 'bg-muted'
          }`}
        >
          <p
            className={`text-sm ${
              isRecording && recordingSession ? 'text-foreground' : 'text-muted-foreground'
            }`}
          >
            {isRecording && recordingSession ? (
              <>
                <strong>{t("studio.session.readyTitle")}</strong> {t("studio.session.readyDescription")}
              </>
            ) : (
              <>
                <strong>{t("studio.session.prepTitle")}</strong> {t("studio.session.prepDescription")}
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
