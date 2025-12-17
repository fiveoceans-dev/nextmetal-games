import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Play, Square, Monitor, Camera, Keyboard, Mouse } from "lucide-react";

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

export default function RecordingDashboard() {
  const [isRecording, setIsRecording] = useState(false);
  const [selectedScreen, setSelectedScreen] = useState<string>("");
  const [screens, setScreens] = useState<MediaDeviceInfo[]>([]);
  const [recordingSession, setRecordingSession] = useState<RecordingSession | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // No longer pre-requesting permissions - they will be requested when Start Recording is clicked

  const startRecording = async () => {
    try {
      // Get screen capture
      const screenStream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: true
      });

      // Get webcam
      const webcamStream = await navigator.mediaDevices.getUserMedia({
        video: { width: 1280, height: 720 },
        audio: false // No mic as requested
      });

      // Create combined stream for recording
      const combinedStream = new MediaStream([
        ...screenStream.getVideoTracks(),
        ...webcamStream.getVideoTracks(),
        ...screenStream.getAudioTracks()
      ]);

      // Create canvas for synchronization overlay
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      const video = videoRef.current;

      if (canvas && ctx && video) {
        canvas.width = 1920;
        canvas.height = 1080;
        video.srcObject = combinedStream;
        video.play();

        // Overlay webcam on screen capture
        const drawFrame = () => {
          if (video && ctx && isRecording) {
            // Draw screen capture
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

            // Draw webcam overlay (top-right corner)
            ctx.drawImage(video, canvas.width - 320, 20, 300, 200);

            requestAnimationFrame(drawFrame);
          }
        };
        drawFrame();
      }

      const session: RecordingSession = {
        id: `recording_${Date.now()}`,
        startTime: Date.now(),
        screenStream,
        webcamStream,
        inputEvents: [],
        recordedChunks: []
      };

      // Start MediaRecorder
      const mediaRecorder = new MediaRecorder(combinedStream, {
        mimeType: 'video/webm;codecs=vp9'
      });

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          session.recordedChunks.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const blob = new Blob(session.recordedChunks, { type: 'video/webm' });
        const url = URL.createObjectURL(blob);

        // Create download link
        const a = document.createElement('a');
        a.href = url;
        a.download = `${session.id}.webm`;
        a.click();

        // Save input events
        const inputData = {
          sessionId: session.id,
          startTime: session.startTime,
          inputEvents: session.inputEvents,
          duration: Date.now() - session.startTime
        };

        const inputBlob = new Blob([JSON.stringify(inputData, null, 2)], { type: 'application/json' });
        const inputUrl = URL.createObjectURL(inputBlob);
        const inputA = document.createElement('a');
        inputA.href = inputUrl;
        inputA.download = `${session.id}_input.json`;
        inputA.click();
      };

      session.mediaRecorder = mediaRecorder;
      setRecordingSession(session);
      setIsRecording(true);

      mediaRecorder.start(1000); // Record in 1-second chunks

    } catch (error) {
      console.error('Error starting recording:', error);
      alert('Failed to start recording. Please check permissions.');
    }
  };

  const stopRecording = () => {
    if (recordingSession) {
      recordingSession.mediaRecorder?.stop();
      recordingSession.screenStream?.getTracks().forEach(track => track.stop());
      recordingSession.webcamStream?.getTracks().forEach(track => track.stop());
      setIsRecording(false);
      setRecordingSession(null);
    }
  };

  // Input event listeners
  useEffect(() => {
    if (!isRecording || !recordingSession) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      recordingSession.inputEvents.push({
        timestamp: Date.now(),
        type: 'keyboard',
        event: 'keydown',
        data: {
          key: event.key,
          code: event.code,
          ctrlKey: event.ctrlKey,
          altKey: event.altKey,
          shiftKey: event.shiftKey
        }
      });
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      recordingSession.inputEvents.push({
        timestamp: Date.now(),
        type: 'keyboard',
        event: 'keyup',
        data: {
          key: event.key,
          code: event.code
        }
      });
    };

    const handleMouseMove = (event: MouseEvent) => {
      recordingSession.inputEvents.push({
        timestamp: Date.now(),
        type: 'mouse',
        event: 'mousemove',
        data: {
          x: event.clientX,
          y: event.clientY,
          screenX: event.screenX,
          screenY: event.screenY
        }
      });
    };

    const handleMouseDown = (event: MouseEvent) => {
      recordingSession.inputEvents.push({
        timestamp: Date.now(),
        type: 'mouse',
        event: 'mousedown',
        data: {
          button: event.button,
          x: event.clientX,
          y: event.clientY
        }
      });
    };

    const handleMouseUp = (event: MouseEvent) => {
      recordingSession.inputEvents.push({
        timestamp: Date.now(),
        type: 'mouse',
        event: 'mouseup',
        data: {
          button: event.button,
          x: event.clientX,
          y: event.clientY
        }
      });
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isRecording, recordingSession]);

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">Game Recording Studio</h1>
          <p className="text-muted-foreground">AI Training Data Capture Platform</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Monitor className="h-5 w-5" />
              Recording Controls
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Select Screen/Window</label>
                <Select value={selectedScreen} onValueChange={setSelectedScreen}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose screen to record" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="screen">Entire Screen</SelectItem>
                    <SelectItem value="window">Application Window</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-end">
                <Button
                  onClick={isRecording ? stopRecording : startRecording}
                  size="lg"
                  className={`w-full ${isRecording ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'}`}
                >
                  {isRecording ? (
                    <>
                      <Square className="h-4 w-4 mr-2" />
                      Stop Recording
                    </>
                  ) : (
                    <>
                      <Play className="h-4 w-4 mr-2" />
                      Start Recording
                    </>
                  )}
                </Button>
              </div>
            </div>

            {isRecording && (
              <div className="flex items-center gap-2">
                <Badge variant="destructive" className="animate-pulse">
                  🔴 RECORDING
                </Badge>
                <span className="text-sm text-muted-foreground">
                  Session: {recordingSession?.id}
                </span>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Camera className="h-5 w-5" />
              Live Preview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative bg-black rounded-lg overflow-hidden">
              <canvas
                ref={canvasRef}
                className="w-full h-96 object-contain"
                style={{ display: isRecording ? 'block' : 'none' }}
              />
              <video
                ref={videoRef}
                className="w-full h-96 object-contain"
                style={{ display: !isRecording ? 'block' : 'none' }}
                muted
              />
              {!isRecording && (
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  <div className="text-center">
                    <Monitor className="h-16 w-16 mx-auto mb-4 opacity-50" />
                    <p>Click "Start Recording" to begin</p>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-sm">
                <Monitor className="h-4 w-4" />
                Screen Capture
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Badge variant={isRecording ? "default" : "secondary"}>
                {isRecording ? "Active" : "Inactive"}
              </Badge>
              <p className="text-xs text-muted-foreground mt-1">
                Capturing display with system audio
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-sm">
                <Camera className="h-4 w-4" />
                Webcam
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Badge variant={isRecording ? "default" : "secondary"}>
                {isRecording ? "Active" : "Inactive"}
              </Badge>
              <p className="text-xs text-muted-foreground mt-1">
                720p overlay recording
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-sm">
                <Keyboard className="h-4 w-4" />
                <Mouse className="h-4 w-4" />
                Input Events
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Badge variant={isRecording ? "default" : "secondary"}>
                {isRecording ? "Logging" : "Inactive"}
              </Badge>
              <p className="text-xs text-muted-foreground mt-1">
                Keyboard & mouse data
              </p>
            </CardContent>
          </Card>
        </div>

        {isRecording && recordingSession && (
          <Card>
            <CardHeader>
              <CardTitle>Session Info</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium">Session ID:</span> {recordingSession.id}
                </div>
                <div>
                  <span className="font-medium">Input Events:</span> {recordingSession.inputEvents.length}
                </div>
                <div>
                  <span className="font-medium">Start Time:</span> {new Date(recordingSession.startTime).toLocaleTimeString()}
                </div>
                <div>
                  <span className="font-medium">Duration:</span> {Math.round((Date.now() - recordingSession.startTime) / 1000)}s
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
