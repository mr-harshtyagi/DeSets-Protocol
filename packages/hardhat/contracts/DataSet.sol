// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract DataSet is ERC721, Ownable {
	// state variables
	uint256 public price;
	uint256 public totalSupply;
	uint256 public maxMintAmount;
	uint256 public reputationScore;
	uint256 public totalUpvotes;
	uint256 public totalDownvotes;
	bool public paused;
	string private dataSetURI;
	string public dataSetName;
	string public dataSetDescription;

	// events
	event CreateNFT(uint256 indexed id);
	event Pause(bool isPaused);
	event ChangePrice(uint256 newPrice);
	event ChangeMaxMintAmount(uint256 newMaxMintAmount);
	event ChangeDataSetURI(string newBaseURI);

	// constructor
	constructor(
		string memory _name,
		string memory _description,
		uint256 _price,
		string memory _dataSetURI,
		address _owner
	) ERC721(_name, "SETS") {
		dataSetName = _name;
		dataSetDescription = _description;
		price = _price;
		maxMintAmount = 1;
		dataSetURI = _dataSetURI;
		transferOwnership(_owner);
	}

	// functions
	function getDataSetURI() public view returns (string memory) {
		require(balanceOf(msg.sender) > 0, "you need to own the NFT");
		return dataSetURI;
	}

	function mint(uint256 _mintAmount) public payable {
		uint256 supply = totalSupply;
		require(!paused, "the contract is paused");
		require(_mintAmount > 0, "need to mint at least 1 NFT");
		require(
			_mintAmount <= maxMintAmount,
			"max mint amount per session exceeded"
		);

		require(
			msg.value >= price * _mintAmount,
			"ether value sent is not correct"
		);

		for (uint256 i = 1; i <= _mintAmount; i++) {
			totalSupply++;
			_safeMint(msg.sender, supply + i);
			emit CreateNFT(supply + i);
		}
	}

	function setPrice(uint256 _newPrice) external onlyOwner {
		price = _newPrice;
		emit ChangePrice(_newPrice);
	}

	function setMaxMintAmount(uint256 _newMaxMintAmount) external onlyOwner {
		maxMintAmount = _newMaxMintAmount;
		emit ChangeMaxMintAmount(_newMaxMintAmount);
	}

	function setDataSetURI(string memory _newBaseURI) external onlyOwner {
		dataSetURI = _newBaseURI;
		emit ChangeDataSetURI(_newBaseURI);
	}

	function upvoteDataSet() external {
		totalUpvotes++;
	}

	function downvoteDataSet() external {
		totalDownvotes++;
	}

	function pause(bool _state) external onlyOwner {
		paused = _state;
		emit Pause(_state);
	}

	function withdraw() external onlyOwner {
		require(address(this).balance > 0, "balance is 0");
		require(msg.sender == owner(), "only owner can withdraw");
		payable(msg.sender).transfer(address(this).balance);
	}

	function getDataSetInfo()
		external
		view
		returns (
			string memory,
			string memory,
			uint256,
			uint256,
			uint256,
			uint256,
			bool,
			address
		)
	{
		return (
			dataSetName,
			dataSetDescription,
			price,
			totalSupply,
			totalUpvotes,
			totalDownvotes,
			paused,
			owner()
		);
	}
}
