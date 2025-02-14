const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Marketplace", function () {
    it("Should create and execute market sales", async function () {
        const [seller, buyer] = await ethers.getSigners();
        const NFT = await ethers.getContractFactory("NFT");
        const nft = await NFT.deploy();
        await nft.deployed();

        const Marketplace = await ethers.getContractFactory("Marketplace");
        const marketplace = await Marketplace.deploy(2);
        await marketplace.deployed();

        await nft.mint("tokenURI");
        await nft.approve(marketplace.address, 1);
        await marketplace.makeItem(nft.address, 1, ethers.utils.parseEther("1"));

        await marketplace.connect(buyer).purchaseItem(1, { value: ethers.utils.parseEther("1.02") });
        const item = await marketplace.items(1);
        expect(item.sold).to.equal(true);
    });
});
