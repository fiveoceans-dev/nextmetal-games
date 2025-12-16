import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    port: 5173,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Disable env loading to avoid .env file issues
  envDir: './nonexistent',
  // Define environment variables manually
  define: {
    'import.meta.env.VITE_SUPABASE_URL': JSON.stringify(''),
    'import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY': JSON.stringify(''),
    'import.meta.env.VITE_CHAIN_ID_MONAD': JSON.stringify('10143'),
    'import.meta.env.VITE_MONAD_RPC_URL': JSON.stringify('https://rpc-testnet.monadinfra.com'),
    'import.meta.env.VITE_NETWORK_NAME': JSON.stringify('Monad Testnet'),
    'import.meta.env.VITE_WALLETCONNECT_PROJECT_ID': JSON.stringify(''),
  },
}));
