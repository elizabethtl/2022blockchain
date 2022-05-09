// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <8.10.0;

contract GeneStorage {
  uint storedData;

  function set(uint x) public {
    storedData = x;
  }

  function get() public view returns (uint) {
    return storedData;
  }
  
  mapping(string => string) public ciphertext;
  mapping(string => address) public account;

  function update(string memory id, string memory ct, address addr) public {
      ciphertext[id] = ct;
      account[id] = addr;
   }

  function getCT(string memory id) public view returns (string memory) {
    return ciphertext[id];
  }
  function getAddr(string memory id) public view returns (address) {
    return account[id];
  }
}
