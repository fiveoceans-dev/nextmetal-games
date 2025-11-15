import { createConfig, http } from 'wagmi';
import { walletConnect } from 'wagmi/connectors';
import { defineChain } from 'viem';

// Monad Testnet configuration from environment variables
const chainId = parseInt(import.meta.env.VITE_CHAIN_ID_MONAD || '41454');
const rpcUrl = import.meta.env.VITE_MONAD_RPC_URL || 'https://testnet-rpc.monad.xyz';
const networkName = import.meta.env.VITE_NETWORK_NAME || 'Monad Testnet';

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
