const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
  // URL from where we can extract the metadata for a LW3Punks
  const metadataURL = "https://ipfs.io/ipfs/bafyreih3wblf7lyiwnpvoz23nburstx6wwxcglaqc5jdnh23c4vxft3ypm/metadata.json";
 
  const RouterCrossChainContract = await ethers.getContractFactory("CERC1155");

  // deploy the contract
  const deployedRouterCrossChainContract = await RouterCrossChainContract.deploy(metadataURL,"0x24500B204296fBDc1C9935fd6732D7F22CeFa334");

  await deployedRouterCrossChainContract.deployed();

  // print the address of the deployed contract
  console.log("RouterCrossChain Contract Address:", deployedRouterCrossChainContract.address);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
