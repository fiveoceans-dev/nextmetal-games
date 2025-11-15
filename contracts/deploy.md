# Deploy Badge NFT Contract to Monad Testnet

## Prerequisites

1. Install Foundry (if not already installed):
```bash
curl -L https://foundry.paradigm.xyz | bash
foundryup
```

2. Create a `.env` file in the `contracts` directory:
```env
PRIVATE_KEY=your_private_key_here
MONAD_RPC_URL=https://testnet-rpc.monad.xyz
```

## Deploy Contract

1. Compile the contract:
```bash
forge build
```

2. Deploy to Monad Testnet:
```bash
forge create --rpc-url $MONAD_RPC_URL \
  --private-key $PRIVATE_KEY \
  contracts/BadgeNFT.sol:BadgeNFT
```

3. Copy the deployed contract address and update it in `src/lib/contracts.ts`:
```typescript
export const BADGE_CONTRACT_ADDRESS = 'YOUR_DEPLOYED_ADDRESS' as Address;
```

## Verify Contract (Optional)

If Monad testnet supports verification:
```bash
forge verify-contract \
  --chain-id 41454 \
  --compiler-version v0.8.20 \
  YOUR_DEPLOYED_ADDRESS \
  contracts/BadgeNFT.sol:BadgeNFT
```

## Test Locally

Run tests with:
```bash
forge test
```

## Contract Functions

### Minting Badges
- `mint(address to, string badgeType, string summonerName, string uri, string proof)`
- Only owner can mint badges
- Requires valid badge type

### Reading Data
- `balanceOf(address owner)` - Get number of badges owned
- `tokensOfOwner(address owner)` - Get all token IDs for an address
- `tokenURI(uint256 tokenId)` - Get metadata URI for a token
- `badgeMetadata(uint256 tokenId)` - Get badge details

### Badge Types
Default types: `rank_diamond`, `rank_master`, `rank_grandmaster`, `rank_challenger`, `pentakill`, `high_winrate`

Add custom types with: `addBadgeType(string badgeType)`
