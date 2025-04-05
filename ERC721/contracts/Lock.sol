// SPDX-License-Identifier: MIT

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
pragma solidity ^0.8.20;

contract Naruto is ERC721URIStorage {
    uint256 tokenId;

    constructor() ERC721 ("Naruto", "NRT"){}

    function mint() external{
        _safeMint(msg.sender, tokenId);
        _setTokenURI(
            tokenId, 
            "https://raw.githubusercontent.com/OMISENKER/base-learn/refs/heads/main/ERC721/metadata/myFirstNFT.json"
        
        );
        tokenId++;
    }
}
