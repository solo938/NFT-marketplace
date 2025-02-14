pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFT is ERC721URIStorage, Ownable {
uint public tokenCount;

constructor() ERC721("Dapp NFT", "DAPP") {}
 function mint(string memory _tokenURI) external returns(uint) {
     tokenCount++;
   _safeMint(msg.sender,tokenCount);
   _setTokenURI(tokenCount, _tokenURI);
  return tokenCount;
}
function burn(uint tokenId) external {
require(ownerOf(tokenId) == msg.sender,"You are not the owner");
_burn(tokenId);
}
}

