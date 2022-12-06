//https://wiser-cold-field.matic-testnet.discover.quiknode.pro/9b393ed7eaeba3ff525b8f7bce067b23d0c79a87/
//Quickone

require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    mumbai: {
      url: process.env.POLYGON_MUMBAI,
      accounts: [process.env.PRIVATE_KEY],
    }
  },
  
  etherscan: {
    apiKey: {
      polygonMumbai: process.env.POLY_API_KEY}
  }
};
