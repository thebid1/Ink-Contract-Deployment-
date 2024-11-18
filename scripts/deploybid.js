const { ethers } = require("ethers");

async function main() {
  const initialSupply = ethers.utils.parseUnits("1000000", 18);
  const TheBid = await ethers.getContractFactory("TheBid");
  const contract = await TheBid.deploy(initialSupply);
  await contract.waitForDeployment();
  console.log("TheBid token deployed to:", contract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Error during deployment:", error);
    process.exit(1);
  });
