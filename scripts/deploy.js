async function main() {
    const InkContract = await ethers.getContractFactory("InkContract");
    
    try {
      console.log("Deploying InkContract...");
      const contract = await InkContract.deploy();
      
      console.log("Waiting for deployment...");
      await contract.waitForDeployment();
      
      const contractAddress = await contract.getAddress();
  
      console.log("Deployment completed.");
      console.log("InkContract deployed to:", contractAddress);
    } catch (error) {
      console.error("Deployment failed:", error);
    }
  }
   
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error("Script execution error:", error);
      process.exit(1);
    });
  