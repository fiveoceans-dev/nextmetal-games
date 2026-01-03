  import { defineConfig } from "vite";
  import react from "@vitejs/plugin-react-swc";
  import path from "path";
  import net from "net";
  import { componentTagger } from "lovable-tagger";

  const findOpenPort = async (start: number, end: number) => {
    for (let port = start; port <= end; port += 1) {
      const available = await new Promise<boolean>((resolve) => {
        const server = net
          .createServer()
          .once("error", () => resolve(false))
          .once("listening", () => server.close(() => resolve(true)))
          .listen(port, "0.0.0.0");
      });

      if (available) return port;
    }

    throw new Error(`No open ports in range ${start}-${end}`);
  };

  export default defineConfig(async ({ mode }) => {
    const port = await findOpenPort(8080, 8099);

    return {
      server: {
        host: "0.0.0.0",
        port,
        strictPort: true,
      },
      plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "./src"),
        },
      },
      envDir: "./nonexistent",
      define: {
        "import.meta.env.VITE_SUPABASE_URL": JSON.stringify(""),
        "import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY": JSON.stringify(""),
        "import.meta.env.VITE_CHAIN_ID_MONAD": JSON.stringify("10143"),
        "import.meta.env.VITE_MONAD_RPC_URL": JSON.stringify("https://rpc-testnet.monadinfra.com"),
        "import.meta.env.VITE_NETWORK_NAME": JSON.stringify("Monad Testnet"),
        "import.meta.env.VITE_WALLETCONNECT_PROJECT_ID": JSON.stringify(""),
      },
    };
  });
