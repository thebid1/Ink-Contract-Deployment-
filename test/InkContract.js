const { expect } = require("chai");

describe("InkContract", function () {
  it("Should return the correct greeting", async function () {
    const InkContract = await ethers.getContractFactory("InkContract");
    const contract = await InkContract.deploy();
    await contract.waitForDeployment();

    expect(await contract.greeting()).to.equal("Hello, Ink!");
  });
});
