 
const hre = require("hardhat");

const main = async ()=> {

  const TransactionFactory = await hre.ethers.getContractFactory("Transactions");
  const TransactionInstance = await TransactionFactory.deploy();

  await TransactionInstance.deployed();

  console.log(
    `Transaction Contract deployed to ${TransactionInstance.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
const runMain = async ()=> {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

runMain()


// 0x47FfaC32e20a7875852c542820354A9B01414C3C
//Address del deploy