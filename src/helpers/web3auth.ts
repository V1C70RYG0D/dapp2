import { Web3Auth } from "@web3auth/web3auth";
import { CHAIN_NAMESPACES } from "@web3auth/base";
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

// if provider is not null then user logged in successfully
