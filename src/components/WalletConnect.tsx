import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { Button } from '@/components/ui/button';
import { Wallet, LogOut, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useEffect } from 'react';
import { useTranslation } from "react-i18next";

export function WalletConnect() {
  const { address, isConnected } = useAccount();
  const { connect, connectors, isPending } = useConnect();
  const { disconnect } = useDisconnect();
  const { toast } = useToast();
  const { t } = useTranslation();

  useEffect(() => {
    if (isConnected && address) {
      toast({
        title: t("wallet.connected"),
        description: t("wallet.connectedDescription", {
          address: `${address.slice(0, 6)}...${address.slice(-4)}`,
        }),
      });
    }
  }, [isConnected, address, t, toast]);

  const handleConnect = async () => {
    // Try injected wallets first (MetaMask, etc.)
    const injectedConnector = connectors.find(c => c.type === 'injected');
    if (injectedConnector) {
      connect({ connector: injectedConnector });
    } else if (connectors[0]) {
      // Fallback to first available connector
      connect({ connector: connectors[0] });
    }
  };

  const handleDisconnect = () => {
    disconnect();
    toast({
      title: t("wallet.disconnected"),
      description: t("wallet.disconnectedDescription"),
    });
  };

  if (isConnected && address) {
    return (
      <div className="flex items-center gap-2">
        <div className="glass-card px-4 py-2 rounded-lg">
          <p className="text-sm font-medium">
            {address.slice(0, 6)}...{address.slice(-4)}
          </p>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleDisconnect}
        >
          <LogOut className="h-4 w-4" />
        </Button>
      </div>
    );
  }

  return (
    <Button
      onClick={handleConnect}
      disabled={isPending}
      variant="default"
    >
      {isPending ? (
        <>
          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
          {t("wallet.connecting")}
        </>
      ) : (
        <>
          <Wallet className="h-4 w-4 mr-2" />
          {t("wallet.connect")}
        </>
      )}
    </Button>
  );
}
