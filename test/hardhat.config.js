require("@nomicfoundation/hardhat-toolbox");

module.exports = {
    solidity: "0.8.4",
    networks: {
        hardhat: {},
        goerli: {
            url: process.env.ALCHEMY_GOERLI_URL,
            accounts: [process.env.PRIVATE_KEY],
        }
    }
};
