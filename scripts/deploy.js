const hre = require("hardhat");

async function main() {
    const NFT = await hre.ethers.getContractFactory("NFT");
    const Marketplace = await hre.ethers.getContractFactory("Marketplace");

    const nft = await NFT.deploy();
    await nft.deployed();
    console.log("NFT contract deployed to:", nft.address);

    const feePercent = 2;
    const marketplace = await Marketplace.deploy(feePercent);
    await marketplace.deployed();
    console.log("Marketplace contract deployed to:", marketplace.address);
}

main().catch(error => {
    console.error(error);
    process.exit(1);
});
