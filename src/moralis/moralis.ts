import data from "./data.json"
const Moralis = require('moralis').default;
const { EvmChain } = require('@moralisweb3/common-evm-utils');

export const runApp = async () => {
  await Moralis.start({
    apiKey: "VMh0yD1bReEL6ks8iJ4O1RshKyk3710RzQkqPHfddInbGv0XgdgqIHJ42DeBwcrR",
    // ...and any other configuration
  });
  
    const abi = [
    {
        path: "metadata.json",
        content: {
        name: "NFT Name",
        description: data.data
        
      },
    },
    ];

  const response = await Moralis.EvmApi.ipfs.uploadFolder({ abi });
  
  console.log(response.toJSON());
}

runApp();