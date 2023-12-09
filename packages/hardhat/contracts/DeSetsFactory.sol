// SPDX-License-Identifier: MIT

pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./DataSet.sol";

contract DeSetsFactory is Ownable {
	// state variables
	address[] public datasetsNFTs;
	mapping(address => address[]) public nftOwners;

	// events
	event DataSetCreated(address indexed nftAddress, address indexed owner);

	// functions
	function deployDataSetNFT(
		string memory name,
		uint256 price,
		string memory dataSetURI
	) external returns (address) {
		DataSet datasetNFT = new DataSet(name, price, dataSetURI, msg.sender);
		datasetsNFTs.push(address(datasetNFT));
		nftOwners[msg.sender].push(address(datasetNFT));
		emit DataSetCreated(address(datasetNFT), msg.sender);
		return address(datasetNFT);
	}
}
