import { useEffect, useState } from "react";
import { useNavigate, useLocation, Routes, Route } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { User, Session } from "@supabase/supabase-js";
import { useToast } from "@/hooks/use-toast";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import DashboardStudio from "./DashboardStudio";
import DashboardGallery from "./DashboardGallery";
import DashboardRewards from "./DashboardRewards";
import DashboardSettings from "./DashboardSettings";

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();

  useEffect(() => {
    // Only set up Supabase auth if it's available
    if (!supabase) {
      // For demo purposes, create a mock user
      setUser({
        id: 'demo-user',
        email: 'demo@nextmetal.com',
        user_metadata: { name: 'Demo User' }
      } as User);
      setSession({ user: null } as Session);
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

  // Redirect to studio if on base dashboard route
  useEffect(() => {
    if (location.pathname === "/dashboard") {
      navigate("/dashboard/studio", { replace: true });
    }
  }, [location.pathname, navigate]);

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
        <DashboardSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container h-12 flex items-center justify-between px-6">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-muted-foreground">Next Metal</span>
            </div>
            <div className="text-xs text-muted-foreground">
              Welcome back, {user.email?.split('@')[0]}
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6">
          <Routes>
            <Route path="/studio" element={<DashboardStudio />} />
            <Route path="/gallery" element={<DashboardGallery />} />
            <Route path="/rewards" element={<DashboardRewards />} />
            <Route path="/settings" element={<DashboardSettings />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
