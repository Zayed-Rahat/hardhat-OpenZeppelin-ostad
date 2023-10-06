const { artifacts } = require("hardhat");

describe("MySmartContract", function () {
  let owner;
  let user;
  let mySmartContract;

  before(async () => {
    // Get accounts from Hardhat
    [owner, user] = await ethers.getSigners();

    // Deploy the smart contract
    const MySmartContract = await ethers.getContractFactory("MySmartContract");
    mySmartContract = await MySmartContract.deploy(42); // Initialize with an initial value of 42
    await mySmartContract.deployed();
  });

  it("Should return the initial value", async function () {
    const initialValue = await mySmartContract.getValue();
    expect(initialValue).to.equal(42);
  });

  it("Should update the state variable via the set method", async function () {
    // Attempt to update the state variable as the owner
    await mySmartContract.connect(owner).setValue(123);

    // Check the updated value
    const updatedValue = await mySmartContract.getValue();
    expect(updatedValue).to.equal(123);
  });

  it("Should not allow non-owners to update the state variable", async function () {
    // Attempt to update the state variable as a non-owner
    await expect(mySmartContract.connect(user).setValue(456)).to.be.reverted;
  });
});
