const Web3 = require('web3');
const HDWalletProvider = require('truffle-hdwallet-provider');
const ganache = require('ganache-cli');

// const provider = new HDWalletProvider(
//     'lucky sail abstract enhance help dry mirror two enjoy blue manual soap',
//     'https://rinkeby.infura.io/v3/985c51feb5ca469a83218d8cf5314364'
// )

// const provider = ganache.provider();

// Web3 connection
var web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8545/'));

const abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'bet',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'bool',
        name: 'win',
        type: 'bool',
      },
      {
        indexed: false,
        internalType: 'uint8',
        name: 'side',
        type: 'uint8',
      },
    ],
    name: 'bet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'funding',
        type: 'uint256',
      },
    ],
    name: 'funded',
    type: 'event',
  },
  {
    inputs: [],
    name: 'ContractBalance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint8',
        name: 'side',
        type: 'uint8',
      },
    ],
    name: 'flip',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'fundContract',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getBalance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'withdrawAll',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

//const address = process.env.CONTRACT_ADDRESS;
const contract_address = '0x21be520c5c73Be7F24D136d838FA9B655fd0AEbD';
const address = '0xF80D8E0939b7D6FE7a76632A830D6F4693BC684c';
const contractInstance = new web3.eth.Contract(abi, contract_address, {
  from: address,
});

module.exports = {
  web3,
  contractInstance,
};
