require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

module.exports = {
  solidity: "0.8.4",
  networks: {
    ethereum: {
      url: "https://green-red-patron.ethereum-goerli.discover.quiknode.pro/8ed184641a3dc82ccf86d6f82cf26e4edd80635e/",
      accounts: ["6c6b9bed10e762e7cb50e80e34a21a7b152d89c82b2a912af6e05e8d6330bba9"],
    },
  },
};
