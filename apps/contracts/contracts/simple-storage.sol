// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract SimpleStorage {
    //menyimpan sebuah nilai dalam bentuk uint256
    uint256 private storedValue;
    //menyimpan alamat owner
    address public owner;

    //ketika ownernya berubah ada track perubahannya
    event OwnerSet(address indexed oldOwner, address indexed newOwner);
    //ketika ada update akan track perubahannya
    event ValueUpdated(uint256 newValue);

    constructor() {
        owner = msg.sender; 
        emit OwnerSet(address(0), owner);
    }

    //task 4 (access control)
    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _; 
    }
    //simpan nilai ke blockchain (write)
    function setValue(uint256 _value) public onlyOwner {
        storedValue = _value;
        emit ValueUpdated(_value);
    }
    //membaca nilai dari blockchain (read) terakhir kali di update
    function getValue() public view returns (uint256) {
        return storedValue;
    }
}