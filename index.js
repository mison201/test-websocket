import { ethers, formatEther, id } from "ethers"

const provider = new ethers.WebSocketProvider(
  "wss://eth-goerli.g.alchemy.com/v2/cpmRyCYZJDkdte237RoYGX17HYpkG-th",
)

provider.on("block", async (blockNumber) => {
  const block = await provider.getBlock(blockNumber)
  console.log("New block:", block)
  console.log("Transactions:", block.transactions)
})
const balance = await provider.getBalance(
  "0x0000000000000000000000000000000000000000",
)
console.log("balance :>> ", formatEther(balance))

let filter = {
  address: "0x0000000000000000000000000000000000000000",
  topics: [id("Transfer(address,address,uint256)")],
}
provider.on(filter, (log, event) => {
  // Emitted whenever a DAI token transfer occurs
  console.log("log :>> ", log)
})
