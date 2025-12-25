import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Wallet, Info } from "lucide-react";
import { WalletConnect } from "./WalletConnect";
import { useAccount } from "wagmi";
import { useTranslation } from "react-i18next";

interface Step2Props {
  onComplete: () => void;
}

export function Step2ConnectWallet({ onComplete }: Step2Props) {
  const { isConnected } = useAccount();
  const { t } = useTranslation();

  const handleContinue = () => {
    if (isConnected) {
      onComplete();
    }
  };

  return (
    <div className="animate-fade-in">
      <Card className="glass-card border-primary/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wallet className="h-5 w-5 text-primary" />
            {t("steps.connectWallet.title")}
          </CardTitle>
          <CardDescription>
            {t("steps.connectWallet.description")}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert className="bg-primary/10 border-primary/30">
            <Info className="h-4 w-4 text-primary" />
            <AlertDescription>
              {t("steps.connectWallet.hint")}
            </AlertDescription>
          </Alert>

          <div className="flex flex-col items-center justify-center py-8 space-y-4">
            {isConnected ? (
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                  <Wallet className="h-8 w-8 text-primary" />
                </div>
                <p className="text-lg font-semibold text-primary">{t("steps.connectWallet.connectedTitle")}</p>
                <p className="text-sm text-muted-foreground">
                  {t("steps.connectWallet.connectedDescription")}
                </p>
                <Button onClick={handleContinue} className="mt-4">
                  {t("steps.connectWallet.continue")}
                </Button>
              </div>
            ) : (
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto">
                  <Wallet className="h-8 w-8 text-muted-foreground" />
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {t("steps.connectWallet.selectWallet")}
                </p>
                <WalletConnect />
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
