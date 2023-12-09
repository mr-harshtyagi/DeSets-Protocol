// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract DataSet is ERC721, Ownable {
	// state variables
	uint256 public price;
	uint256 public totalSupply;
	uint256 public maxMintAmount;
	bool public paused;
	string private dataSetURI;

	// events
	event CreateNFT(uint256 indexed id);
	event Pause(bool isPaused);
	event ChangePrice(uint256 newPrice);
	event ChangeMaxMintAmount(uint256 newMaxMintAmount);
	event ChangeDataSetURI(string newBaseURI);

	// constructor
	constructor(
		string memory _name,
		uint256 _price,
		string memory _dataSetURI,
		address _owner
	) ERC721(_name, "SETS") {
		price = _price;
		maxMintAmount = 1;
		dataSetURI = _dataSetURI;
		transferOwnership(_owner);
	}
}
