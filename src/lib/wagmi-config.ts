import { createConfig, http } from 'wagmi';
import { walletConnect } from 'wagmi/connectors';
import { defineChain } from 'viem';

// Monad Testnet configuration
export const monadTestnet = defineChain({
  id: 41454,
  name: 'Monad Testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Monad',
    symbol: 'MON',
  },
  rpcUrls: {
    default: {
      http: ['https://testnet-rpc.monad.xyz'],
    },
    public: {
      http: ['https://testnet-rpc.monad.xyz'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Monad Explorer',
      url: 'https://testnet.monad.xyz',
    },
  },
  testnet: true,
});

// WalletConnect Project ID from environment
const projectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID || '';

export const config = createConfig({
  chains: [monadTestnet],
  connectors: [
    walletConnect({
      projectId,
      metadata: {
        name: 'monad.passport',
        description: 'Verifiable League of Legends credentials on Monad',
        url: window.location.origin,
        icons: [window.location.origin + '/favicon.ico'],
      },
      showQrModal: true,
    }),
  ],
  transports: {
    [monadTestnet.id]: http(),
  },
});
