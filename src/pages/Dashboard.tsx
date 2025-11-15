import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { User, Session } from "@supabase/supabase-js";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Shield, LogOut, CheckCircle2, Info, Gamepad2, Wallet } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { LinkAccountWorkflow } from "@/components/LinkAccountWorkflow";
import { WalletConnect } from "@/components/WalletConnect";
import { NetworkStatus } from "@/components/NetworkStatus";
import { useAccount } from 'wagmi';

interface LinkedAccount {
  id: string;
  summoner_name: string;
  region: string;
  rank_tier: string | null;
  rank_division: string | null;
  verified: boolean;
}

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [linkedAccounts, setLinkedAccounts] = useState<LinkedAccount[]>([]);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { isConnected } = useAccount();
  
  const hasVerifiedAccount = linkedAccounts.some(acc => acc.verified);
  const canSaveToBlockchain = hasVerifiedAccount && isConnected;

  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        
        if (!session) {
          navigate("/auth");
        } else {
          fetchLinkedAccounts(session.user.id);
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
      } else {
        fetchLinkedAccounts(session.user.id);
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const fetchLinkedAccounts = async (userId: string) => {
    const { data, error } = await supabase
      .from("linked_accounts")
      .select("*")
      .eq("user_id", userId);

    if (error) {
      console.error("Error fetching linked accounts:", error);
      return;
    }

    setLinkedAccounts(data || []);
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
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold glow-text">monad.passport</span>
          </div>

          <div className="flex items-center gap-4">
            <NetworkStatus />
            <span className="text-sm text-muted-foreground hidden sm:inline">
              {user.email}
            </span>
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Header */}
            <div className="text-center animate-fade-in-up">
              <h1 className="text-4xl font-bold mb-4 glow-text">Dashboard</h1>
              <p className="text-muted-foreground text-lg">
                Complete these steps to save your gaming credentials on-chain
              </p>
            </div>

            {/* Progress Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className={`glass-card ${hasVerifiedAccount ? 'border-primary/50' : 'border-border'}`}>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                      hasVerifiedAccount ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'
                    }`}>
                      {hasVerifiedAccount ? <CheckCircle2 className="h-5 w-5" /> : <span className="font-bold">1</span>}
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Link Game Account</p>
                      <p className="text-xs text-muted-foreground">
                        {hasVerifiedAccount ? 'Complete' : 'Required'}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className={`glass-card ${isConnected ? 'border-primary/50' : 'border-border'}`}>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                      isConnected ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'
                    }`}>
                      {isConnected ? <CheckCircle2 className="h-5 w-5" /> : <span className="font-bold">2</span>}
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Connect Wallet</p>
                      <p className="text-xs text-muted-foreground">
                        {isConnected ? 'Complete' : 'Required'}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className={`glass-card ${canSaveToBlockchain ? 'border-primary/50' : 'border-border'}`}>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                      canSaveToBlockchain ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'
                    }`}>
                      <span className="font-bold">3</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Save to Blockchain</p>
                      <p className="text-xs text-muted-foreground">
                        {canSaveToBlockchain ? 'Ready' : 'Complete steps 1 & 2'}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Step 1: Link Game Account */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  hasVerifiedAccount ? 'bg-primary/20 text-primary' : 'bg-primary text-primary-foreground'
                }`}>
                  {hasVerifiedAccount ? <CheckCircle2 className="h-4 w-4" /> : <Gamepad2 className="h-4 w-4" />}
                </div>
                <h2 className="text-2xl font-bold">Step 1: Link Your Game Account</h2>
              </div>
              <LinkAccountWorkflow userId={user.id} />
            </div>

            {/* Step 2: Connect Wallet */}
            <div className={`space-y-4 ${!hasVerifiedAccount ? 'opacity-50 pointer-events-none' : ''}`}>
              <div className="flex items-center gap-3">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  isConnected ? 'bg-primary/20 text-primary' : 'bg-primary text-primary-foreground'
                }`}>
                  {isConnected ? <CheckCircle2 className="h-4 w-4" /> : <Wallet className="h-4 w-4" />}
                </div>
                <h2 className="text-2xl font-bold">Step 2: Connect Your Wallet</h2>
              </div>
              <Card className="glass-card border-primary/30">
                <CardHeader>
                  <CardDescription>
                    Connect your Web3 wallet to Monad Testnet
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <WalletConnect />
                </CardContent>
              </Card>
            </div>

            {/* Step 3: Save to Blockchain */}
            <div className={`space-y-4 ${!canSaveToBlockchain ? 'opacity-50 pointer-events-none' : ''}`}>
              <div className="flex items-center gap-3">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  canSaveToBlockchain ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                }`}>
                  <Shield className="h-4 w-4" />
                </div>
                <h2 className="text-2xl font-bold">Step 3: Save to Blockchain</h2>
              </div>
              
              <Card className="glass-card border-primary/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    Player Data Storage
                  </CardTitle>
                  <CardDescription>
                    Mint your verified gaming credentials as NFTs on Monad Testnet
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {!canSaveToBlockchain && (
                    <Alert className="bg-muted/50 border-accent/30">
                      <Info className="h-4 w-4 text-accent" />
                      <AlertDescription>
                        Complete steps 1 and 2 to unlock blockchain storage
                      </AlertDescription>
                    </Alert>
                  )}
                  
                  {canSaveToBlockchain && linkedAccounts.length > 0 && (
                    <div className="space-y-3">
                      <p className="text-sm text-muted-foreground">Accounts ready to save:</p>
                      {linkedAccounts.filter(acc => acc.verified).map((account) => (
                        <div key={account.id} className="p-3 rounded-lg bg-muted/50 border border-border flex items-center justify-between">
                          <div>
                            <p className="font-medium">{account.summoner_name}</p>
                            <p className="text-xs text-muted-foreground">
                              {account.region.toUpperCase()} • {account.rank_tier} {account.rank_division}
                            </p>
                          </div>
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <Button 
                    className="w-full"
                    disabled={!canSaveToBlockchain}
                    onClick={() => {
                      toast({
                        title: "Coming Soon",
                        description: "Smart contract deployment is in progress. This feature will be available soon!",
                      });
                    }}
                  >
                    Save to Blockchain
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
