import { RouterProtocol } from "@routerprotocol/router-js-sdk"
import { ethers } from "ethers";

let SDK_ID = 24 // get your unique sdk id by contacting us on Telegram
let chainId = 137
export const provider = new ethers.providers.JsonRpcProvider("https://polygon-rpc.com", chainId)
export const routerprotocol = new RouterProtocol(SDK_ID, chainId, provider)
await routerprotocol.initialize()