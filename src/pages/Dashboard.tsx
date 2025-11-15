import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { User, Session } from "@supabase/supabase-js";
import { Button } from "@/components/ui/button";
import { Shield, LogOut } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { WalletConnect } from "@/components/WalletConnect";
import { NetworkStatus } from "@/components/NetworkStatus";
import { useAccount } from 'wagmi';
import { StepIndicator } from "@/components/StepIndicator";
import { Step1LinkAccount } from "@/components/Step1LinkAccount";
import { Step2ConnectWallet } from "@/components/Step2ConnectWallet";
import { Step3SaveToBlockchain } from "@/components/Step3SaveToBlockchain";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { isConnected } = useAccount();

  const steps = [
    { number: 1, title: "Link Game Account", description: "Connect your League account" },
    { number: 2, title: "Connect Wallet", description: "Link your Web3 wallet" },
    { number: 3, title: "Save to Monad", description: "Store credentials on-chain" },
  ];

  useEffect(() => {
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

  // Check completion status on mount to mark steps as completed
  useEffect(() => {
    if (!user) return;

    const checkCompletionStatus = async () => {
      const completed: number[] = [];

      // Check Step 1: Verified League account
      const { data: linkedAccounts } = await supabase
        .from("linked_accounts")
        .select("verified")
        .eq("user_id", user.id);
      
      if (linkedAccounts?.some(acc => acc.verified)) {
        completed.push(1);
      }

      // Check Step 2: Wallet connected
      if (isConnected) {
        completed.push(2);
      }

      setCompletedSteps(completed);
    };

    checkCompletionStatus();
  }, [user, isConnected]);

  const handleStep1Complete = () => {
    setCompletedSteps(prev => prev.includes(1) ? prev : [...prev, 1]);
    setCurrentStep(2);
  };

  const handleStep2Complete = () => {
    setCompletedSteps(prev => prev.includes(2) ? prev : [...prev, 2]);
    setCurrentStep(3);
  };

  const handleStepClick = (stepNumber: number) => {
    // Allow navigation to completed steps or current step
    if (completedSteps.includes(stepNumber) || stepNumber === currentStep) {
      setCurrentStep(stepNumber);
    }
  };

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      toast({
        title: "Logged out",
        description: "You've been successfully logged out.",
      });
      navigate("/");
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    }
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
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <header className="h-16 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-10">
            <div className="container h-full flex items-center justify-between px-4">
              <div className="flex items-center gap-4">
                <SidebarTrigger />
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
                  <Shield className="h-6 w-6 text-primary" />
                  <span className="text-lg font-bold glow-text">monad.passport</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <NetworkStatus />
                <WalletConnect />
                <Button variant="ghost" size="sm" onClick={handleLogout}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </div>
            </div>
          </header>

          <main className="flex-1 container py-8 px-4">
            <div className="max-w-5xl mx-auto space-y-8">
              <div className="text-center mb-8 animate-fade-in">
                <h1 className="text-4xl font-bold mb-2 glow-text">Dashboard</h1>
                <p className="text-muted-foreground">
                  Complete these steps to save your verified League credentials on-chain
                </p>
              </div>

              <StepIndicator 
                steps={steps} 
                currentStep={currentStep} 
                completedSteps={completedSteps}
                onStepClick={handleStepClick}
              />

              {currentStep === 1 && user && (
                <Step1LinkAccount 
                  userId={user.id} 
                  onComplete={handleStep1Complete}
                />
              )}

              {currentStep === 2 && (
                <Step2ConnectWallet onComplete={handleStep2Complete} />
              )}

              {currentStep === 3 && (
                <Step3SaveToBlockchain 
                  canProceed={completedSteps.includes(1) && completedSteps.includes(2)}
                  userId={user.id}
                />
              )}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
