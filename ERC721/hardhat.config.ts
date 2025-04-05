import path from "path";
require("dotenv").config({ path: path.resolve(__dirname, ".env") });
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    base_sepolia: {
      accounts: [process.env.PRIVATE_KEY as string],
      url: "https://sepolia.base.org",
      chainId: 84532,
    },
  },
};

export default config;
