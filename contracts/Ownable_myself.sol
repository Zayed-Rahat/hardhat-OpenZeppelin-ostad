// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";

contract MySmartContract is Ownable(msg.sender) {
    // State variable
    uint256 private myValue;

    // Constructor to initialize the state variable
    constructor(uint256 initialValue) {
        myValue = initialValue;
    }

    // Get method to retrieve the value of the state variable
    function getValue() public view returns (uint256) {
        return myValue;
    }

    // Set method to update the state variable, accessible only by the contract owner
    function setValue(uint256 newValue) public onlyOwner {
        myValue = newValue;
    }
}
