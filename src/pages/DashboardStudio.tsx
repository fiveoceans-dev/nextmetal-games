import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, Square, Monitor, Camera, Keyboard, Volume2 } from "lucide-react";
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
  recordingSession: RecordingSession | null;
  inputEventCount: number;
  duration: number;
  isStreamReady: boolean;
  videoRef: React.RefObject<HTMLVideoElement>;
  canvasRef: React.RefObject<HTMLCanvasElement>;
  captureScreen: boolean;
  captureCamera: boolean;
  captureAudio: boolean;
  captureInput: boolean;
  onToggleScreen: () => void;
  onToggleCamera: () => void;
  onToggleAudio: () => void;
  onToggleInput: () => void;
  onStartRecording: () => void;
  onStopRecording: () => void;
}

export default function DashboardStudio({
  isRecording,
  recordingSession,
  inputEventCount,
  duration,
  isStreamReady,
  videoRef,
  canvasRef,
  captureScreen,
  captureCamera,
  captureAudio,
  captureInput,
  onToggleScreen,
  onToggleCamera,
  onToggleAudio,
  onToggleInput,
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
        <div className="flex flex-wrap items-center gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <Button
                onClick={isRecording ? onStopRecording : onStartRecording}
                className={isRecording ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'}
                disabled={!captureScreen || (!isStreamReady && isRecording)}
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
              <Button variant="outline">
                {t("studio.action.stream")}
              </Button>
              {isRecording && (
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{Math.floor(duration / 60)}:{(duration % 60).toString().padStart(2, '0')}</span>
                  <span>{t("studio.events", { count: inputEventCount })}</span>
                </div>
              )}
            </div>

            <div className="flex gap-6 ml-auto">
              <div className="text-center">
                <Monitor className="h-5 w-5 mx-auto mb-1" />
                <div className="text-sm">{t("studio.labels.screen")}</div>
                <button
                  type="button"
                  onClick={onToggleScreen}
                  aria-pressed={captureScreen}
                  className={`mt-1 rounded-full px-2 py-0.5 text-xs font-semibold ${
                    captureScreen ? "bg-emerald-500 text-white" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {captureScreen ? t("studio.state.on") : t("studio.state.off")}
                </button>
              </div>

              <div className="text-center">
                <Camera className="h-5 w-5 mx-auto mb-1" />
                <div className="text-sm">{t("studio.labels.camera")}</div>
                <button
                  type="button"
                  onClick={onToggleCamera}
                  aria-pressed={captureCamera}
                  className={`mt-1 rounded-full px-2 py-0.5 text-xs font-semibold ${
                    captureCamera ? "bg-emerald-500 text-white" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {captureCamera ? t("studio.state.on") : t("studio.state.off")}
                </button>
              </div>

              <div className="text-center">
                <Volume2 className="h-5 w-5 mx-auto mb-1" />
                <div className="text-sm">{t("studio.labels.audio")}</div>
                <button
                  type="button"
                  onClick={onToggleAudio}
                  aria-pressed={captureAudio}
                  className={`mt-1 rounded-full px-2 py-0.5 text-xs font-semibold ${
                    captureAudio ? "bg-emerald-500 text-white" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {captureAudio ? t("studio.state.on") : t("studio.state.off")}
                </button>
              </div>

              <div className="text-center">
                <Keyboard className="h-5 w-5 mx-auto mb-1" />
                <div className="text-sm">{t("studio.labels.input")}</div>
                <button
                  type="button"
                  onClick={onToggleInput}
                  aria-pressed={captureInput}
                  className={`mt-1 rounded-full px-2 py-0.5 text-xs font-semibold ${
                    captureInput ? "bg-emerald-500 text-white" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {captureInput ? t("studio.state.on") : t("studio.state.off")}
                </button>
              </div>
            </div>
          </div>
        </div>

      <div className="rounded-lg bg-muted p-4 flex justify-center">
        <div className="relative inline-flex h-[250px] max-w-full items-center justify-center overflow-hidden rounded-lg bg-black">
          <canvas
            ref={canvasRef}
            className="h-full w-auto max-w-full object-contain bg-black"
            style={{ display: isStreamReady ? 'block' : 'none' }}
          />
          <video
            ref={videoRef}
            className="h-full w-auto max-w-full object-contain bg-black"
            style={{ display: 'none' }}
            muted
          />

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
