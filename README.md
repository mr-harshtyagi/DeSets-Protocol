# DeSets Protocol

## Introduction

Build the future of AI with decentralised Datasets. Create , monetize and explore wide range of datasets completely onchain.

This lets us create a data economy where users are incentivised for sharing valuable datasets to train the AI for the collective good and a better future of mankind. This also prevents the misuse of data.

## Stack Used

- Scaffold-eth2 Starter template
- Hardhat & Solidity
- Wagmi & viem
- Typescript & Next.js 13
- Tailwind CSS & daisyUI

## Setup and Usage

- Clone the Git repository: `https://github.com/mr-harshtyagi/DeSets-Protocol.git`
- Install project dependencies: `yarn install`
- Initialize local blockchain: `yarn chain`
- Deploy Smart Contracts: `yarn deploy`
- Start the development server: `yarn start`
- Access the web app in your browser at [http://localhost:3000](http://localhost:3000)

## EVM chains (Deployed Contracts)

### FVM Calibration Testnet

```
DeSetsFactory.sol: 0x5FbDB2315678afecb367f032d93F642f64180aa3
```

### Celo Alfajores Testnet

```
DeSetsFactory.sol: 0x5FbDB2315678afecb367f032d93F642f64180aa3
```

### Base Testnet

```
DeSetsFactory.sol: 0x5FbDB2315678afecb367f032d93F642f64180aa3
```

### Scroll Sepolia Testnet

```
DeSetsFactory.sol: 0x5FbDB2315678afecb367f032d93F642f64180aa3
```

### Polygon zkEVM Testnet

```
DeSetsFactory.sol: 0x5FbDB2315678afecb367f032d93F642f64180aa3
```

## Verify Contracts

```
yarn verify --network scrollSepolia --api-url https://api-sepolia.scrollscan.com

Make sure to replace etherscan key for that chain.
```
