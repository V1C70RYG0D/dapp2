import { NFTStorage, File } from 'nft.storage'
import fs from 'fs'
import path from 'path'

const NFT_STORAGE_KEY = 'REPLACE_ME_WITH_YOUR_KEY'

async function storeNFT(textPath, name, description) {
    // load the file from disk
    const text = await fileFromPath(textPath)

    // create a new NFTStorage client using our API key
    const nftstorage = new NFTStorage({ token: NFT_STORAGE_KEY })

    // call client.store, passing in the text & metadata
    return nftstorage.store({
        text,
        name,
        description,
    })
}

async function fileFromPath(filePath) {
    const content = await fs.promises.readFile(filePath, 'utf-8')
    return new File([content], path.basename(filePath))
}

async function main() {
    const args = process.argv.slice(2)
    if (args.length !== 3) {
        console.error(`usage: ${process.argv[0]} ${process.argv[1]} <text-path> <name> <description>`)
        process.exit(1)
    }

    const [textPath, name, description] = args
    const result = await storeNFT(textPath, name, description)
    console.log(result)
}

main()
  .catch(err => {
      console.error(err)
      process.exit(1)
  })
