import { ethers, formatEther } from "ethers";

const provider = new ethers.WebSocketProvider(
  "wss://eth-goerli.g.alchemy.com/v2/cpmRyCYZJDkdte237RoYGX17HYpkG-th"
);

provider.on("block", (blockNumber) => {
  console.log("New Block: " + blockNumber);
});
const balance = await provider.getBalance(
  "0x573657f2727594cB872cda53238287b7746Df675"
);
console.log("balance :>> ", formatEther(balance));
