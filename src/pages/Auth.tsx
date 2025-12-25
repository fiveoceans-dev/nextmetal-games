import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();
  const { t } = useTranslation();

  useEffect(() => {
    // Check if user is already logged in (only if Supabase is available)
    if (supabase) {
      supabase.auth.getSession().then(({ data: { session } }) => {
        if (session) {
          navigate("/dashboard");
        }
      });
    } else {
      // For demo purposes, auto-redirect to dashboard
      setTimeout(() => navigate("/dashboard"), 1000);
    }
  }, [navigate]);

  const handleDemoLogin = async () => {
    setEmail("demo@airdrop.io");
    setPassword("demo123456");
    setIsLogin(true);
    
    // Try to initialize demo user if it doesn't exist
    try {
      await supabase.functions.invoke('init-demo-user');
    } catch (error) {
      console.log('Demo user initialization:', error);
    }
    
    toast({
      title: t("auth.demoToast.title"),
      description: t("auth.demoToast.description"),
    });
  };

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) throw error;

        toast({
          title: t("auth.loginToast.title"),
          description: t("auth.loginToast.description"),
        });
        
        navigate("/dashboard");
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/dashboard`,
            data: {
              username: username,
            },
          },
        });

        if (error) throw error;

        toast({
          title: t("auth.signupToast.title"),
          description: t("auth.signupToast.description"),
        });
        
        setIsLogin(true);
      }
    } catch (error: any) {
      setError(error.message);
      toast({
        variant: "destructive",
        title: t("auth.errorToast.title"),
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            
            <span className="text-2xl font-bold glow-text">Next Metal</span>
          </div>

        </div>

        <Card className="glass-card border-primary/30">
          <CardHeader>
            <CardTitle>{isLogin ? t("auth.title.login") : t("auth.title.signup")}</CardTitle>
            <CardDescription>
              {isLogin
                ? t("auth.description.login")
                : t("auth.description.signup")}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleAuth} className="space-y-4">
              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="username">{t("auth.fields.username")}</Label>
                  <Input
                    id="username"
                    type="text"
                    placeholder={t("auth.placeholders.username")}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required={!isLogin}
                    className="bg-background/50"
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">{t("auth.fields.email")}</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder={t("auth.placeholders.email")}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-background/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">{t("auth.fields.password")}</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  className="bg-background/50"
                />
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={loading}
              >
                {loading ? t("auth.loading") : isLogin ? t("auth.actions.login") : t("auth.actions.signup")}
              </Button>

              <div className="text-center text-sm">
                <button
                  type="button"
                  onClick={() => {
                    setIsLogin(!isLogin);
                    setError("");
                  }}
                  className="text-primary hover:underline"
                >
                  {isLogin
                    ? t("auth.switchToSignup")
                    : t("auth.switchToLogin")}
                </button>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">{t("auth.or")}</span>
                </div>
              </div>
            {isLogin && (
              <Alert className="mt-4 bg-primary/10 border-primary/30">
                <AlertCircle className="h-4 w-4 text-primary" />
                <AlertDescription className="text-sm">
                  {t("auth.demoHint")}
                </AlertDescription>
              </Alert>
            )}
              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={handleDemoLogin}
                disabled={loading}
              >
                {t("auth.demoButton")}
              </Button>
              
            </form>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="text-muted-foreground"
          >
            {t("auth.back")}
          </Button>
        </div>
      </div>
    </div>
  );
}
