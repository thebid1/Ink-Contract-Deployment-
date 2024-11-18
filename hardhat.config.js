require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
 
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  networks: {
    inksepolia: {
      url: process.env.INK_SEPOLIA_URL || "",
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    },
  },
  etherscan: {
    apiKey: {
      inksepolia: 'empty'
    },
    customChains: [
      {
        network: "inksepolia",
        chainId: 763373,
        urls: {
          apiURL: "https://explorer-sepolia.inkonchain.com/api/",
          browserURL: "https://explorer-sepolia.inkonchain.com/",
        },
      },
    ],
  },
};