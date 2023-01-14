import { Web3Auth } from "@web3auth/web3auth";
import { CHAIN_NAMESPACES } from "@web3auth/base";
import Web3 from "web3"; //SDSF

// refer to `Getting a provider with web3auth login.` section above
// to know how `web3auth.provider` is initialized after user's login

// Get user's Ethereum public address


const clientId = "BCEJtv7-N5b02-k06sKgpsKzEbgGBkokpXQ9fG5oBjx40fXoYVflMoo3iSv3tvCFN4cT8VamYV5TTiuUJmUiK2Q";
const web3auth = new Web3Auth({
	clientId,
	chainConfig: { // this is ethereum chain config, change if other chain(Solana, Polygon)
		chainNamespace: CHAIN_NAMESPACES.EIP155,
		chainId: "0x1",
		rpcTarget: "https://mainnet.infura.io/v3/776218ac4734478c90191dde8cae483c",
	},
});
export let provider:any
export const Login = async () => {
    await web3auth.initModal();

// call below line when user clicks on login button
    provider = await web3auth.connect();
}
export const address = async() =>(await provider.eth.getAccounts())[0];

// Get user's balance in ether
export const balance = async() => { provider.utils.fromWei(
  await provider.eth.getBalance(address) // Balance is in wei
);
console.log(balance);
}
// if provider is not null then user logged in successfully
