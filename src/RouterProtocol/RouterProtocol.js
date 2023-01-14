import { RouterProtocol } from "@routerprotocol/router-js-sdk"
import { ethers } from "ethers";

const main = async() => {

// initialize a RouterProtocol instance
let SDK_ID = 24 // get your unique sdk id by contacting us on Telegram
let chainId = 137
const provider = new ethers.providers.JsonRpcProvider("https://polygon-rpc.com", chainId)
const routerprotocol = new RouterProtocol(SDK_ID, chainId, provider)
await routerprotocol.initialize()

// get a quote for USDC transfer from Polygon to Fantom
let args = {
    amount: (ethers.utils.parseUnits("10.0", 6)).toString(), // 10 USDC
    dest_chain_id: 250, // Fantom
    src_token_address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174", // USDC on Polygon
    dest_token_address: "0x04068DA6C83AFCFA0e13ba15A6696662335D5B75", // USDC on Fantom
    user_address: "YOUR_WALLET_ADDRESS",
    fee_token_address: "0x16ECCfDbb4eE1A85A33f3A9B21175Cd7Ae753dB4", // ROUTE on Polygon
    slippage_tolerance: 2.0
}

const quote = await routerprotocol.getQuote(args.amount, args.dest_chain_id, args.src_token_address, args.dest_token_address, args.user_address, args.fee_token_address, args.slippage_tolerance)

// get allowance and give the relevant approvals
const wallet = new ethers.Wallet("YOUR_PRIVATE_KEY", provider) // provider was set up while initializing an instance of RouterProtocol

let src_token_allowance = await routerprotocol.getSourceTokenAllowance(args.src_token_address, args.dest_chain_id, args.user_address)
if(src_token_allowance.lt(ethers.constants.MaxUint256)){
        await routerprotocol.approveSourceToken(args.src_token_address, args.user_address, ethers.constants.MaxUint256, args.dest_chain_id, wallet)
}
if(ethers.utils.getAddress(args.src_token_address) !== ethers.utils.getAddress(args.fee_token_address)){
    let fee_token_allowance = await routerprotocol.getFeeTokenAllowance(args.fee_token_address, args.dest_chain_id, args.user_address)
    if(fee_token_allowance.lt(ethers.constants.MaxUint256)){
        await routerprotocol.approveFeeToken(args.fee_token_address, args.user_address, ethers.constants.MaxUint256, wallet)
    }
}

/**
 * If feeTokenAddress or fromTokenAddress is native address give allowance to its wrapped address.
 * For wrapper addresses, chainMapping object is maintained.
 * 
 * args.feeTokenAddress === chainMapping[chainId].NATIVE.address ?
 *      chainMapping[chainId].NATIVE.wrapped_address : args.feeTokenAddress;
 * 
 * 
 * args.fromTokenAddress === chainMapping[chainId].NATIVE.address ? 
 *      chainMapping[chainId].NATIVE.wrapped_address : args.fromTokenAddress,  
 */

// execute the transaction
let tx;
try{
    tx = await routerprotocol.swap(quote,wallet)
    console.log(`Transaction successfully completed. Tx hash: ${tx.hash}`)
}
catch(e){
    console.log(`Transaction failed with error ${e}`)
    return
}

// fetching the status of the transaction
setTimeout(async function() {
    let status = await routerprotocol.getTransactionStatus(tx.hash) 
    console.log(status)
    if (status.tx_status_code === 1) {
        console.log("Transaction completed")
      // handle the case where the transaction is complete 
    }
    else if (status.tx_status_code === 0) {
        console.log("Transaction still pending")
    // handle the case where the transaction is still pending
    }
  }, 180000); // waiting for sometime before fetching the status of the transaction because it may take some time for the transaction to get indexed

}

main()