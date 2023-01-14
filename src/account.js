import Web3 from "web3";
import {web3auth} from "./helpers/web3auth";

// refer to `Getting a provider with web3auth login.` section above
// to know how `web3auth.provider` is initialized after user's login
const web3 = new Web3(web3auth.provider);

// Get user's Ethereum public address
export const address = async() =>(await web3.eth.getAccounts())[0];

// Get user's balance in ether
export const balance = async() => { web3.utils.fromWei(
  await web3.eth.getBalance(address) // Balance is in wei
);
}
