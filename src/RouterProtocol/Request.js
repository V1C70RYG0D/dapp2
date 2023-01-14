import { RouterProtocol } from "@routerprotocol/router-js-sdk"
import { ethers } from "ethers";
import { routerprotocol } from "./routerp";
const main = async() => {

// initialize a RouterProtocol instance

// getting a quote for USDC transfer from Polygon to Fantom
let args = {
    amount: (ethers.utils.parseUnits("10.0", 6)).toString(), // 10 USDC
    dest_chain_id: 250, // Fantom
    src_token_address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174", // USDC on Polygon
    dest_token_address: "0x04068DA6C83AFCFA0e13ba15A6696662335D5B75", // USDC on Fantom
    user_address: "YOUR_WALLET_ADDRESS",
    fee_token_address: "0x16ECCfDbb4eE1A85A33f3A9B21175Cd7Ae753dB4", // ROUTE on Polygon
    slippage_tolerance: 1.0
}

const quote = await routerprotocol.getQuote(args.amount, args.dest_chain_id, args.src_token_address, args.dest_token_address, args.user_address, args.fee_token_address, args.slippage_tolerance)
console.log(quote)
}

main()