import { useAccount, useChainId } from 'wagmi';
import { monadTestnet } from '@/lib/wagmi-config';
import { Wifi, WifiOff } from 'lucide-react';

export function NetworkStatus() {
  const { isConnected } = useAccount();
  const chainId = useChainId();
  const isCorrectNetwork = chainId === monadTestnet.id;

  if (!isConnected) {
    return (
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50 border border-border">
        <WifiOff className="h-3.5 w-3.5 text-muted-foreground" />
        <span className="text-xs text-muted-foreground">Wallet Not Connected</span>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full border ${
      isCorrectNetwork 
        ? 'bg-primary/10 border-primary/30' 
        : 'bg-destructive/10 border-destructive/30'
    }`}>
      <Wifi className={`h-3.5 w-3.5 ${isCorrectNetwork ? 'text-primary' : 'text-destructive'}`} />
      <span className={`text-xs font-medium ${isCorrectNetwork ? 'text-primary' : 'text-destructive'}`}>
        {isCorrectNetwork ? 'Monad Testnet' : 'Wrong Network'}
      </span>
    </div>
  );
}
