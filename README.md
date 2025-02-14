# NFT Marketplace

## 📌 Overview
This is a decentralized NFT Marketplace where users can:
- Mint NFTs with metadata (URI)
- List NFTs for sale
- Purchase NFTs securely

The marketplace is built with Solidity and deployed using Hardhat. It utilizes OpenZeppelin for ERC-721 token implementation and supports Ethereum-based transactions.
Here are the **Deployment and Setup Instructions** for your NFT Marketplace project:

---

# 🚀 **Deployment and Setup Instructions**

## **1️⃣ Clone the Repository**
First, clone the repository to your local machine:
```bash
git clone https://github.com/your-username/nft-marketplace.git
cd nft-marketplace
```

---

## **2️⃣ Install Dependencies**
Make sure you have **Node.js** installed, then run:
```bash
npm install
```

This will install all required dependencies listed in `package.json`.

---

## **3️⃣ Compile Smart Contracts**
To compile the Solidity contracts, use:
```bash
npx hardhat compile
```

If the compilation is successful, you will see `artifacts/` and `cache/` directories generated.

---

## **4️⃣ Run Tests**
To ensure everything works as expected, run:
```bash
npx hardhat test
```

This will execute `test/marketplace.test.js` and validate contract functionality.

---

## **5️⃣ Deploy Locally (Hardhat Network)**
Start a local blockchain with:
```bash
npx hardhat node
```

Then, deploy contracts on this network:
```bash
npx hardhat run scripts/deploy.js --network hardhat
```

---

## **6️⃣ Deploy to Goerli Testnet**
### **Step 1: Configure Environment Variables**
Create a `.env` file in the root directory and add:
```ini
ALCHEMY_GOERLI_URL="YOUR_ALCHEMY_API_URL"
PRIVATE_KEY="YOUR_WALLET_PRIVATE_KEY"
```

### **Step 2: Deploy**
```bash
npx hardhat run scripts/deploy.js --network goerli
```

This will deploy the contracts on the **Goerli testnet**, and you’ll receive the contract addresses in the terminal.

---

## **7️⃣ Verify Contract on Etherscan**
If deploying on a public network, verify the contract with:
```bash
npx hardhat verify --network goerli CONTRACT_ADDRESS "Constructor_Arguments"
```

Replace `CONTRACT_ADDRESS` and `Constructor_Arguments` accordingly.

---

## **8️⃣ Interacting with Contracts**
You can interact with deployed contracts using **Hardhat console**:
```bash
npx hardhat console --network goerli
```
Then, interact with the contract using JavaScript.

---

