import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Gamepad2, Info, Loader2, Plus } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { LinkedAccountCard } from "./LinkedAccountCard";
import { VerificationModal } from "./VerificationModal";
import { useTranslation } from "react-i18next";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface LinkedAccount {
  id: string;
  summoner_name: string | null;
  game_name: string | null;
  tag_line: string | null;
  region: string;
  rank_tier: string | null;
  rank_division: string | null;
  verified: boolean;
  verification_code: string | null;
}

interface Step1Props {
  userId: string;
  onComplete: () => void;
}

export function Step1LinkAccount({ userId, onComplete }: Step1Props) {
  const [gameName, setGameName] = useState("");
  const [tagLine, setTagLine] = useState("");
  const [region, setRegion] = useState("na1");
  const [loading, setLoading] = useState(false);
  const [linkedAccounts, setLinkedAccounts] = useState<LinkedAccount[]>([]);
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  const [currentVerificationCode, setCurrentVerificationCode] = useState("");
  const [currentAccountId, setCurrentAccountId] = useState("");
  const { toast } = useToast();
  const { t } = useTranslation();

  // Check if Supabase is available
  if (!supabase) {
    return (
      <div className="text-center py-8">
        <Gamepad2 className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
        <h3 className="text-lg font-medium mb-2">{t("steps.linkAccount.unavailableTitle")}</h3>
        <p className="text-muted-foreground">
          {t("steps.linkAccount.unavailableDescription")}
        </p>
      </div>
    );
  }

  useEffect(() => {
    fetchLinkedAccounts();
  }, [userId]);

  const fetchLinkedAccounts = async () => {
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

  const handleStartVerification = async () => {
    if (!gameName.trim() || !tagLine.trim()) {
      toast({
        variant: "destructive",
        title: t("steps.linkAccount.toast.missing.title"),
        description: t("steps.linkAccount.toast.missing.description"),
      });
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("link-lol-account", {
        body: {
          gameName: gameName.trim(),
          tagLine: tagLine.trim(),
          region,
          userId,
        },
      });

      if (error) throw error;

      if (data.success) {
        setCurrentVerificationCode(data.verificationCode);
        setCurrentAccountId(data.accountId);
        setShowVerificationModal(true);
        toast({
          title: t("steps.linkAccount.toast.found.title"),
          description: t("steps.linkAccount.toast.found.description"),
        });
        await fetchLinkedAccounts();
        setGameName("");
        setTagLine("");
      }
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: t("steps.linkAccount.toast.error.title"),
        description: error.message || t("steps.linkAccount.toast.error.description"),
      });
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async (accountId?: string) => {
    const idToVerify = accountId || currentAccountId;
    setLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("verify-lol-account", {
        body: {
          accountId: idToVerify,
          userId,
        },
      });

      if (error) throw error;

      if (data.success) {
        toast({
          title: t("steps.linkAccount.toast.verified.title"),
          description: t("steps.linkAccount.toast.verified.description"),
        });
        setShowVerificationModal(false);
        await fetchLinkedAccounts();
        onComplete(); // Complete step after successful verification
      } else {
        toast({
          variant: "destructive",
          title: t("steps.linkAccount.toast.verifyFailed.title"),
          description: data.message || t("steps.linkAccount.toast.verifyFailed.description"),
        });
      }
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: t("steps.linkAccount.toast.error.title"),
        description: error.message || t("steps.linkAccount.toast.error.description"),
      });
    } finally {
      setLoading(false);
    }
  };

  const handleUnlink = async (accountId: string) => {
    setLoading(true);
    try {
      const { error } = await supabase
        .from("linked_accounts")
        .delete()
        .eq("id", accountId);

      if (error) throw error;

      toast({
        title: t("steps.linkAccount.toast.unlink.title"),
        description: t("steps.linkAccount.toast.unlink.description"),
      });
      await fetchLinkedAccounts();
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: t("steps.linkAccount.toast.unlinkError.title"),
        description: error.message || t("steps.linkAccount.toast.unlinkError.description"),
      });
    } finally {
      setLoading(false);
    }
  };

  const regions = [
    { value: "na1", label: t("regions.na1") },
    { value: "euw1", label: t("regions.euw1") },
    { value: "eune1", label: t("regions.eune1") },
    { value: "kr", label: t("regions.kr") },
    { value: "br1", label: t("regions.br1") },
    { value: "la1", label: t("regions.la1") },
    { value: "la2", label: t("regions.la2") },
    { value: "oc1", label: t("regions.oc1") },
    { value: "ru", label: t("regions.ru") },
    { value: "tr1", label: t("regions.tr1") },
    { value: "jp1", label: t("regions.jp1") },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <Card className="glass-card border-primary/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Gamepad2 className="h-5 w-5 text-primary" />
            {t("steps.linkAccount.title")}
          </CardTitle>
          <CardDescription>
            {t("steps.linkAccount.description")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="bg-primary/10 border-primary/30">
            <Info className="h-4 w-4 text-primary" />
            <AlertDescription>
              <strong>{t("steps.linkAccount.privacyTitle")}</strong> {t("steps.linkAccount.privacyDescription")}
            </AlertDescription>
          </Alert>

          {linkedAccounts.length > 0 && (
            <div className="space-y-3">
              <Label>{t("steps.linkAccount.linkedAccounts")}</Label>
              {linkedAccounts.map((account) => (
                <LinkedAccountCard
                  key={account.id}
                  account={account}
                  onVerify={handleVerify}
                  onUnlink={handleUnlink}
                  isLoading={loading}
                />
              ))}
            </div>
          )}

          <div className="space-y-4 pt-4 border-t">
            <div className="flex items-center gap-2 mb-2">
              <Plus className="h-4 w-4 text-primary" />
              <Label>{t("steps.linkAccount.addAccount")}</Label>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="gameName">{t("steps.linkAccount.gameName")}</Label>
                <Input
                  id="gameName"
                  placeholder="GameName"
                  value={gameName}
                  onChange={(e) => setGameName(e.target.value)}
                  disabled={loading}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tagLine">{t("steps.linkAccount.tagLine")}</Label>
                <Input
                  id="tagLine"
                  placeholder="#NA1"
                  value={tagLine}
                  onChange={(e) => setTagLine(e.target.value)}
                  disabled={loading}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="region">{t("steps.linkAccount.region")}</Label>
              <Select value={region} onValueChange={setRegion} disabled={loading}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {regions.map((r) => (
                    <SelectItem key={r.value} value={r.value}>
                      {r.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button
              onClick={handleStartVerification}
              disabled={loading}
              className="w-full"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  {t("steps.linkAccount.starting")}
                </>
              ) : (
                t("steps.linkAccount.startVerification")
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      <VerificationModal
        isOpen={showVerificationModal}
        onClose={() => setShowVerificationModal(false)}
        verificationCode={currentVerificationCode}
        onVerify={() => handleVerify()}
        isVerifying={loading}
      />
    </div>
  );
}
