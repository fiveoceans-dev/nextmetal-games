# Monad Testnet Setup Guide

Your project is now configured to work with smart contracts on Monad testnet! 🎉

## What's Been Set Up

### 1. Web3 Infrastructure
- **Wagmi** - React hooks for Ethereum
- **Viem** - TypeScript interface for Ethereum
- **WalletConnect** - Wallet connection UI

### 2. Monad Testnet Configuration
- Chain ID: 41454
- RPC URL: https://testnet-rpc.monad.xyz
- Explorer: https://testnet.monad.xyz
- Native Currency: MON

### 3. Smart Contract
A complete ERC-721 Badge NFT contract is ready at `contracts/BadgeNFT.sol` with features:
- Mint verifiable League of Legends achievement badges
- Store metadata (badge type, summoner name, proof)
- Track ownership and badge history

## Next Steps

### Step 1: Get Monad Testnet MON Tokens
1. Visit the Monad testnet faucet
2. Enter your wallet address
3. Request testnet MON tokens for gas fees

### Step 2: Deploy the Badge NFT Contract

Install Foundry (if not already installed):
```bash
curl -L https://foundry.paradigm.xyz | bash
foundryup
```

Deploy the contract:
```bash
cd contracts
forge create --rpc-url https://testnet-rpc.monad.xyz \
  --private-key YOUR_PRIVATE_KEY \
  BadgeNFT.sol:BadgeNFT
```

### Step 3: Update Contract Address

After deployment, copy your contract address and update it in `src/lib/contracts.ts`:
```typescript
export const BADGE_CONTRACT_ADDRESS = 'YOUR_DEPLOYED_ADDRESS' as Address;
```

### Step 4: Test Wallet Connection

1. Go to your dashboard
2. Click "Connect Wallet"
3. Scan the QR code with your mobile wallet or connect via browser extension
4. Confirm you're on Monad Testnet

## Features Ready to Use

### Wallet Connection
The `WalletConnect` component is integrated into the dashboard and supports:
- Mobile wallet connection via QR code
- Browser extension wallets (MetaMask, etc.)
- Automatic network switching
- Address display and disconnect functionality

### Contract Interaction (After Deployment)
The contracts are set up to support:
- Minting badge NFTs
- Reading badge balances
- Querying badge metadata
- Transferring badges

### Badge Types Supported
- `rank_diamond` - Diamond rank achievement
- `rank_master` - Master rank achievement  
- `rank_grandmaster` - Grandmaster rank achievement
- `rank_challenger` - Challenger rank achievement
- `pentakill` - Pentakill achievement
- `high_winrate` - High win rate achievement

## File Structure

```
├── contracts/
│   ├── BadgeNFT.sol          # Main NFT contract
│   └── deploy.md             # Deployment instructions
├── src/
│   ├── lib/
│   │   ├── wagmi-config.ts   # Wagmi configuration
│   │   └── contracts.ts      # Contract ABIs and addresses
│   ├── providers/
│   │   └── Web3Provider.tsx  # Web3 context provider
│   ├── components/
│   │   └── WalletConnect.tsx # Wallet connection UI
│   └── hooks/
│       └── useContract.ts    # Contract interaction hooks
└── foundry.toml              # Foundry configuration
```

## Environment Variables

Your `.env` file should include:
```env
VITE_WALLETCONNECT_PROJECT_ID=your_project_id_here
```

This is already configured using your existing WalletConnect project ID from secrets.

## Testing

### Local Testing
```bash
cd contracts
forge test
```

### Integration Testing
1. Deploy to Monad testnet
2. Update contract address in code
3. Test wallet connection in dashboard
4. Test minting a badge through the UI

## Troubleshooting

### Wallet Won't Connect
- Ensure you have the WalletConnect Project ID configured
- Check that your wallet supports WalletConnect v2
- Try refreshing the page

### Transaction Fails
- Ensure you have enough MON tokens for gas
- Verify you're connected to Monad testnet (chain ID 41454)
- Check contract address is correct

### Contract Not Found
- Verify the contract is deployed to Monad testnet
- Check the contract address in `src/lib/contracts.ts`
- Ensure you're connected to the correct network

## Resources

- [Monad Documentation](https://docs.monad.xyz)
- [WalletConnect Docs](https://docs.walletconnect.com/)
- [Wagmi Documentation](https://wagmi.sh/)
- [Foundry Book](https://book.getfoundry.sh/)

## What's Next?

After deploying your contract, you can:
1. Implement automatic badge minting based on verified League accounts
2. Add IPFS integration for badge metadata storage
3. Create a badge gallery to display user achievements
4. Implement badge trading or transfer functionality

Need help? Check the deployment guide in `contracts/deploy.md`!
