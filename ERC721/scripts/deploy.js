const { ethers } = require("hardhat");

async function main() {
    const contract = await ethers.deployContract("Naruto")

    await contract.waitForDeployment(); 
    console.log(`Naruto deployed to ${contract.target}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});