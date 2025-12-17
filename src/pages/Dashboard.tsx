import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { User, Session } from "@supabase/supabase-js";
import { useToast } from "@/hooks/use-toast";
import JSZip from "jszip";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import DashboardStudio from "./DashboardStudio";
import DashboardGallery from "./DashboardGallery";
import DashboardRewards from "./DashboardRewards";
import DashboardSettings from "./DashboardSettings";

interface RecordingSession {
  id: string;
  startTime: number;
  screenStream?: MediaStream;
  webcamStream?: MediaStream;
  inputEvents: any[];
  mediaRecorder?: MediaRecorder;
  recordedChunks: Blob[];
}

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("studio");
  const navigate = useNavigate();
  const { toast } = useToast();

  // Recording state - moved from DashboardStudio
  const [isRecording, setIsRecording] = useState(false);
  const [selectedScreen, setSelectedScreen] = useState<string>("screen");
  const [recordingSession, setRecordingSession] = useState<RecordingSession | null>(null);
  const [inputEventCount, setInputEventCount] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isStreamReady, setIsStreamReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const durationIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Only set up Supabase auth if it's available
    if (!supabase) {
      // For demo purposes, create a mock user
      setUser({
        id: 'demo-user',
        email: 'demo@nextmetal.com',
        user_metadata: { name: 'Demo User' },
        app_metadata: {},
        aud: 'authenticated',
        created_at: new Date().toISOString()
      } as User);
      setSession({ user: null } as unknown as Session);
      setLoading(false);
      return;
    }

    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);

        if (!session) {
          navigate("/auth");
        }
      }
    );

    // THEN check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);

      if (!session) {
        navigate("/auth");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  // Default to studio section
  useEffect(() => {
    setActiveSection("studio");
  }, []);

  // Input event listeners - moved from DashboardStudio
  useEffect(() => {
    if (!isRecording || !recordingSession) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (!recordingSession) return;
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
      setInputEventCount(prev => prev + 1);
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (!recordingSession) return;
      recordingSession.inputEvents.push({
        timestamp: Date.now(),
        type: 'keyboard',
        event: 'keyup',
        data: {
          key: event.key,
          code: event.code
        }
      });
      setInputEventCount(prev => prev + 1);
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!recordingSession) return;
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
      setInputEventCount(prev => prev + 1);
    };

    const handleMouseDown = (event: MouseEvent) => {
      if (!recordingSession) return;
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
      setInputEventCount(prev => prev + 1);
    };

    const handleMouseUp = (event: MouseEvent) => {
      if (!recordingSession) return;
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
      setInputEventCount(prev => prev + 1);
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

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (durationIntervalRef.current) {
        clearInterval(durationIntervalRef.current);
      }
    };
  }, []);

  // Recording functions - moved from DashboardStudio
  const startRecording = async () => {
    setIsStreamReady(false);
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

      // Setup video preview
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');

      if (video && canvas && ctx) {
        canvas.width = 1920;
        canvas.height = 1080;
        video.srcObject = combinedStream;

        // Set up canvas drawing for live preview
        const drawFrame = () => {
          if (video && ctx) {
            try {
              // Clear canvas
              ctx.clearRect(0, 0, canvas.width, canvas.height);

              // Draw screen capture
              ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

              // Add a subtle border/frame effect
              ctx.strokeStyle = 'rgba(59, 130, 246, 0.3)';
              ctx.lineWidth = 4;
              ctx.strokeRect(2, 2, canvas.width - 4, canvas.height - 4);

              requestAnimationFrame(drawFrame);
            } catch (e) {
              // Handle potential drawing errors
              console.warn('Canvas drawing error:', e);
            }
          }
        };

        // Wait for video to be ready
        video.onloadedmetadata = () => {
          video.play().then(() => {
            setIsStreamReady(true);
            drawFrame();
          }).catch(console.error);
        };
      }

      const newRecordingSession: RecordingSession = {
        id: `nextmetal_video_${Date.now()}`,
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
          newRecordingSession.recordedChunks.push(event.data);
        }
      };

      mediaRecorder.onstop = async () => {
        const zip = new JSZip();

        // Add video file to ZIP
        const videoBlob = new Blob(newRecordingSession.recordedChunks, { type: 'video/webm' });
        zip.file(`${newRecordingSession.id}.webm`, videoBlob);

        // Add input events as JSON to ZIP
        const inputData = {
          sessionId: newRecordingSession.id,
          startTime: newRecordingSession.startTime,
          inputEvents: newRecordingSession.inputEvents,
          duration: Date.now() - newRecordingSession.startTime
        };
        const inputBlob = new Blob([JSON.stringify(inputData, null, 2)], { type: 'application/json' });
        zip.file(`${newRecordingSession.id}_input.json`, inputBlob);

        // Add metadata file to ZIP
        const metadata = {
          session: {
            id: newRecordingSession.id,
            startTime: new Date(newRecordingSession.startTime).toISOString(),
            endTime: new Date().toISOString(),
            duration: Date.now() - newRecordingSession.startTime,
            totalInputEvents: newRecordingSession.inputEvents.length
          },
          recording: {
            videoFormat: 'WebM (VP9)',
            videoCodec: 'VP9',
            audioEnabled: true,
            audioSource: 'system',
            webcamEnabled: true,
            screenRecordingEnabled: true,
            inputTrackingEnabled: true
          },
          system: {
            userAgent: navigator.userAgent,
            platform: navigator.platform,
            language: navigator.language,
            timestamp: new Date().toISOString()
          },
          ai: {
            trainingReady: true,
            dataTypes: ['video', 'audio', 'webcam', 'keyboard', 'mouse'],
            synchronizationMethod: 'timestamp-based',
            frameRate: 30,
            dataFormat: 'WebM + JSON'
          }
        };
        const metadataBlob = new Blob([JSON.stringify(metadata, null, 2)], { type: 'application/json' });
        zip.file(`${newRecordingSession.id}_metadata.json`, metadataBlob);

        // Generate ZIP file and download
        const zipBlob = await zip.generateAsync({ type: 'blob' });
        const zipUrl = URL.createObjectURL(zipBlob);

        const a = document.createElement('a');
        a.href = zipUrl;
        a.download = `NextMetalStorage/${newRecordingSession.id}.zip`;
        a.click();

        // Clean up URLs
        URL.revokeObjectURL(zipUrl);
      };

      newRecordingSession.mediaRecorder = mediaRecorder;
      setRecordingSession(newRecordingSession);
      setIsRecording(true);

      mediaRecorder.start(1000); // Record in 1-second chunks

      // Start duration timer
      durationIntervalRef.current = setInterval(() => {
        setDuration(prev => prev + 1);
      }, 1000);

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
    }

    if (durationIntervalRef.current) {
      clearInterval(durationIntervalRef.current);
      durationIntervalRef.current = null;
    }

    setIsRecording(false);
    setRecordingSession(null);
    setDuration(0);
    setInputEventCount(0);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <div className="w-64 border-r bg-card">
        <DashboardSidebar
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Content */}
        <main className="flex-1 p-6">
          {activeSection === "studio" && (
            <DashboardStudio
              isRecording={isRecording}
              selectedScreen={selectedScreen}
              recordingSession={recordingSession}
              inputEventCount={inputEventCount}
              duration={duration}
              isStreamReady={isStreamReady}
              videoRef={videoRef}
              canvasRef={canvasRef}
              onSelectedScreenChange={setSelectedScreen}
              onStartRecording={startRecording}
              onStopRecording={stopRecording}
            />
          )}
          {activeSection === "gallery" && <DashboardGallery />}
          {activeSection === "rewards" && <DashboardRewards />}
          {activeSection === "settings" && <DashboardSettings />}
        </main>
      </div>
    </div>
  );
}
