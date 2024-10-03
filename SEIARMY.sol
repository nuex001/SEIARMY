// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract SEIARMY is
    ERC721URIStorage,
    Ownable // Inherit from Ownable
{
    uint256 private totalSupply;
    string private baseTokenURI;
    uint256 private constant MAX_TOTAL_SUPPLY = 555;

    constructor(address initialOwner, string memory _baseTokenURI)
        ERC721("SEIARMY", "SA")
        Ownable(initialOwner)
    {
        baseTokenURI = _baseTokenURI;
    }

    function mint() external payable {
        require(totalSupply <= MAX_TOTAL_SUPPLY, "Total supply reached");

        totalSupply++;
        uint256 tokenId = totalSupply;
        _safeMint(msg.sender, tokenId);
    }

    function UpdateBaseURL(string memory _baseTokenURI) public onlyOwner {
        baseTokenURI = _baseTokenURI;
    }

    // GETTERS FUNCTION
    function _baseURI() internal view override returns (string memory) {
        return baseTokenURI;
    }

    // Withdraw function for the owner to withdraw collected Ether
    function withdraw() external onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0, "No balance to withdraw");

        payable(owner()).transfer(balance);
    }
}
