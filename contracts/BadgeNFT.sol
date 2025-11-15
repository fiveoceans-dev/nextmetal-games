// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title BadgeNFT
 * @dev NFT contract for monad.passport badges
 * Each badge represents a verified League of Legends achievement
 */
contract BadgeNFT is ERC721URIStorage, ERC721Enumerable, Ownable {
    uint256 private _tokenIdCounter;
    
    // Mapping from badge type to requirements
    mapping(string => bool) public badgeTypes;
    
    // Mapping from tokenId to badge metadata
    mapping(uint256 => BadgeMetadata) public badgeMetadata;
    
    struct BadgeMetadata {
        string badgeType;      // "rank_diamond", "pentakill", etc.
        string summonerName;   // League summoner name
        uint256 timestamp;     // When the badge was earned
        string proof;          // IPFS hash or proof data
    }
    
    event BadgeMinted(
        uint256 indexed tokenId,
        address indexed recipient,
        string badgeType,
        string summonerName
    );
    
    constructor() ERC721("monad.passport Badge", "MBADGE") Ownable(msg.sender) {
        // Initialize badge types
        badgeTypes["rank_diamond"] = true;
        badgeTypes["rank_master"] = true;
        badgeTypes["rank_grandmaster"] = true;
        badgeTypes["rank_challenger"] = true;
        badgeTypes["pentakill"] = true;
        badgeTypes["high_winrate"] = true;
    }
    
    /**
     * @dev Mint a new badge NFT
     * @param to Address to receive the badge
     * @param badgeType Type of badge being minted
     * @param summonerName League summoner name
     * @param uri Metadata URI (IPFS or other)
     * @param proof Proof data for verification
     */
    function mint(
        address to,
        string memory badgeType,
        string memory summonerName,
        string memory uri,
        string memory proof
    ) public onlyOwner returns (uint256) {
        require(badgeTypes[badgeType], "Invalid badge type");
        
        uint256 tokenId = _tokenIdCounter;
        _tokenIdCounter++;
        
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
        
        badgeMetadata[tokenId] = BadgeMetadata({
            badgeType: badgeType,
            summonerName: summonerName,
            timestamp: block.timestamp,
            proof: proof
        });
        
        emit BadgeMinted(tokenId, to, badgeType, summonerName);
        
        return tokenId;
    }
    
    /**
     * @dev Add a new badge type
     */
    function addBadgeType(string memory badgeType) public onlyOwner {
        badgeTypes[badgeType] = true;
    }
    
    /**
     * @dev Get all token IDs owned by an address
     */
    function tokensOfOwner(address owner) public view returns (uint256[] memory) {
        uint256 balance = balanceOf(owner);
        uint256[] memory tokens = new uint256[](balance);
        
        for (uint256 i = 0; i < balance; i++) {
            tokens[i] = tokenOfOwnerByIndex(owner, i);
        }
        
        return tokens;
    }
    
    // Required overrides
    function _update(address to, uint256 tokenId, address auth)
        internal
        override(ERC721, ERC721Enumerable)
        returns (address)
    {
        return super._update(to, tokenId, auth);
    }

    function _increaseBalance(address account, uint128 value)
        internal
        override(ERC721, ERC721Enumerable)
    {
        super._increaseBalance(account, value);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721URIStorage, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
