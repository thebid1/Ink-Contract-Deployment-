// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;
 
contract InkContract {
    string public greeting = "Hello, Ink!";
    
    function setGreeting(string memory _greeting) public {
        greeting = _greeting;
    }
}