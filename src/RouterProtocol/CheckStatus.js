import { RouterProtocol } from "@routerprotocol/router-js-sdk"
import { ethers } from "ethers";
import { routerprotocol } from "./routerp";

const main = async() => {

// initialize a RouterProtocol instance

// get a quote for USDC transfer from Polygon to Fantom

// get allowance and give the relevant approvals

// execute the transaction

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