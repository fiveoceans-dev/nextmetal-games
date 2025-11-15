import { createConfig, http } from 'wagmi';
import { walletConnect, injected } from 'wagmi/connectors';
import { defineChain } from 'viem';

// Monad Testnet configuration from environment variables
const chainId = parseInt(import.meta.env.VITE_CHAIN_ID_MONAD || '10143');
const rpcUrl = import.meta.env.VITE_MONAD_RPC_URL || 'https://rpc-testnet.monadinfra.com';
const networkName = import.meta.env.VITE_NETWORK_NAME || 'Monad Testnet';

console.log('🔧 Monad Configuration:', {
  chainId,
  rpcUrl,
  networkName,
  walletConnectId: import.meta.env.VITE_WALLETCONNECT_PROJECT_ID ? 'Set' : 'Not Set'
});

export const monadTestnet = defineChain({
  id: chainId,
  name: networkName,
  nativeCurrency: {
    decimals: 18,
    name: 'Monad',
    symbol: 'MON',
  },
  rpcUrls: {
    default: {
      http: [rpcUrl],
    },
    public: {
      http: [rpcUrl],
    },
  },
  blockExplorers: {
    default: {
      name: 'Monvision Explorer',
      url: 'https://testnet.monvision.io',
    },
  },
  testnet: true,
});

// WalletConnect Project ID from environment
const projectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID || '';

console.log('🔌 WalletConnect Project ID:', projectId ? `${projectId.slice(0, 8)}...` : 'NOT SET');

export const config = createConfig({
  chains: [monadTestnet],
  connectors: [
    injected({
      target: 'metaMask',
    }),
    injected({
      target: 'coinbaseWallet',
    }),
    // Only include WalletConnect if projectId is configured
    ...(projectId ? [walletConnect({
      projectId,
      metadata: {
        name: 'monad.passport',
        description: 'Verifiable League of Legends credentials on Monad',
        url: window.location.origin,
        icons: [window.location.origin + '/favicon.ico'],
      },
      showQrModal: true,
    })] : []),
  ],
  transports: {
    [monadTestnet.id]: http(rpcUrl),
  },
});
