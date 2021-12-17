var abi = [
  {
    contractName: 'FlipContract',
    abi: [
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
        constant: true,
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
        constant: true,
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
        payable: true,
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
        constant: true,
      },
      {
        inputs: [],
        name: 'fundContract',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
        payable: true,
      },
    ],
    metadata:
      '{"compiler":{"version":"0.8.10+commit.fc410830"},"language":"Solidity","output":{"abi":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"bet","type":"uint256"},{"indexed":true,"internalType":"bool","name":"win","type":"bool"},{"indexed":false,"internalType":"uint8","name":"side","type":"uint8"}],"name":"bet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"funding","type":"uint256"}],"name":"funded","type":"event"},{"inputs":[],"name":"ContractBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"side","type":"uint8"}],"name":"flip","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"fundContract","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawAll","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}],"devdoc":{"kind":"dev","methods":{"owner()":{"details":"Returns the address of the current owner."},"renounceOwnership()":{"details":"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner."},"transferOwnership(address)":{"details":"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."}},"version":1},"userdoc":{"kind":"user","methods":{},"version":1}},"settings":{"compilationTarget":{"project:/src/contracts/flipcontract.sol":"FlipContract"},"evmVersion":"london","libraries":{},"metadata":{"bytecodeHash":"ipfs"},"optimizer":{"enabled":false,"runs":200},"remappings":[]},"sources":{"project:/node_modules/@openzeppelin/contracts/access/Ownable.sol":{"keccak256":"0x24e0364e503a9bbde94c715d26573a76f14cd2a202d45f96f52134ab806b67b9","license":"MIT","urls":["bzz-raw://e12cbaa7378fd9b62280e4e1d164bedcb4399ce238f5f98fc0eefb7e50577981","dweb:/ipfs/QmXRoFGUgfsaRkoPT5bxNMtSayKTQ8GZATLPXf69HcRA51"]},"project:/node_modules/@openzeppelin/contracts/utils/Context.sol":{"keccak256":"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7","license":"MIT","urls":["bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92","dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3"]},"project:/node_modules/@openzeppelin/contracts/utils/math/SafeMath.sol":{"keccak256":"0xa2f576be637946f767aa56601c26d717f48a0aff44f82e46f13807eea1009a21","license":"MIT","urls":["bzz-raw://973868f808e88e21a1a0a01d4839314515ee337ad096286c88e41b74dcc11fc2","dweb:/ipfs/QmfYuZxRfx2J2xdk4EXN7jKg4bUYEMTaYk9BAw9Bqn4o2Y"]},"project:/src/contracts/flipcontract.sol":{"keccak256":"0xd191a288ab016f8dd0fecff26f5c470bc25d1a6661dfbcc7b4e4c887dd8461f9","urls":["bzz-raw://04017af68d2d4f8cb6c48bbc7e86808cf43c3f779710bc3b21c0feb7a34742b9","dweb:/ipfs/QmSGhpjiyoDitFmsTx4nDhQjefxQ148jUzgVJ4qUfJdREy"]}},"version":1}',
    bytecode:
      '0x608060405234801561001057600080fd5b5061002d61002261003260201b60201c565b61003a60201b60201c565b6100fe565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b610dbd8061010d6000396000f3fe60806040526004361061007b5760003560e01c8063853828b61161004e578063853828b61461011d5780638da5cb5b14610148578063bd097e2114610173578063f2fde38b1461017d5761007b565b806312065fe0146100805780633b668059146100ab578063638c0637146100d6578063715018a614610106575b600080fd5b34801561008c57600080fd5b506100956101a6565b6040516100a291906107ee565b60405180910390f35b3480156100b757600080fd5b506100c06101b0565b6040516100cd91906107ee565b60405180910390f35b6100f060048036038101906100eb9190610847565b6101b6565b6040516100fd919061088f565b60405180910390f35b34801561011257600080fd5b5061011b610366565b005b34801561012957600080fd5b506101326103ee565b60405161013f91906107ee565b60405180910390f35b34801561015457600080fd5b5061015d6104ca565b60405161016a91906108eb565b60405180910390f35b61017b6104f3565b005b34801561018957600080fd5b506101a4600480360381019061019f9190610932565b6105e5565b005b6000600154905090565b60015481565b60006101cc6002346106dd90919063ffffffff16565b47101561020e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610205906109e2565b60405180910390fd5b60008260ff161480610223575060018260ff16145b610262576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161025990610a74565b60405180910390fd5b60008260ff166002426102759190610ac3565b14156102f057346001600082825461028d9190610b23565b925050819055503373ffffffffffffffffffffffffffffffffffffffff166108fc6002346102bb9190610b57565b9081150290604051600060405180830381858888f193505050501580156102e6573d6000803e3d6000fd5b506001905061030e565b34600160008282546103029190610bb1565b92505081905550600090505b801515343373ffffffffffffffffffffffffffffffffffffffff167f271b3e8d94a67ce5e9cee03d78c310019308ea7075468a4eb2bac8b027b14c4d866040516103589190610c16565b60405180910390a450919050565b61036e6106f3565b73ffffffffffffffffffffffffffffffffffffffff1661038c6104ca565b73ffffffffffffffffffffffffffffffffffffffff16146103e2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103d990610c7d565b60405180910390fd5b6103ec60006106fb565b565b60006103f86106f3565b73ffffffffffffffffffffffffffffffffffffffff166104166104ca565b73ffffffffffffffffffffffffffffffffffffffff161461046c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161046390610c7d565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff166108fc479081150290604051600060405180830381858888f193505050501580156104b2573d6000803e3d6000fd5b50600047146104c4576104c3610c9d565b5b47905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6104fb6106f3565b73ffffffffffffffffffffffffffffffffffffffff166105196104ca565b73ffffffffffffffffffffffffffffffffffffffff161461056f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161056690610c7d565b60405180910390fd5b600034141561057d57600080fd5b610592346001546107bf90919063ffffffff16565b6001819055507fed7d0ddcc17abdb3935a0a23cd93e91b449dfeac7fd0def9f481ed5b37e18c4d33346040516105c9929190610ccc565b60405180910390a147600154146105e3576105e2610c9d565b5b565b6105ed6106f3565b73ffffffffffffffffffffffffffffffffffffffff1661060b6104ca565b73ffffffffffffffffffffffffffffffffffffffff1614610661576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161065890610c7d565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156106d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106c890610d67565b60405180910390fd5b6106da816106fb565b50565b600081836106eb9190610b57565b905092915050565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600081836107cd9190610bb1565b905092915050565b6000819050919050565b6107e8816107d5565b82525050565b600060208201905061080360008301846107df565b92915050565b600080fd5b600060ff82169050919050565b6108248161080e565b811461082f57600080fd5b50565b6000813590506108418161081b565b92915050565b60006020828403121561085d5761085c610809565b5b600061086b84828501610832565b91505092915050565b60008115159050919050565b61088981610874565b82525050565b60006020820190506108a46000830184610880565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006108d5826108aa565b9050919050565b6108e5816108ca565b82525050565b600060208201905061090060008301846108dc565b92915050565b61090f816108ca565b811461091a57600080fd5b50565b60008135905061092c81610906565b92915050565b60006020828403121561094857610947610809565b5b60006109568482850161091d565b91505092915050565b600082825260208201905092915050565b7f54686520636f6e7472616374206861736e277420656e6f756768742066756e6460008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b60006109cc60218361095f565b91506109d782610970565b604082019050919050565b600060208201905081810360008301526109fb816109bf565b9050919050565b7f496e636f727265637420736964652c206e6565647320746f2062652030206f7260008201527f2031000000000000000000000000000000000000000000000000000000000000602082015250565b6000610a5e60228361095f565b9150610a6982610a02565b604082019050919050565b60006020820190508181036000830152610a8d81610a51565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000610ace826107d5565b9150610ad9836107d5565b925082610ae957610ae8610a94565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610b2e826107d5565b9150610b39836107d5565b925082821015610b4c57610b4b610af4565b5b828203905092915050565b6000610b62826107d5565b9150610b6d836107d5565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610ba657610ba5610af4565b5b828202905092915050565b6000610bbc826107d5565b9150610bc7836107d5565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610bfc57610bfb610af4565b5b828201905092915050565b610c108161080e565b82525050565b6000602082019050610c2b6000830184610c07565b92915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000610c6760208361095f565b9150610c7282610c31565b602082019050919050565b60006020820190508181036000830152610c9681610c5a565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fd5b6000604082019050610ce160008301856108dc565b610cee60208301846107df565b9392505050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000610d5160268361095f565b9150610d5c82610cf5565b604082019050919050565b60006020820190508181036000830152610d8081610d44565b905091905056fea2646970667358221220873bb73fc2226db809fb77becee17e6c4bcd938f177942bf1be5fe9fb689683b64736f6c634300080a0033',
    deployedBytecode:
      '0x60806040526004361061007b5760003560e01c8063853828b61161004e578063853828b61461011d5780638da5cb5b14610148578063bd097e2114610173578063f2fde38b1461017d5761007b565b806312065fe0146100805780633b668059146100ab578063638c0637146100d6578063715018a614610106575b600080fd5b34801561008c57600080fd5b506100956101a6565b6040516100a291906107ee565b60405180910390f35b3480156100b757600080fd5b506100c06101b0565b6040516100cd91906107ee565b60405180910390f35b6100f060048036038101906100eb9190610847565b6101b6565b6040516100fd919061088f565b60405180910390f35b34801561011257600080fd5b5061011b610366565b005b34801561012957600080fd5b506101326103ee565b60405161013f91906107ee565b60405180910390f35b34801561015457600080fd5b5061015d6104ca565b60405161016a91906108eb565b60405180910390f35b61017b6104f3565b005b34801561018957600080fd5b506101a4600480360381019061019f9190610932565b6105e5565b005b6000600154905090565b60015481565b60006101cc6002346106dd90919063ffffffff16565b47101561020e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610205906109e2565b60405180910390fd5b60008260ff161480610223575060018260ff16145b610262576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161025990610a74565b60405180910390fd5b60008260ff166002426102759190610ac3565b14156102f057346001600082825461028d9190610b23565b925050819055503373ffffffffffffffffffffffffffffffffffffffff166108fc6002346102bb9190610b57565b9081150290604051600060405180830381858888f193505050501580156102e6573d6000803e3d6000fd5b506001905061030e565b34600160008282546103029190610bb1565b92505081905550600090505b801515343373ffffffffffffffffffffffffffffffffffffffff167f271b3e8d94a67ce5e9cee03d78c310019308ea7075468a4eb2bac8b027b14c4d866040516103589190610c16565b60405180910390a450919050565b61036e6106f3565b73ffffffffffffffffffffffffffffffffffffffff1661038c6104ca565b73ffffffffffffffffffffffffffffffffffffffff16146103e2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103d990610c7d565b60405180910390fd5b6103ec60006106fb565b565b60006103f86106f3565b73ffffffffffffffffffffffffffffffffffffffff166104166104ca565b73ffffffffffffffffffffffffffffffffffffffff161461046c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161046390610c7d565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff166108fc479081150290604051600060405180830381858888f193505050501580156104b2573d6000803e3d6000fd5b50600047146104c4576104c3610c9d565b5b47905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6104fb6106f3565b73ffffffffffffffffffffffffffffffffffffffff166105196104ca565b73ffffffffffffffffffffffffffffffffffffffff161461056f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161056690610c7d565b60405180910390fd5b600034141561057d57600080fd5b610592346001546107bf90919063ffffffff16565b6001819055507fed7d0ddcc17abdb3935a0a23cd93e91b449dfeac7fd0def9f481ed5b37e18c4d33346040516105c9929190610ccc565b60405180910390a147600154146105e3576105e2610c9d565b5b565b6105ed6106f3565b73ffffffffffffffffffffffffffffffffffffffff1661060b6104ca565b73ffffffffffffffffffffffffffffffffffffffff1614610661576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161065890610c7d565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156106d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106c890610d67565b60405180910390fd5b6106da816106fb565b50565b600081836106eb9190610b57565b905092915050565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600081836107cd9190610bb1565b905092915050565b6000819050919050565b6107e8816107d5565b82525050565b600060208201905061080360008301846107df565b92915050565b600080fd5b600060ff82169050919050565b6108248161080e565b811461082f57600080fd5b50565b6000813590506108418161081b565b92915050565b60006020828403121561085d5761085c610809565b5b600061086b84828501610832565b91505092915050565b60008115159050919050565b61088981610874565b82525050565b60006020820190506108a46000830184610880565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006108d5826108aa565b9050919050565b6108e5816108ca565b82525050565b600060208201905061090060008301846108dc565b92915050565b61090f816108ca565b811461091a57600080fd5b50565b60008135905061092c81610906565b92915050565b60006020828403121561094857610947610809565b5b60006109568482850161091d565b91505092915050565b600082825260208201905092915050565b7f54686520636f6e7472616374206861736e277420656e6f756768742066756e6460008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b60006109cc60218361095f565b91506109d782610970565b604082019050919050565b600060208201905081810360008301526109fb816109bf565b9050919050565b7f496e636f727265637420736964652c206e6565647320746f2062652030206f7260008201527f2031000000000000000000000000000000000000000000000000000000000000602082015250565b6000610a5e60228361095f565b9150610a6982610a02565b604082019050919050565b60006020820190508181036000830152610a8d81610a51565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000610ace826107d5565b9150610ad9836107d5565b925082610ae957610ae8610a94565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610b2e826107d5565b9150610b39836107d5565b925082821015610b4c57610b4b610af4565b5b828203905092915050565b6000610b62826107d5565b9150610b6d836107d5565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610ba657610ba5610af4565b5b828202905092915050565b6000610bbc826107d5565b9150610bc7836107d5565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610bfc57610bfb610af4565b5b828201905092915050565b610c108161080e565b82525050565b6000602082019050610c2b6000830184610c07565b92915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000610c6760208361095f565b9150610c7282610c31565b602082019050919050565b60006020820190508181036000830152610c9681610c5a565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fd5b6000604082019050610ce160008301856108dc565b610cee60208301846107df565b9392505050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000610d5160268361095f565b9150610d5c82610cf5565b604082019050919050565b60006020820190508181036000830152610d8081610d44565b905091905056fea2646970667358221220873bb73fc2226db809fb77becee17e6c4bcd938f177942bf1be5fe9fb689683b64736f6c634300080a0033',
    immutableReferences: {},
    generatedSources: [],
    deployedGeneratedSources: [
      {
        ast: {
          nodeType: 'YulBlock',
          src: '0:9588:5',
          statements: [
            {
              body: {
                nodeType: 'YulBlock',
                src: '52:32:5',
                statements: [
                  {
                    nodeType: 'YulAssignment',
                    src: '62:16:5',
                    value: {
                      name: 'value',
                      nodeType: 'YulIdentifier',
                      src: '73:5:5',
                    },
                    variableNames: [
                      {
                        name: 'cleaned',
                        nodeType: 'YulIdentifier',
                        src: '62:7:5',
                      },
                    ],
                  },
                ],
              },
              name: 'cleanup_t_uint256',
              nodeType: 'YulFunctionDefinition',
              parameters: [
                {
                  name: 'value',
                  nodeType: 'YulTypedName',
                  src: '34:5:5',
                  type: '',
                },
              ],
              returnVariables: [
                {
                  name: 'cleaned',
                  nodeType: 'YulTypedName',
                  src: '44:7:5',
                  type: '',
                },
              ],
              src: '7:77:5',
            },
            {
              body: {
                nodeType: 'YulBlock',
                src: '155:53:5',
                statements: [
                  {
                    expression: {
                      arguments: [
                        {
                          name: 'pos',
                          nodeType: 'YulIdentifier',
                          src: '172:3:5',
                        },
                        {
                          arguments: [
                            {
                              name: 'value',
                              nodeType: 'YulIdentifier',
                              src: '195:5:5',
                            },
                          ],
                          functionName: {
                            name: 'cleanup_t_uint256',
                            nodeType: 'YulIdentifier',
                            src: '177:17:5',
                          },
                          nodeType: 'YulFunctionCall',
                          src: '177:24:5',
                        },
                      ],
                      functionName: {
                        name: 'mstore',
                        nodeType: 'YulIdentifier',
                        src: '165:6:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '165:37:5',
                    },
                    nodeType: 'YulExpressionStatement',
                    src: '165:37:5',
                  },
                ],
              },
              name: 'abi_encode_t_uint256_to_t_uint256_fromStack',
              nodeType: 'YulFunctionDefinition',
              parameters: [
                {
                  name: 'value',
                  nodeType: 'YulTypedName',
                  src: '143:5:5',
                  type: '',
                },
                {
                  name: 'pos',
                  nodeType: 'YulTypedName',
                  src: '150:3:5',
                  type: '',
                },
              ],
              src: '90:118:5',
            },
            {
              body: {
                nodeType: 'YulBlock',
                src: '312:124:5',
                statements: [
                  {
                    nodeType: 'YulAssignment',
                    src: '322:26:5',
                    value: {
                      arguments: [
                        {
                          name: 'headStart',
                          nodeType: 'YulIdentifier',
                          src: '334:9:5',
                        },
                        {
                          kind: 'number',
                          nodeType: 'YulLiteral',
                          src: '345:2:5',
                          type: '',
                          value: '32',
                        },
                      ],
                      functionName: {
                        name: 'add',
                        nodeType: 'YulIdentifier',
                        src: '330:3:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '330:18:5',
                    },
                    variableNames: [
                      {
                        name: 'tail',
                        nodeType: 'YulIdentifier',
                        src: '322:4:5',
                      },
                    ],
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          name: 'value0',
                          nodeType: 'YulIdentifier',
                          src: '402:6:5',
                        },
                        {
                          arguments: [
                            {
                              name: 'headStart',
                              nodeType: 'YulIdentifier',
                              src: '415:9:5',
                            },
                            {
                              kind: 'number',
                              nodeType: 'YulLiteral',
                              src: '426:1:5',
                              type: '',
                              value: '0',
                            },
                          ],
                          functionName: {
                            name: 'add',
                            nodeType: 'YulIdentifier',
                            src: '411:3:5',
                          },
                          nodeType: 'YulFunctionCall',
                          src: '411:17:5',
                        },
                      ],
                      functionName: {
                        name: 'abi_encode_t_uint256_to_t_uint256_fromStack',
                        nodeType: 'YulIdentifier',
                        src: '358:43:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '358:71:5',
                    },
                    nodeType: 'YulExpressionStatement',
                    src: '358:71:5',
                  },
                ],
              },
              name: 'abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed',
              nodeType: 'YulFunctionDefinition',
              parameters: [
                {
                  name: 'headStart',
                  nodeType: 'YulTypedName',
                  src: '284:9:5',
                  type: '',
                },
                {
                  name: 'value0',
                  nodeType: 'YulTypedName',
                  src: '296:6:5',
                  type: '',
                },
              ],
              returnVariables: [
                {
                  name: 'tail',
                  nodeType: 'YulTypedName',
                  src: '307:4:5',
                  type: '',
                },
              ],
              src: '214:222:5',
            },
            {
              body: {
                nodeType: 'YulBlock',
                src: '482:35:5',
                statements: [
                  {
                    nodeType: 'YulAssignment',
                    src: '492:19:5',
                    value: {
                      arguments: [
                        {
                          kind: 'number',
                          nodeType: 'YulLiteral',
                          src: '508:2:5',
                          type: '',
                          value: '64',
                        },
                      ],
                      functionName: {
                        name: 'mload',
                        nodeType: 'YulIdentifier',
                        src: '502:5:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '502:9:5',
                    },
                    variableNames: [
                      {
                        name: 'memPtr',
                        nodeType: 'YulIdentifier',
                        src: '492:6:5',
                      },
                    ],
                  },
                ],
              },
              name: 'allocate_unbounded',
              nodeType: 'YulFunctionDefinition',
              returnVariables: [
                {
                  name: 'memPtr',
                  nodeType: 'YulTypedName',
                  src: '475:6:5',
                  type: '',
                },
              ],
              src: '442:75:5',
            },
            {
              body: {
                nodeType: 'YulBlock',
                src: '612:28:5',
                statements: [
                  {
                    expression: {
                      arguments: [
                        {
                          kind: 'number',
                          nodeType: 'YulLiteral',
                          src: '629:1:5',
                          type: '',
                          value: '0',
                        },
                        {
                          kind: 'number',
                          nodeType: 'YulLiteral',
                          src: '632:1:5',
                          type: '',
                          value: '0',
                        },
                      ],
                      functionName: {
                        name: 'revert',
                        nodeType: 'YulIdentifier',
                        src: '622:6:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '622:12:5',
                    },
                    nodeType: 'YulExpressionStatement',
                    src: '622:12:5',
                  },
                ],
              },
              name: 'revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b',
              nodeType: 'YulFunctionDefinition',
              src: '523:117:5',
            },
            {
              body: {
                nodeType: 'YulBlock',
                src: '735:28:5',
                statements: [
                  {
                    expression: {
                      arguments: [
                        {
                          kind: 'number',
                          nodeType: 'YulLiteral',
                          src: '752:1:5',
                          type: '',
                          value: '0',
                        },
                        {
                          kind: 'number',
                          nodeType: 'YulLiteral',
                          src: '755:1:5',
                          type: '',
                          value: '0',
                        },
                      ],
                      functionName: {
                        name: 'revert',
                        nodeType: 'YulIdentifier',
                        src: '745:6:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '745:12:5',
                    },
                    nodeType: 'YulExpressionStatement',
                    src: '745:12:5',
                  },
                ],
              },
              name: 'revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db',
              nodeType: 'YulFunctionDefinition',
              src: '646:117:5',
            },
            {
              body: {
                nodeType: 'YulBlock',
                src: '812:43:5',
                statements: [
                  {
                    nodeType: 'YulAssignment',
                    src: '822:27:5',
                    value: {
                      arguments: [
                        {
                          name: 'value',
                          nodeType: 'YulIdentifier',
                          src: '837:5:5',
                        },
                        {
                          kind: 'number',
                          nodeType: 'YulLiteral',
                          src: '844:4:5',
                          type: '',
                          value: '0xff',
                        },
                      ],
                      functionName: {
                        name: 'and',
                        nodeType: 'YulIdentifier',
                        src: '833:3:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '833:16:5',
                    },
                    variableNames: [
                      {
                        name: 'cleaned',
                        nodeType: 'YulIdentifier',
                        src: '822:7:5',
                      },
                    ],
                  },
                ],
              },
              name: 'cleanup_t_uint8',
              nodeType: 'YulFunctionDefinition',
              parameters: [
                {
                  name: 'value',
                  nodeType: 'YulTypedName',
                  src: '794:5:5',
                  type: '',
                },
              ],
              returnVariables: [
                {
                  name: 'cleaned',
                  nodeType: 'YulTypedName',
                  src: '804:7:5',
                  type: '',
                },
              ],
              src: '769:86:5',
            },
            {
              body: {
                nodeType: 'YulBlock',
                src: '902:77:5',
                statements: [
                  {
                    body: {
                      nodeType: 'YulBlock',
                      src: '957:16:5',
                      statements: [
                        {
                          expression: {
                            arguments: [
                              {
                                kind: 'number',
                                nodeType: 'YulLiteral',
                                src: '966:1:5',
                                type: '',
                                value: '0',
                              },
                              {
                                kind: 'number',
                                nodeType: 'YulLiteral',
                                src: '969:1:5',
                                type: '',
                                value: '0',
                              },
                            ],
                            functionName: {
                              name: 'revert',
                              nodeType: 'YulIdentifier',
                              src: '959:6:5',
                            },
                            nodeType: 'YulFunctionCall',
                            src: '959:12:5',
                          },
                          nodeType: 'YulExpressionStatement',
                          src: '959:12:5',
                        },
                      ],
                    },
                    condition: {
                      arguments: [
                        {
                          arguments: [
                            {
                              name: 'value',
                              nodeType: 'YulIdentifier',
                              src: '925:5:5',
                            },
                            {
                              arguments: [
                                {
                                  name: 'value',
                                  nodeType: 'YulIdentifier',
                                  src: '948:5:5',
                                },
                              ],
                              functionName: {
                                name: 'cleanup_t_uint8',
                                nodeType: 'YulIdentifier',
                                src: '932:15:5',
                              },
                              nodeType: 'YulFunctionCall',
                              src: '932:22:5',
                            },
                          ],
                          functionName: {
                            name: 'eq',
                            nodeType: 'YulIdentifier',
                            src: '922:2:5',
                          },
                          nodeType: 'YulFunctionCall',
                          src: '922:33:5',
                        },
                      ],
                      functionName: {
                        name: 'iszero',
                        nodeType: 'YulIdentifier',
                        src: '915:6:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '915:41:5',
                    },
                    nodeType: 'YulIf',
                    src: '912:61:5',
                  },
                ],
              },
              name: 'validator_revert_t_uint8',
              nodeType: 'YulFunctionDefinition',
              parameters: [
                {
                  name: 'value',
                  nodeType: 'YulTypedName',
                  src: '895:5:5',
                  type: '',
                },
              ],
              src: '861:118:5',
            },
            {
              body: {
                nodeType: 'YulBlock',
                src: '1035:85:5',
                statements: [
                  {
                    nodeType: 'YulAssignment',
                    src: '1045:29:5',
                    value: {
                      arguments: [
                        {
                          name: 'offset',
                          nodeType: 'YulIdentifier',
                          src: '1067:6:5',
                        },
                      ],
                      functionName: {
                        name: 'calldataload',
                        nodeType: 'YulIdentifier',
                        src: '1054:12:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '1054:20:5',
                    },
                    variableNames: [
                      {
                        name: 'value',
                        nodeType: 'YulIdentifier',
                        src: '1045:5:5',
                      },
                    ],
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          name: 'value',
                          nodeType: 'YulIdentifier',
                          src: '1108:5:5',
                        },
                      ],
                      functionName: {
                        name: 'validator_revert_t_uint8',
                        nodeType: 'YulIdentifier',
                        src: '1083:24:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '1083:31:5',
                    },
                    nodeType: 'YulExpressionStatement',
                    src: '1083:31:5',
                  },
                ],
              },
              name: 'abi_decode_t_uint8',
              nodeType: 'YulFunctionDefinition',
              parameters: [
                {
                  name: 'offset',
                  nodeType: 'YulTypedName',
                  src: '1013:6:5',
                  type: '',
                },
                {
                  name: 'end',
                  nodeType: 'YulTypedName',
                  src: '1021:3:5',
                  type: '',
                },
              ],
              returnVariables: [
                {
                  name: 'value',
                  nodeType: 'YulTypedName',
                  src: '1029:5:5',
                  type: '',
                },
              ],
              src: '985:135:5',
            },
            {
              body: {
                nodeType: 'YulBlock',
                src: '1190:261:5',
                statements: [
                  {
                    body: {
                      nodeType: 'YulBlock',
                      src: '1236:83:5',
                      statements: [
                        {
                          expression: {
                            arguments: [],
                            functionName: {
                              name: 'revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b',
                              nodeType: 'YulIdentifier',
                              src: '1238:77:5',
                            },
                            nodeType: 'YulFunctionCall',
                            src: '1238:79:5',
                          },
                          nodeType: 'YulExpressionStatement',
                          src: '1238:79:5',
                        },
                      ],
                    },
                    condition: {
                      arguments: [
                        {
                          arguments: [
                            {
                              name: 'dataEnd',
                              nodeType: 'YulIdentifier',
                              src: '1211:7:5',
                            },
                            {
                              name: 'headStart',
                              nodeType: 'YulIdentifier',
                              src: '1220:9:5',
                            },
                          ],
                          functionName: {
                            name: 'sub',
                            nodeType: 'YulIdentifier',
                            src: '1207:3:5',
                          },
                          nodeType: 'YulFunctionCall',
                          src: '1207:23:5',
                        },
                        {
                          kind: 'number',
                          nodeType: 'YulLiteral',
                          src: '1232:2:5',
                          type: '',
                          value: '32',
                        },
                      ],
                      functionName: {
                        name: 'slt',
                        nodeType: 'YulIdentifier',
                        src: '1203:3:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '1203:32:5',
                    },
                    nodeType: 'YulIf',
                    src: '1200:119:5',
                  },
                  {
                    nodeType: 'YulBlock',
                    src: '1329:115:5',
                    statements: [
                      {
                        nodeType: 'YulVariableDeclaration',
                        src: '1344:15:5',
                        value: {
                          kind: 'number',
                          nodeType: 'YulLiteral',
                          src: '1358:1:5',
                          type: '',
                          value: '0',
                        },
                        variables: [
                          {
                            name: 'offset',
                            nodeType: 'YulTypedName',
                            src: '1348:6:5',
                            type: '',
                          },
                        ],
                      },
                      {
                        nodeType: 'YulAssignment',
                        src: '1373:61:5',
                        value: {
                          arguments: [
                            {
                              arguments: [
                                {
                                  name: 'headStart',
                                  nodeType: 'YulIdentifier',
                                  src: '1406:9:5',
                                },
                                {
                                  name: 'offset',
                                  nodeType: 'YulIdentifier',
                                  src: '1417:6:5',
                                },
                              ],
                              functionName: {
                                name: 'add',
                                nodeType: 'YulIdentifier',
                                src: '1402:3:5',
                              },
                              nodeType: 'YulFunctionCall',
                              src: '1402:22:5',
                            },
                            {
                              name: 'dataEnd',
                              nodeType: 'YulIdentifier',
                              src: '1426:7:5',
                            },
                          ],
                          functionName: {
                            name: 'abi_decode_t_uint8',
                            nodeType: 'YulIdentifier',
                            src: '1383:18:5',
                          },
                          nodeType: 'YulFunctionCall',
                          src: '1383:51:5',
                        },
                        variableNames: [
                          {
                            name: 'value0',
                            nodeType: 'YulIdentifier',
                            src: '1373:6:5',
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              name: 'abi_decode_tuple_t_uint8',
              nodeType: 'YulFunctionDefinition',
              parameters: [
                {
                  name: 'headStart',
                  nodeType: 'YulTypedName',
                  src: '1160:9:5',
                  type: '',
                },
                {
                  name: 'dataEnd',
                  nodeType: 'YulTypedName',
                  src: '1171:7:5',
                  type: '',
                },
              ],
              returnVariables: [
                {
                  name: 'value0',
                  nodeType: 'YulTypedName',
                  src: '1183:6:5',
                  type: '',
                },
              ],
              src: '1126:325:5',
            },
            {
              body: {
                nodeType: 'YulBlock',
                src: '1499:48:5',
                statements: [
                  {
                    nodeType: 'YulAssignment',
                    src: '1509:32:5',
                    value: {
                      arguments: [
                        {
                          arguments: [
                            {
                              name: 'value',
                              nodeType: 'YulIdentifier',
                              src: '1534:5:5',
                            },
                          ],
                          functionName: {
                            name: 'iszero',
                            nodeType: 'YulIdentifier',
                            src: '1527:6:5',
                          },
                          nodeType: 'YulFunctionCall',
                          src: '1527:13:5',
                        },
                      ],
                      functionName: {
                        name: 'iszero',
                        nodeType: 'YulIdentifier',
                        src: '1520:6:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '1520:21:5',
                    },
                    variableNames: [
                      {
                        name: 'cleaned',
                        nodeType: 'YulIdentifier',
                        src: '1509:7:5',
                      },
                    ],
                  },
                ],
              },
              name: 'cleanup_t_bool',
              nodeType: 'YulFunctionDefinition',
              parameters: [
                {
                  name: 'value',
                  nodeType: 'YulTypedName',
                  src: '1481:5:5',
                  type: '',
                },
              ],
              returnVariables: [
                {
                  name: 'cleaned',
                  nodeType: 'YulTypedName',
                  src: '1491:7:5',
                  type: '',
                },
              ],
              src: '1457:90:5',
            },
            {
              body: {
                nodeType: 'YulBlock',
                src: '1612:50:5',
                statements: [
                  {
                    expression: {
                      arguments: [
                        {
                          name: 'pos',
                          nodeType: 'YulIdentifier',
                          src: '1629:3:5',
                        },
                        {
                          arguments: [
                            {
                              name: 'value',
                              nodeType: 'YulIdentifier',
                              src: '1649:5:5',
                            },
                          ],
                          functionName: {
                            name: 'cleanup_t_bool',
                            nodeType: 'YulIdentifier',
                            src: '1634:14:5',
                          },
                          nodeType: 'YulFunctionCall',
                          src: '1634:21:5',
                        },
                      ],
                      functionName: {
                        name: 'mstore',
                        nodeType: 'YulIdentifier',
                        src: '1622:6:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '1622:34:5',
                    },
                    nodeType: 'YulExpressionStatement',
                    src: '1622:34:5',
                  },
                ],
              },
              name: 'abi_encode_t_bool_to_t_bool_fromStack',
              nodeType: 'YulFunctionDefinition',
              parameters: [
                {
                  name: 'value',
                  nodeType: 'YulTypedName',
                  src: '1600:5:5',
                  type: '',
                },
                {
                  name: 'pos',
                  nodeType: 'YulTypedName',
                  src: '1607:3:5',
                  type: '',
                },
              ],
              src: '1553:109:5',
            },
            {
              body: {
                nodeType: 'YulBlock',
                src: '1760:118:5',
                statements: [
                  {
                    nodeType: 'YulAssignment',
                    src: '1770:26:5',
                    value: {
                      arguments: [
                        {
                          name: 'headStart',
                          nodeType: 'YulIdentifier',
                          src: '1782:9:5',
                        },
                        {
                          kind: 'number',
                          nodeType: 'YulLiteral',
                          src: '1793:2:5',
                          type: '',
                          value: '32',
                        },
                      ],
                      functionName: {
                        name: 'add',
                        nodeType: 'YulIdentifier',
                        src: '1778:3:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '1778:18:5',
                    },
                    variableNames: [
                      {
                        name: 'tail',
                        nodeType: 'YulIdentifier',
                        src: '1770:4:5',
                      },
                    ],
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          name: 'value0',
                          nodeType: 'YulIdentifier',
                          src: '1844:6:5',
                        },
                        {
                          arguments: [
                            {
                              name: 'headStart',
                              nodeType: 'YulIdentifier',
                              src: '1857:9:5',
                            },
                            {
                              kind: 'number',
                              nodeType: 'YulLiteral',
                              src: '1868:1:5',
                              type: '',
                              value: '0',
                            },
                          ],
                          functionName: {
                            name: 'add',
                            nodeType: 'YulIdentifier',
                            src: '1853:3:5',
                          },
                          nodeType: 'YulFunctionCall',
                          src: '1853:17:5',
                        },
                      ],
                      functionName: {
                        name: 'abi_encode_t_bool_to_t_bool_fromStack',
                        nodeType: 'YulIdentifier',
                        src: '1806:37:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '1806:65:5',
                    },
                    nodeType: 'YulExpressionStatement',
                    src: '1806:65:5',
                  },
                ],
              },
              name: 'abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed',
              nodeType: 'YulFunctionDefinition',
              parameters: [
                {
                  name: 'headStart',
                  nodeType: 'YulTypedName',
                  src: '1732:9:5',
                  type: '',
                },
                {
                  name: 'value0',
                  nodeType: 'YulTypedName',
                  src: '1744:6:5',
                  type: '',
                },
              ],
              returnVariables: [
                {
                  name: 'tail',
                  nodeType: 'YulTypedName',
                  src: '1755:4:5',
                  type: '',
                },
              ],
              src: '1668:210:5',
            },
            {
              body: {
                nodeType: 'YulBlock',
                src: '1929:81:5',
                statements: [
                  {
                    nodeType: 'YulAssignment',
                    src: '1939:65:5',
                    value: {
                      arguments: [
                        {
                          name: 'value',
                          nodeType: 'YulIdentifier',
                          src: '1954:5:5',
                        },
                        {
                          kind: 'number',
                          nodeType: 'YulLiteral',
                          src: '1961:42:5',
                          type: '',
                          value: '0xffffffffffffffffffffffffffffffffffffffff',
                        },
                      ],
                      functionName: {
                        name: 'and',
                        nodeType: 'YulIdentifier',
                        src: '1950:3:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '1950:54:5',
                    },
                    variableNames: [
                      {
                        name: 'cleaned',
                        nodeType: 'YulIdentifier',
                        src: '1939:7:5',
                      },
                    ],
                  },
                ],
              },
              name: 'cleanup_t_uint160',
              nodeType: 'YulFunctionDefinition',
              parameters: [
                {
                  name: 'value',
                  nodeType: 'YulTypedName',
                  src: '1911:5:5',
                  type: '',
                },
              ],
              returnVariables: [
                {
                  name: 'cleaned',
                  nodeType: 'YulTypedName',
                  src: '1921:7:5',
                  type: '',
                },
              ],
              src: '1884:126:5',
            },
            {
              body: {
                nodeType: 'YulBlock',
                src: '2061:51:5',
                statements: [
                  {
                    nodeType: 'YulAssignment',
                    src: '2071:35:5',
                    value: {
                      arguments: [
                        {
                          name: 'value',
                          nodeType: 'YulIdentifier',
                          src: '2100:5:5',
                        },
                      ],
                      functionName: {
                        name: 'cleanup_t_uint160',
                        nodeType: 'YulIdentifier',
                        src: '2082:17:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '2082:24:5',
                    },
                    variableNames: [
                      {
                        name: 'cleaned',
                        nodeType: 'YulIdentifier',
                        src: '2071:7:5',
                      },
                    ],
                  },
                ],
              },
              name: 'cleanup_t_address',
              nodeType: 'YulFunctionDefinition',
              parameters: [
                {
                  name: 'value',
                  nodeType: 'YulTypedName',
                  src: '2043:5:5',
                  type: '',
                },
              ],
              returnVariables: [
                {
                  name: 'cleaned',
                  nodeType: 'YulTypedName',
                  src: '2053:7:5',
                  type: '',
                },
              ],
              src: '2016:96:5',
            },
            {
              body: {
                nodeType: 'YulBlock',
                src: '2183:53:5',
                statements: [
                  {
                    expression: {
                      arguments: [
                        {
                          name: 'pos',
                          nodeType: 'YulIdentifier',
                          src: '2200:3:5',
                        },
                        {
                          arguments: [
                            {
                              name: 'value',
                              nodeType: 'YulIdentifier',
                              src: '2223:5:5',
                            },
                          ],
                          functionName: {
                            name: 'cleanup_t_address',
                            nodeType: 'YulIdentifier',
                            src: '2205:17:5',
                          },
                          nodeType: 'YulFunctionCall',
                          src: '2205:24:5',
                        },
                      ],
                      functionName: {
                        name: 'mstore',
                        nodeType: 'YulIdentifier',
                        src: '2193:6:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '2193:37:5',
                    },
                    nodeType: 'YulExpressionStatement',
                    src: '2193:37:5',
                  },
                ],
              },
              name: 'abi_encode_t_address_to_t_address_fromStack',
              nodeType: 'YulFunctionDefinition',
              parameters: [
                {
                  name: 'value',
                  nodeType: 'YulTypedName',
                  src: '2171:5:5',
                  type: '',
                },
                {
                  name: 'pos',
                  nodeType: 'YulTypedName',
                  src: '2178:3:5',
                  type: '',
                },
              ],
              src: '2118:118:5',
            },
            {
              body: {
                nodeType: 'YulBlock',
                src: '2340:124:5',
                statements: [
                  {
                    nodeType: 'YulAssignment',
                    src: '2350:26:5',
                    value: {
                      arguments: [
                        {
                          name: 'headStart',
                          nodeType: 'YulIdentifier',
                          src: '2362:9:5',
                        },
                        {
                          kind: 'number',
                          nodeType: 'YulLiteral',
                          src: '2373:2:5',
                          type: '',
                          value: '32',
                        },
                      ],
                      functionName: {
                        name: 'add',
                        nodeType: 'YulIdentifier',
                        src: '2358:3:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '2358:18:5',
                    },
                    variableNames: [
                      {
                        name: 'tail',
                        nodeType: 'YulIdentifier',
                        src: '2350:4:5',
                      },
                    ],
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          name: 'value0',
                          nodeType: 'YulIdentifier',
                          src: '2430:6:5',
                        },
                        {
                          arguments: [
                            {
                              name: 'headStart',
                              nodeType: 'YulIdentifier',
                              src: '2443:9:5',
                            },
                            {
                              kind: 'number',
                              nodeType: 'YulLiteral',
                              src: '2454:1:5',
                              type: '',
                              value: '0',
                            },
                          ],
                          functionName: {
                            name: 'add',
                            nodeType: 'YulIdentifier',
                            src: '2439:3:5',
                          },
                          nodeType: 'YulFunctionCall',
                          src: '2439:17:5',
                        },
                      ],
                      functionName: {
                        name: 'abi_encode_t_address_to_t_address_fromStack',
                        nodeType: 'YulIdentifier',
                        src: '2386:43:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '2386:71:5',
                    },
                    nodeType: 'YulExpressionStatement',
                    src: '2386:71:5',
                  },
                ],
              },
              name: 'abi_encode_tuple_t_address__to_t_address__fromStack_reversed',
              nodeType: 'YulFunctionDefinition',
              parameters: [
                {
                  name: 'headStart',
                  nodeType: 'YulTypedName',
                  src: '2312:9:5',
                  type: '',
                },
                {
                  name: 'value0',
                  nodeType: 'YulTypedName',
                  src: '2324:6:5',
                  type: '',
                },
              ],
              returnVariables: [
                {
                  name: 'tail',
                  nodeType: 'YulTypedName',
                  src: '2335:4:5',
                  type: '',
                },
              ],
              src: '2242:222:5',
            },
            {
              body: {
                nodeType: 'YulBlock',
                src: '2513:79:5',
                statements: [
                  {
                    body: {
                      nodeType: 'YulBlock',
                      src: '2570:16:5',
                      statements: [
                        {
                          expression: {
                            arguments: [
                              {
                                kind: 'number',
                                nodeType: 'YulLiteral',
                                src: '2579:1:5',
                                type: '',
                                value: '0',
                              },
                              {
                                kind: 'number',
                                nodeType: 'YulLiteral',
                                src: '2582:1:5',
                                type: '',
                                value: '0',
                              },
                            ],
                            functionName: {
                              name: 'revert',
                              nodeType: 'YulIdentifier',
                              src: '2572:6:5',
                            },
                            nodeType: 'YulFunctionCall',
                            src: '2572:12:5',
                          },
                          nodeType: 'YulExpressionStatement',
                          src: '2572:12:5',
                        },
                      ],
                    },
                    condition: {
                      arguments: [
                        {
                          arguments: [
                            {
                              name: 'value',
                              nodeType: 'YulIdentifier',
                              src: '2536:5:5',
                            },
                            {
                              arguments: [
                                {
                                  name: 'value',
                                  nodeType: 'YulIdentifier',
                                  src: '2561:5:5',
                                },
                              ],
                              functionName: {
                                name: 'cleanup_t_address',
                                nodeType: 'YulIdentifier',
                                src: '2543:17:5',
                              },
                              nodeType: 'YulFunctionCall',
                              src: '2543:24:5',
                            },
                          ],
                          functionName: {
                            name: 'eq',
                            nodeType: 'YulIdentifier',
                            src: '2533:2:5',
                          },
                          nodeType: 'YulFunctionCall',
                          src: '2533:35:5',
                        },
                      ],
                      functionName: {
                        name: 'iszero',
                        nodeType: 'YulIdentifier',
                        src: '2526:6:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '2526:43:5',
                    },
                    nodeType: 'YulIf',
                    src: '2523:63:5',
                  },
                ],
              },
              name: 'validator_revert_t_address',
              nodeType: 'YulFunctionDefinition',
              parameters: [
                {
                  name: 'value',
                  nodeType: 'YulTypedName',
                  src: '2506:5:5',
                  type: '',
                },
              ],
              src: '2470:122:5',
            },
            {
              body: {
                nodeType: 'YulBlock',
                src: '2650:87:5',
                statements: [
                  {
                    nodeType: 'YulAssignment',
                    src: '2660:29:5',
                    value: {
                      arguments: [
                        {
                          name: 'offset',
                          nodeType: 'YulIdentifier',
                          src: '2682:6:5',
                        },
                      ],
                      functionName: {
                        name: 'calldataload',
                        nodeType: 'YulIdentifier',
                        src: '2669:12:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '2669:20:5',
                    },
                    variableNames: [
                      {
                        name: 'value',
                        nodeType: 'YulIdentifier',
                        src: '2660:5:5',
                      },
                    ],
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          name: 'value',
                          nodeType: 'YulIdentifier',
                          src: '2725:5:5',
                        },
                      ],
                      functionName: {
                        name: 'validator_revert_t_address',
                        nodeType: 'YulIdentifier',
                        src: '2698:26:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '2698:33:5',
                    },
                    nodeType: 'YulExpressionStatement',
                    src: '2698:33:5',
                  },
                ],
              },
              name: 'abi_decode_t_address',
              nodeType: 'YulFunctionDefinition',
              parameters: [
                {
                  name: 'offset',
                  nodeType: 'YulTypedName',
                  src: '2628:6:5',
                  type: '',
                },
                {
                  name: 'end',
                  nodeType: 'YulTypedName',
                  src: '2636:3:5',
                  type: '',
                },
              ],
              returnVariables: [
                {
                  name: 'value',
                  nodeType: 'YulTypedName',
                  src: '2644:5:5',
                  type: '',
                },
              ],
              src: '2598:139:5',
            },
            {
              body: {
                nodeType: 'YulBlock',
                src: '2809:263:5',
                statements: [
                  {
                    body: {
                      nodeType: 'YulBlock',
                      src: '2855:83:5',
                      statements: [
                        {
                          expression: {
                            arguments: [],
                            functionName: {
                              name: 'revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b',
                              nodeType: 'YulIdentifier',
                              src: '2857:77:5',
                            },
                            nodeType: 'YulFunctionCall',
                            src: '2857:79:5',
                          },
                          nodeType: 'YulExpressionStatement',
                          src: '2857:79:5',
                        },
                      ],
                    },
                    condition: {
                      arguments: [
                        {
                          arguments: [
                            {
                              name: 'dataEnd',
                              nodeType: 'YulIdentifier',
                              src: '2830:7:5',
                            },
                            {
                              name: 'headStart',
                              nodeType: 'YulIdentifier',
                              src: '2839:9:5',
                            },
                          ],
                          functionName: {
                            name: 'sub',
                            nodeType: 'YulIdentifier',
                            src: '2826:3:5',
                          },
                          nodeType: 'YulFunctionCall',
                          src: '2826:23:5',
                        },
                        {
                          kind: 'number',
                          nodeType: 'YulLiteral',
                          src: '2851:2:5',
                          type: '',
                          value: '32',
                        },
                      ],
                      functionName: {
                        name: 'slt',
                        nodeType: 'YulIdentifier',
                        src: '2822:3:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '2822:32:5',
                    },
                    nodeType: 'YulIf',
                    src: '2819:119:5',
                  },
                  {
                    nodeType: 'YulBlock',
                    src: '2948:117:5',
                    statements: [
                      {
                        nodeType: 'YulVariableDeclaration',
                        src: '2963:15:5',
                        value: {
                          kind: 'number',
                          nodeType: 'YulLiteral',
                          src: '2977:1:5',
                          type: '',
                          value: '0',
                        },
                        variables: [
                          {
                            name: 'offset',
                            nodeType: 'YulTypedName',
                            src: '2967:6:5',
                            type: '',
                          },
                        ],
                      },
                      {
                        nodeType: 'YulAssignment',
                        src: '2992:63:5',
                        value: {
                          arguments: [
                            {
                              arguments: [
                                {
                                  name: 'headStart',
                                  nodeType: 'YulIdentifier',
                                  src: '3027:9:5',
                                },
                                {
                                  name: 'offset',
                                  nodeType: 'YulIdentifier',
                                  src: '3038:6:5',
                                },
                              ],
                              functionName: {
                                name: 'add',
                                nodeType: 'YulIdentifier',
                                src: '3023:3:5',
                              },
                              nodeType: 'YulFunctionCall',
                              src: '3023:22:5',
                            },
                            {
                              name: 'dataEnd',
                              nodeType: 'YulIdentifier',
                              src: '3047:7:5',
                            },
                          ],
                          functionName: {
                            name: 'abi_decode_t_address',
                            nodeType: 'YulIdentifier',
                            src: '3002:20:5',
                          },
                          nodeType: 'YulFunctionCall',
                          src: '3002:53:5',
                        },
                        variableNames: [
                          {
                            name: 'value0',
                            nodeType: 'YulIdentifier',
                            src: '2992:6:5',
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              name: 'abi_decode_tuple_t_address',
              nodeType: 'YulFunctionDefinition',
              parameters: [
                {
                  name: 'headStart',
                  nodeType: 'YulTypedName',
                  src: '2779:9:5',
                  type: '',
                },
                {
                  name: 'dataEnd',
                  nodeType: 'YulTypedName',
                  src: '2790:7:5',
                  type: '',
                },
              ],
              returnVariables: [
                {
                  name: 'value0',
                  nodeType: 'YulTypedName',
                  src: '2802:6:5',
                  type: '',
                },
              ],
              src: '2743:329:5',
            },
            {
              body: {
                nodeType: 'YulBlock',
                src: '3174:73:5',
                statements: [
                  {
                    expression: {
                      arguments: [
                        {
                          name: 'pos',
                          nodeType: 'YulIdentifier',
                          src: '3191:3:5',
                        },
                        {
                          name: 'length',
                          nodeType: 'YulIdentifier',
                          src: '3196:6:5',
                        },
                      ],
                      functionName: {
                        name: 'mstore',
                        nodeType: 'YulIdentifier',
                        src: '3184:6:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '3184:19:5',
                    },
                    nodeType: 'YulExpressionStatement',
                    src: '3184:19:5',
                  },
                  {
                    nodeType: 'YulAssignment',
                    src: '3212:29:5',
                    value: {
                      arguments: [
                        {
                          name: 'pos',
                          nodeType: 'YulIdentifier',
                          src: '3231:3:5',
                        },
                        {
                          kind: 'number',
                          nodeType: 'YulLiteral',
                          src: '3236:4:5',
                          type: '',
                          value: '0x20',
                        },
                      ],
                      functionName: {
                        name: 'add',
                        nodeType: 'YulIdentifier',
                        src: '3227:3:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '3227:14:5',
                    },
                    variableNames: [
                      {
                        name: 'updated_pos',
                        nodeType: 'YulIdentifier',
                        src: '3212:11:5',
                      },
                    ],
                  },
                ],
              },
              name: 'array_storeLengthForEncoding_t_string_memory_ptr_fromStack',
              nodeType: 'YulFunctionDefinition',
              parameters: [
                {
                  name: 'pos',
                  nodeType: 'YulTypedName',
                  src: '3146:3:5',
                  type: '',
                },
                {
                  name: 'length',
                  nodeType: 'YulTypedName',
                  src: '3151:6:5',
                  type: '',
                },
              ],
              returnVariables: [
                {
                  name: 'updated_pos',
                  nodeType: 'YulTypedName',
                  src: '3162:11:5',
                  type: '',
                },
              ],
              src: '3078:169:5',
            },
            {
              body: {
                nodeType: 'YulBlock',
                src: '3359:114:5',
                statements: [
                  {
                    expression: {
                      arguments: [
                        {
                          arguments: [
                            {
                              name: 'memPtr',
                              nodeType: 'YulIdentifier',
                              src: '3381:6:5',
                            },
                            {
                              kind: 'number',
                              nodeType: 'YulLiteral',
                              src: '3389:1:5',
                              type: '',
                              value: '0',
                            },
                          ],
                          functionName: {
                            name: 'add',
                            nodeType: 'YulIdentifier',
                            src: '3377:3:5',
                          },
                          nodeType: 'YulFunctionCall',
                          src: '3377:14:5',
                        },
                        {
                          hexValue:
                            '54686520636f6e7472616374206861736e277420656e6f756768742066756e64',
                          kind: 'string',
                          nodeType: 'YulLiteral',
                          src: '3393:34:5',
                          type: '',
                          value: "The contract hasn't enought fund",
                        },
                      ],
                      functionName: {
                        name: 'mstore',
                        nodeType: 'YulIdentifier',
                        src: '3370:6:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '3370:58:5',
                    },
                    nodeType: 'YulExpressionStatement',
                    src: '3370:58:5',
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          arguments: [
                            {
                              name: 'memPtr',
                              nodeType: 'YulIdentifier',
                              src: '3449:6:5',
                            },
                            {
                              kind: 'number',
                              nodeType: 'YulLiteral',
                              src: '3457:2:5',
                              type: '',
                              value: '32',
                            },
                          ],
                          functionName: {
                            name: 'add',
                            nodeType: 'YulIdentifier',
                            src: '3445:3:5',
                          },
                          nodeType: 'YulFunctionCall',
                          src: '3445:15:5',
                        },
                        {
                          hexValue: '73',
                          kind: 'string',
                          nodeType: 'YulLiteral',
                          src: '3462:3:5',
                          type: '',
                          value: 's',
                        },
                      ],
                      functionName: {
                        name: 'mstore',
                        nodeType: 'YulIdentifier',
                        src: '3438:6:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '3438:28:5',
                    },
                    nodeType: 'YulExpressionStatement',
                    src: '3438:28:5',
                  },
                ],
              },
              name: 'store_literal_in_memory_017157b9f30962c99190ba4241b1c3fe2697dafa0962ee9996e8b8917ab35c1e',
              nodeType: 'YulFunctionDefinition',
              parameters: [
                {
                  name: 'memPtr',
                  nodeType: 'YulTypedName',
                  src: '3351:6:5',
                  type: '',
                },
              ],
              src: '3253:220:5',
            },
            {
              body: {
                nodeType: 'YulBlock',
                src: '3625:220:5',
                statements: [
                  {
                    nodeType: 'YulAssignment',
                    src: '3635:74:5',
                    value: {
                      arguments: [
                        {
                          name: 'pos',
                          nodeType: 'YulIdentifier',
                          src: '3701:3:5',
                        },
                        {
                          kind: 'number',
                          nodeType: 'YulLiteral',
                          src: '3706:2:5',
                          type: '',
                          value: '33',
                        },
                      ],
                      functionName: {
                        name: 'array_storeLengthForEncoding_t_string_memory_ptr_fromStack',
                        nodeType: 'YulIdentifier',
                        src: '3642:58:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '3642:67:5',
                    },
                    variableNames: [
                      {
                        name: 'pos',
                        nodeType: 'YulIdentifier',
                        src: '3635:3:5',
                      },
                    ],
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          name: 'pos',
                          nodeType: 'YulIdentifier',
                          src: '3807:3:5',
                        },
                      ],
                      functionName: {
                        name: 'store_literal_in_memory_017157b9f30962c99190ba4241b1c3fe2697dafa0962ee9996e8b8917ab35c1e',
                        nodeType: 'YulIdentifier',
                        src: '3718:88:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '3718:93:5',
                    },
                    nodeType: 'YulExpressionStatement',
                    src: '3718:93:5',
                  },
                  {
                    nodeType: 'YulAssignment',
                    src: '3820:19:5',
                    value: {
                      arguments: [
                        {
                          name: 'pos',
                          nodeType: 'YulIdentifier',
                          src: '3831:3:5',
                        },
                        {
                          kind: 'number',
                          nodeType: 'YulLiteral',
                          src: '3836:2:5',
                          type: '',
                          value: '64',
                        },
                      ],
                      functionName: {
                        name: 'add',
                        nodeType: 'YulIdentifier',
                        src: '3827:3:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '3827:12:5',
                    },
                    variableNames: [
                      {
                        name: 'end',
                        nodeType: 'YulIdentifier',
                        src: '3820:3:5',
                      },
                    ],
                  },
                ],
              },
              name: 'abi_encode_t_stringliteral_017157b9f30962c99190ba4241b1c3fe2697dafa0962ee9996e8b8917ab35c1e_to_t_string_memory_ptr_fromStack',
              nodeType: 'YulFunctionDefinition',
              parameters: [
                {
                  name: 'pos',
                  nodeType: 'YulTypedName',
                  src: '3613:3:5',
                  type: '',
                },
              ],
              returnVariables: [
                {
                  name: 'end',
                  nodeType: 'YulTypedName',
                  src: '3621:3:5',
                  type: '',
                },
              ],
              src: '3479:366:5',
            },
            {
              body: {
                nodeType: 'YulBlock',
                src: '4022:248:5',
                statements: [
                  {
                    nodeType: 'YulAssignment',
                    src: '4032:26:5',
                    value: {
                      arguments: [
                        {
                          name: 'headStart',
                          nodeType: 'YulIdentifier',
                          src: '4044:9:5',
                        },
                        {
                          kind: 'number',
                          nodeType: 'YulLiteral',
                          src: '4055:2:5',
                          type: '',
                          value: '32',
                        },
                      ],
                      functionName: {
                        name: 'add',
                        nodeType: 'YulIdentifier',
                        src: '4040:3:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '4040:18:5',
                    },
                    variableNames: [
                      {
                        name: 'tail',
                        nodeType: 'YulIdentifier',
                        src: '4032:4:5',
                      },
                    ],
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          arguments: [
                            {
                              name: 'headStart',
                              nodeType: 'YulIdentifier',
                              src: '4079:9:5',
                            },
                            {
                              kind: 'number',
                              nodeType: 'YulLiteral',
                              src: '4090:1:5',
                              type: '',
                              value: '0',
                            },
                          ],
                          functionName: {
                            name: 'add',
                            nodeType: 'YulIdentifier',
                            src: '4075:3:5',
                          },
                          nodeType: 'YulFunctionCall',
                          src: '4075:17:5',
                        },
                        {
                          arguments: [
                            {
                              name: 'tail',
                              nodeType: 'YulIdentifier',
                              src: '4098:4:5',
                            },
                            {
                              name: 'headStart',
                              nodeType: 'YulIdentifier',
                              src: '4104:9:5',
                            },
                          ],
                          functionName: {
                            name: 'sub',
                            nodeType: 'YulIdentifier',
                            src: '4094:3:5',
                          },
                          nodeType: 'YulFunctionCall',
                          src: '4094:20:5',
                        },
                      ],
                      functionName: {
                        name: 'mstore',
                        nodeType: 'YulIdentifier',
                        src: '4068:6:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '4068:47:5',
                    },
                    nodeType: 'YulExpressionStatement',
                    src: '4068:47:5',
                  },
                  {
                    nodeType: 'YulAssignment',
                    src: '4124:139:5',
                    value: {
                      arguments: [
                        {
                          name: 'tail',
                          nodeType: 'YulIdentifier',
                          src: '4258:4:5',
                        },
                      ],
                      functionName: {
                        name: 'abi_encode_t_stringliteral_017157b9f30962c99190ba4241b1c3fe2697dafa0962ee9996e8b8917ab35c1e_to_t_string_memory_ptr_fromStack',
                        nodeType: 'YulIdentifier',
                        src: '4132:124:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '4132:131:5',
                    },
                    variableNames: [
                      {
                        name: 'tail',
                        nodeType: 'YulIdentifier',
                        src: '4124:4:5',
                      },
                    ],
                  },
                ],
              },
              name: 'abi_encode_tuple_t_stringliteral_017157b9f30962c99190ba4241b1c3fe2697dafa0962ee9996e8b8917ab35c1e__to_t_string_memory_ptr__fromStack_reversed',
              nodeType: 'YulFunctionDefinition',
              parameters: [
                {
                  name: 'headStart',
                  nodeType: 'YulTypedName',
                  src: '4002:9:5',
                  type: '',
                },
              ],
              returnVariables: [
                {
                  name: 'tail',
                  nodeType: 'YulTypedName',
                  src: '4017:4:5',
                  type: '',
                },
              ],
              src: '3851:419:5',
            },
            {
              body: {
                nodeType: 'YulBlock',
                src: '4382:115:5',
                statements: [
                  {
                    expression: {
                      arguments: [
                        {
                          arguments: [
                            {
                              name: 'memPtr',
                              nodeType: 'YulIdentifier',
                              src: '4404:6:5',
                            },
                            {
                              kind: 'number',
                              nodeType: 'YulLiteral',
                              src: '4412:1:5',
                              type: '',
                              value: '0',
                            },
                          ],
                          functionName: {
                            name: 'add',
                            nodeType: 'YulIdentifier',
                            src: '4400:3:5',
                          },
                          nodeType: 'YulFunctionCall',
                          src: '4400:14:5',
                        },
                        {
                          hexValue:
                            '496e636f727265637420736964652c206e6565647320746f2062652030206f72',
                          kind: 'string',
                          nodeType: 'YulLiteral',
                          src: '4416:34:5',
                          type: '',
                          value: 'Incorrect side, needs to be 0 or',
                        },
                      ],
                      functionName: {
                        name: 'mstore',
                        nodeType: 'YulIdentifier',
                        src: '4393:6:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '4393:58:5',
                    },
                    nodeType: 'YulExpressionStatement',
                    src: '4393:58:5',
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          arguments: [
                            {
                              name: 'memPtr',
                              nodeType: 'YulIdentifier',
                              src: '4472:6:5',
                            },
                            {
                              kind: 'number',
                              nodeType: 'YulLiteral',
                              src: '4480:2:5',
                              type: '',
                              value: '32',
                            },
                          ],
                          functionName: {
                            name: 'add',
                            nodeType: 'YulIdentifier',
                            src: '4468:3:5',
                          },
                          nodeType: 'YulFunctionCall',
                          src: '4468:15:5',
                        },
                        {
                          hexValue: '2031',
                          kind: 'string',
                          nodeType: 'YulLiteral',
                          src: '4485:4:5',
                          type: '',
                          value: ' 1',
                        },
                      ],
                      functionName: {
                        name: 'mstore',
                        nodeType: 'YulIdentifier',
                        src: '4461:6:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '4461:29:5',
                    },
                    nodeType: 'YulExpressionStatement',
                    src: '4461:29:5',
                  },
                ],
              },
              name: 'store_literal_in_memory_b4ee9d7cf8f32d287665e66a51316dcb6f1dafa3ca81b2857cbee760ca73a43d',
              nodeType: 'YulFunctionDefinition',
              parameters: [
                {
                  name: 'memPtr',
                  nodeType: 'YulTypedName',
                  src: '4374:6:5',
                  type: '',
                },
              ],
              src: '4276:221:5',
            },
            {
              body: {
                nodeType: 'YulBlock',
                src: '4649:220:5',
                statements: [
                  {
                    nodeType: 'YulAssignment',
                    src: '4659:74:5',
                    value: {
                      arguments: [
                        {
                          name: 'pos',
                          nodeType: 'YulIdentifier',
                          src: '4725:3:5',
                        },
                        {
                          kind: 'number',
                          nodeType: 'YulLiteral',
                          src: '4730:2:5',
                          type: '',
                          value: '34',
                        },
                      ],
                      functionName: {
                        name: 'array_storeLengthForEncoding_t_string_memory_ptr_fromStack',
                        nodeType: 'YulIdentifier',
                        src: '4666:58:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '4666:67:5',
                    },
                    variableNames: [
                      {
                        name: 'pos',
                        nodeType: 'YulIdentifier',
                        src: '4659:3:5',
                      },
                    ],
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          name: 'pos',
                          nodeType: 'YulIdentifier',
                          src: '4831:3:5',
                        },
                      ],
                      functionName: {
                        name: 'store_literal_in_memory_b4ee9d7cf8f32d287665e66a51316dcb6f1dafa3ca81b2857cbee760ca73a43d',
                        nodeType: 'YulIdentifier',
                        src: '4742:88:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '4742:93:5',
                    },
                    nodeType: 'YulExpressionStatement',
                    src: '4742:93:5',
                  },
                  {
                    nodeType: 'YulAssignment',
                    src: '4844:19:5',
                    value: {
                      arguments: [
                        {
                          name: 'pos',
                          nodeType: 'YulIdentifier',
                          src: '4855:3:5',
                        },
                        {
                          kind: 'number',
                          nodeType: 'YulLiteral',
                          src: '4860:2:5',
                          type: '',
                          value: '64',
                        },
                      ],
                      functionName: {
                        name: 'add',
                        nodeType: 'YulIdentifier',
                        src: '4851:3:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '4851:12:5',
                    },
                    variableNames: [
                      {
                        name: 'end',
                        nodeType: 'YulIdentifier',
                        src: '4844:3:5',
                      },
                    ],
                  },
                ],
              },
              name: 'abi_encode_t_stringliteral_b4ee9d7cf8f32d287665e66a51316dcb6f1dafa3ca81b2857cbee760ca73a43d_to_t_string_memory_ptr_fromStack',
              nodeType: 'YulFunctionDefinition',
              parameters: [
                {
                  name: 'pos',
                  nodeType: 'YulTypedName',
                  src: '4637:3:5',
                  type: '',
                },
              ],
              returnVariables: [
                {
                  name: 'end',
                  nodeType: 'YulTypedName',
                  src: '4645:3:5',
                  type: '',
                },
              ],
              src: '4503:366:5',
            },
            {
              body: {
                nodeType: 'YulBlock',
                src: '5046:248:5',
                statements: [
                  {
                    nodeType: 'YulAssignment',
                    src: '5056:26:5',
                    value: {
                      arguments: [
                        {
                          name: 'headStart',
                          nodeType: 'YulIdentifier',
                          src: '5068:9:5',
                        },
                        {
                          kind: 'number',
                          nodeType: 'YulLiteral',
                          src: '5079:2:5',
                          type: '',
                          value: '32',
                        },
                      ],
                      functionName: {
                        name: 'add',
                        nodeType: 'YulIdentifier',
                        src: '5064:3:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '5064:18:5',
                    },
                    variableNames: [
                      {
                        name: 'tail',
                        nodeType: 'YulIdentifier',
                        src: '5056:4:5',
                      },
                    ],
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          arguments: [
                            {
                              name: 'headStart',
                              nodeType: 'YulIdentifier',
                              src: '5103:9:5',
                            },
                            {
                              kind: 'number',
                              nodeType: 'YulLiteral',
                              src: '5114:1:5',
                              type: '',
                              value: '0',
                            },
                          ],
                          functionName: {
                            name: 'add',
                            nodeType: 'YulIdentifier',
                            src: '5099:3:5',
                          },
                          nodeType: 'YulFunctionCall',
                          src: '5099:17:5',
                        },
                        {
                          arguments: [
                            {
                              name: 'tail',
                              nodeType: 'YulIdentifier',
                              src: '5122:4:5',
                            },
                            {
                              name: 'headStart',
                              nodeType: 'YulIdentifier',
                              src: '5128:9:5',
                            },
                          ],
                          functionName: {
                            name: 'sub',
                            nodeType: 'YulIdentifier',
                            src: '5118:3:5',
                          },
                          nodeType: 'YulFunctionCall',
                          src: '5118:20:5',
                        },
                      ],
                      functionName: {
                        name: 'mstore',
                        nodeType: 'YulIdentifier',
                        src: '5092:6:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '5092:47:5',
                    },
                    nodeType: 'YulExpressionStatement',
                    src: '5092:47:5',
                  },
                  {
                    nodeType: 'YulAssignment',
                    src: '5148:139:5',
                    value: {
                      arguments: [
                        {
                          name: 'tail',
                          nodeType: 'YulIdentifier',
                          src: '5282:4:5',
                        },
                      ],
                      functionName: {
                        name: 'abi_encode_t_stringliteral_b4ee9d7cf8f32d287665e66a51316dcb6f1dafa3ca81b2857cbee760ca73a43d_to_t_string_memory_ptr_fromStack',
                        nodeType: 'YulIdentifier',
                        src: '5156:124:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '5156:131:5',
                    },
                    variableNames: [
                      {
                        name: 'tail',
                        nodeType: 'YulIdentifier',
                        src: '5148:4:5',
                      },
                    ],
                  },
                ],
              },
              name: 'abi_encode_tuple_t_stringliteral_b4ee9d7cf8f32d287665e66a51316dcb6f1dafa3ca81b2857cbee760ca73a43d__to_t_string_memory_ptr__fromStack_reversed',
              nodeType: 'YulFunctionDefinition',
              parameters: [
                {
                  name: 'headStart',
                  nodeType: 'YulTypedName',
                  src: '5026:9:5',
                  type: '',
                },
              ],
              returnVariables: [
                {
                  name: 'tail',
                  nodeType: 'YulTypedName',
                  src: '5041:4:5',
                  type: '',
                },
              ],
              src: '4875:419:5',
            },
            {
              body: {
                nodeType: 'YulBlock',
                src: '5328:152:5',
                statements: [
                  {
                    expression: {
                      arguments: [
                        {
                          kind: 'number',
                          nodeType: 'YulLiteral',
                          src: '5345:1:5',
                          type: '',
                          value: '0',
                        },
                        {
                          kind: 'number',
                          nodeType: 'YulLiteral',
                          src: '5348:77:5',
                          type: '',
                          value:
                            '35408467139433450592217433187231851964531694900788300625387963629091585785856',
                        },
                      ],
                      functionName: {
                        name: 'mstore',
                        nodeType: 'YulIdentifier',
                        src: '5338:6:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '5338:88:5',
                    },
                    nodeType: 'YulExpressionStatement',
                    src: '5338:88:5',
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          kind: 'number',
                          nodeType: 'YulLiteral',
                          src: '5442:1:5',
                          type: '',
                          value: '4',
                        },
                        {
                          kind: 'number',
                          nodeType: 'YulLiteral',
                          src: '5445:4:5',
                          type: '',
                          value: '0x12',
                        },
                      ],
                      functionName: {
                        name: 'mstore',
                        nodeType: 'YulIdentifier',
                        src: '5435:6:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '5435:15:5',
                    },
                    nodeType: 'YulExpressionStatement',
                    src: '5435:15:5',
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          kind: 'number',
                          nodeType: 'YulLiteral',
                          src: '5466:1:5',
                          type: '',
                          value: '0',
                        },
                        {
                          kind: 'number',
                          nodeType: 'YulLiteral',
                          src: '5469:4:5',
                          type: '',
                          value: '0x24',
                        },
                      ],
                      functionName: {
                        name: 'revert',
                        nodeType: 'YulIdentifier',
                        src: '5459:6:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '5459:15:5',
                    },
                    nodeType: 'YulExpressionStatement',
                    src: '5459:15:5',
                  },
                ],
              },
              name: 'panic_error_0x12',
              nodeType: 'YulFunctionDefinition',
              src: '5300:180:5',
            },
            {
              body: {
                nodeType: 'YulBlock',
                src: '5520:142:5',
                statements: [
                  {
                    nodeType: 'YulAssignment',
                    src: '5530:25:5',
                    value: {
                      arguments: [
                        {
                          name: 'x',
                          nodeType: 'YulIdentifier',
                          src: '5553:1:5',
                        },
                      ],
                      functionName: {
                        name: 'cleanup_t_uint256',
                        nodeType: 'YulIdentifier',
                        src: '5535:17:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '5535:20:5',
                    },
                    variableNames: [
                      {
                        name: 'x',
                        nodeType: 'YulIdentifier',
                        src: '5530:1:5',
                      },
                    ],
                  },
                  {
                    nodeType: 'YulAssignment',
                    src: '5564:25:5',
                    value: {
                      arguments: [
                        {
                          name: 'y',
                          nodeType: 'YulIdentifier',
                          src: '5587:1:5',
                        },
                      ],
                      functionName: {
                        name: 'cleanup_t_uint256',
                        nodeType: 'YulIdentifier',
                        src: '5569:17:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '5569:20:5',
                    },
                    variableNames: [
                      {
                        name: 'y',
                        nodeType: 'YulIdentifier',
                        src: '5564:1:5',
                      },
                    ],
                  },
                  {
                    body: {
                      nodeType: 'YulBlock',
                      src: '5611:22:5',
                      statements: [
                        {
                          expression: {
                            arguments: [],
                            functionName: {
                              name: 'panic_error_0x12',
                              nodeType: 'YulIdentifier',
                              src: '5613:16:5',
                            },
                            nodeType: 'YulFunctionCall',
                            src: '5613:18:5',
                          },
                          nodeType: 'YulExpressionStatement',
                          src: '5613:18:5',
                        },
                      ],
                    },
                    condition: {
                      arguments: [
                        {
                          name: 'y',
                          nodeType: 'YulIdentifier',
                          src: '5608:1:5',
                        },
                      ],
                      functionName: {
                        name: 'iszero',
                        nodeType: 'YulIdentifier',
                        src: '5601:6:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '5601:9:5',
                    },
                    nodeType: 'YulIf',
                    src: '5598:35:5',
                  },
                  {
                    nodeType: 'YulAssignment',
                    src: '5642:14:5',
                    value: {
                      arguments: [
                        {
                          name: 'x',
                          nodeType: 'YulIdentifier',
                          src: '5651:1:5',
                        },
                        {
                          name: 'y',
                          nodeType: 'YulIdentifier',
                          src: '5654:1:5',
                        },
                      ],
                      functionName: {
                        name: 'mod',
                        nodeType: 'YulIdentifier',
                        src: '5647:3:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '5647:9:5',
                    },
                    variableNames: [
                      {
                        name: 'r',
                        nodeType: 'YulIdentifier',
                        src: '5642:1:5',
                      },
                    ],
                  },
                ],
              },
              name: 'mod_t_uint256',
              nodeType: 'YulFunctionDefinition',
              parameters: [
                {
                  name: 'x',
                  nodeType: 'YulTypedName',
                  src: '5509:1:5',
                  type: '',
                },
                {
                  name: 'y',
                  nodeType: 'YulTypedName',
                  src: '5512:1:5',
                  type: '',
                },
              ],
              returnVariables: [
                {
                  name: 'r',
                  nodeType: 'YulTypedName',
                  src: '5518:1:5',
                  type: '',
                },
              ],
              src: '5486:176:5',
            },
            {
              body: {
                nodeType: 'YulBlock',
                src: '5696:152:5',
                statements: [
                  {
                    expression: {
                      arguments: [
                        {
                          kind: 'number',
                          nodeType: 'YulLiteral',
                          src: '5713:1:5',
                          type: '',
                          value: '0',
                        },
                        {
                          kind: 'number',
                          nodeType: 'YulLiteral',
                          src: '5716:77:5',
                          type: '',
                          value:
                            '35408467139433450592217433187231851964531694900788300625387963629091585785856',
                        },
                      ],
                      functionName: {
                        name: 'mstore',
                        nodeType: 'YulIdentifier',
                        src: '5706:6:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '5706:88:5',
                    },
                    nodeType: 'YulExpressionStatement',
                    src: '5706:88:5',
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          kind: 'number',
                          nodeType: 'YulLiteral',
                          src: '5810:1:5',
                          type: '',
                          value: '4',
                        },
                        {
                          kind: 'number',
                          nodeType: 'YulLiteral',
                          src: '5813:4:5',
                          type: '',
                          value: '0x11',
                        },
                      ],
                      functionName: {
                        name: 'mstore',
                        nodeType: 'YulIdentifier',
                        src: '5803:6:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '5803:15:5',
                    },
                    nodeType: 'YulExpressionStatement',
                    src: '5803:15:5',
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          kind: 'number',
                          nodeType: 'YulLiteral',
                          src: '5834:1:5',
                          type: '',
                          value: '0',
                        },
                        {
                          kind: 'number',
                          nodeType: 'YulLiteral',
                          src: '5837:4:5',
                          type: '',
                          value: '0x24',
                        },
                      ],
                      functionName: {
                        name: 'revert',
                        nodeType: 'YulIdentifier',
                        src: '5827:6:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '5827:15:5',
                    },
                    nodeType: 'YulExpressionStatement',
                    src: '5827:15:5',
                  },
                ],
              },
              name: 'panic_error_0x11',
              nodeType: 'YulFunctionDefinition',
              src: '5668:180:5',
            },
            {
              body: {
                nodeType: 'YulBlock',
                src: '5899:146:5',
                statements: [
                  {
                    nodeType: 'YulAssignment',
                    src: '5909:25:5',
                    value: {
                      arguments: [
                        {
                          name: 'x',
                          nodeType: 'YulIdentifier',
                          src: '5932:1:5',
                        },
                      ],
                      functionName: {
                        name: 'cleanup_t_uint256',
                        nodeType: 'YulIdentifier',
                        src: '5914:17:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '5914:20:5',
                    },
                    variableNames: [
                      {
                        name: 'x',
                        nodeType: 'YulIdentifier',
                        src: '5909:1:5',
                      },
                    ],
                  },
                  {
                    nodeType: 'YulAssignment',
                    src: '5943:25:5',
                    value: {
                      arguments: [
                        {
                          name: 'y',
                          nodeType: 'YulIdentifier',
                          src: '5966:1:5',
                        },
                      ],
                      functionName: {
                        name: 'cleanup_t_uint256',
                        nodeType: 'YulIdentifier',
                        src: '5948:17:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '5948:20:5',
                    },
                    variableNames: [
                      {
                        name: 'y',
                        nodeType: 'YulIdentifier',
                        src: '5943:1:5',
                      },
                    ],
                  },
                  {
                    body: {
                      nodeType: 'YulBlock',
                      src: '5990:22:5',
                      statements: [
                        {
                          expression: {
                            arguments: [],
                            functionName: {
                              name: 'panic_error_0x11',
                              nodeType: 'YulIdentifier',
                              src: '5992:16:5',
                            },
                            nodeType: 'YulFunctionCall',
                            src: '5992:18:5',
                          },
                          nodeType: 'YulExpressionStatement',
                          src: '5992:18:5',
                        },
                      ],
                    },
                    condition: {
                      arguments: [
                        {
                          name: 'x',
                          nodeType: 'YulIdentifier',
                          src: '5984:1:5',
                        },
                        {
                          name: 'y',
                          nodeType: 'YulIdentifier',
                          src: '5987:1:5',
                        },
                      ],
                      functionName: {
                        name: 'lt',
                        nodeType: 'YulIdentifier',
                        src: '5981:2:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '5981:8:5',
                    },
                    nodeType: 'YulIf',
                    src: '5978:34:5',
                  },
                  {
                    nodeType: 'YulAssignment',
                    src: '6022:17:5',
                    value: {
                      arguments: [
                        {
                          name: 'x',
                          nodeType: 'YulIdentifier',
                          src: '6034:1:5',
                        },
                        {
                          name: 'y',
                          nodeType: 'YulIdentifier',
                          src: '6037:1:5',
                        },
                      ],
                      functionName: {
                        name: 'sub',
                        nodeType: 'YulIdentifier',
                        src: '6030:3:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '6030:9:5',
                    },
                    variableNames: [
                      {
                        name: 'diff',
                        nodeType: 'YulIdentifier',
                        src: '6022:4:5',
                      },
                    ],
                  },
                ],
              },
              name: 'checked_sub_t_uint256',
              nodeType: 'YulFunctionDefinition',
              parameters: [
                {
                  name: 'x',
                  nodeType: 'YulTypedName',
                  src: '5885:1:5',
                  type: '',
                },
                {
                  name: 'y',
                  nodeType: 'YulTypedName',
                  src: '5888:1:5',
                  type: '',
                },
              ],
              returnVariables: [
                {
                  name: 'diff',
                  nodeType: 'YulTypedName',
                  src: '5894:4:5',
                  type: '',
                },
              ],
              src: '5854:191:5',
            },
            {
              body: {
                nodeType: 'YulBlock',
                src: '6099:300:5',
                statements: [
                  {
                    nodeType: 'YulAssignment',
                    src: '6109:25:5',
                    value: {
                      arguments: [
                        {
                          name: 'x',
                          nodeType: 'YulIdentifier',
                          src: '6132:1:5',
                        },
                      ],
                      functionName: {
                        name: 'cleanup_t_uint256',
                        nodeType: 'YulIdentifier',
                        src: '6114:17:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '6114:20:5',
                    },
                    variableNames: [
                      {
                        name: 'x',
                        nodeType: 'YulIdentifier',
                        src: '6109:1:5',
                      },
                    ],
                  },
                  {
                    nodeType: 'YulAssignment',
                    src: '6143:25:5',
                    value: {
                      arguments: [
                        {
                          name: 'y',
                          nodeType: 'YulIdentifier',
                          src: '6166:1:5',
                        },
                      ],
                      functionName: {
                        name: 'cleanup_t_uint256',
                        nodeType: 'YulIdentifier',
                        src: '6148:17:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '6148:20:5',
                    },
                    variableNames: [
                      {
                        name: 'y',
                        nodeType: 'YulIdentifier',
                        src: '6143:1:5',
                      },
                    ],
                  },
                  {
                    body: {
                      nodeType: 'YulBlock',
                      src: '6341:22:5',
                      statements: [
                        {
                          expression: {
                            arguments: [],
                            functionName: {
                              name: 'panic_error_0x11',
                              nodeType: 'YulIdentifier',
                              src: '6343:16:5',
                            },
                            nodeType: 'YulFunctionCall',
                            src: '6343:18:5',
                          },
                          nodeType: 'YulExpressionStatement',
                          src: '6343:18:5',
                        },
                      ],
                    },
                    condition: {
                      arguments: [
                        {
                          arguments: [
                            {
                              arguments: [
                                {
                                  name: 'x',
                                  nodeType: 'YulIdentifier',
                                  src: '6253:1:5',
                                },
                              ],
                              functionName: {
                                name: 'iszero',
                                nodeType: 'YulIdentifier',
                                src: '6246:6:5',
                              },
                              nodeType: 'YulFunctionCall',
                              src: '6246:9:5',
                            },
                          ],
                          functionName: {
                            name: 'iszero',
                            nodeType: 'YulIdentifier',
                            src: '6239:6:5',
                          },
                          nodeType: 'YulFunctionCall',
                          src: '6239:17:5',
                        },
                        {
                          arguments: [
                            {
                              name: 'y',
                              nodeType: 'YulIdentifier',
                              src: '6261:1:5',
                            },
                            {
                              arguments: [
                                {
                                  kind: 'number',
                                  nodeType: 'YulLiteral',
                                  src: '6268:66:5',
                                  type: '',
                                  value:
                                    '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
                                },
                                {
                                  name: 'x',
                                  nodeType: 'YulIdentifier',
                                  src: '6336:1:5',
                                },
                              ],
                              functionName: {
                                name: 'div',
                                nodeType: 'YulIdentifier',
                                src: '6264:3:5',
                              },
                              nodeType: 'YulFunctionCall',
                              src: '6264:74:5',
                            },
                          ],
                          functionName: {
                            name: 'gt',
                            nodeType: 'YulIdentifier',
                            src: '6258:2:5',
                          },
                          nodeType: 'YulFunctionCall',
                          src: '6258:81:5',
                        },
                      ],
                      functionName: {
                        name: 'and',
                        nodeType: 'YulIdentifier',
                        src: '6235:3:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '6235:105:5',
                    },
                    nodeType: 'YulIf',
                    src: '6232:131:5',
                  },
                  {
                    nodeType: 'YulAssignment',
                    src: '6373:20:5',
                    value: {
                      arguments: [
                        {
                          name: 'x',
                          nodeType: 'YulIdentifier',
                          src: '6388:1:5',
                        },
                        {
                          name: 'y',
                          nodeType: 'YulIdentifier',
                          src: '6391:1:5',
                        },
                      ],
                      functionName: {
                        name: 'mul',
                        nodeType: 'YulIdentifier',
                        src: '6384:3:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '6384:9:5',
                    },
                    variableNames: [
                      {
                        name: 'product',
                        nodeType: 'YulIdentifier',
                        src: '6373:7:5',
                      },
                    ],
                  },
                ],
              },
              name: 'checked_mul_t_uint256',
              nodeType: 'YulFunctionDefinition',
              parameters: [
                {
                  name: 'x',
                  nodeType: 'YulTypedName',
                  src: '6082:1:5',
                  type: '',
                },
                {
                  name: 'y',
                  nodeType: 'YulTypedName',
                  src: '6085:1:5',
                  type: '',
                },
              ],
              returnVariables: [
                {
                  name: 'product',
                  nodeType: 'YulTypedName',
                  src: '6091:7:5',
                  type: '',
                },
              ],
              src: '6051:348:5',
            },
            {
              body: {
                nodeType: 'YulBlock',
                src: '6449:261:5',
                statements: [
                  {
                    nodeType: 'YulAssignment',
                    src: '6459:25:5',
                    value: {
                      arguments: [
                        {
                          name: 'x',
                          nodeType: 'YulIdentifier',
                          src: '6482:1:5',
                        },
                      ],
                      functionName: {
                        name: 'cleanup_t_uint256',
                        nodeType: 'YulIdentifier',
                        src: '6464:17:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '6464:20:5',
                    },
                    variableNames: [
                      {
                        name: 'x',
                        nodeType: 'YulIdentifier',
                        src: '6459:1:5',
                      },
                    ],
                  },
                  {
                    nodeType: 'YulAssignment',
                    src: '6493:25:5',
                    value: {
                      arguments: [
                        {
                          name: 'y',
                          nodeType: 'YulIdentifier',
                          src: '6516:1:5',
                        },
                      ],
                      functionName: {
                        name: 'cleanup_t_uint256',
                        nodeType: 'YulIdentifier',
                        src: '6498:17:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '6498:20:5',
                    },
                    variableNames: [
                      {
                        name: 'y',
                        nodeType: 'YulIdentifier',
                        src: '6493:1:5',
                      },
                    ],
                  },
                  {
                    body: {
                      nodeType: 'YulBlock',
                      src: '6656:22:5',
                      statements: [
                        {
                          expression: {
                            arguments: [],
                            functionName: {
                              name: 'panic_error_0x11',
                              nodeType: 'YulIdentifier',
                              src: '6658:16:5',
                            },
                            nodeType: 'YulFunctionCall',
                            src: '6658:18:5',
                          },
                          nodeType: 'YulExpressionStatement',
                          src: '6658:18:5',
                        },
                      ],
                    },
                    condition: {
                      arguments: [
                        {
                          name: 'x',
                          nodeType: 'YulIdentifier',
                          src: '6577:1:5',
                        },
                        {
                          arguments: [
                            {
                              kind: 'number',
                              nodeType: 'YulLiteral',
                              src: '6584:66:5',
                              type: '',
                              value:
                                '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
                            },
                            {
                              name: 'y',
                              nodeType: 'YulIdentifier',
                              src: '6652:1:5',
                            },
                          ],
                          functionName: {
                            name: 'sub',
                            nodeType: 'YulIdentifier',
                            src: '6580:3:5',
                          },
                          nodeType: 'YulFunctionCall',
                          src: '6580:74:5',
                        },
                      ],
                      functionName: {
                        name: 'gt',
                        nodeType: 'YulIdentifier',
                        src: '6574:2:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '6574:81:5',
                    },
                    nodeType: 'YulIf',
                    src: '6571:107:5',
                  },
                  {
                    nodeType: 'YulAssignment',
                    src: '6688:16:5',
                    value: {
                      arguments: [
                        {
                          name: 'x',
                          nodeType: 'YulIdentifier',
                          src: '6699:1:5',
                        },
                        {
                          name: 'y',
                          nodeType: 'YulIdentifier',
                          src: '6702:1:5',
                        },
                      ],
                      functionName: {
                        name: 'add',
                        nodeType: 'YulIdentifier',
                        src: '6695:3:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '6695:9:5',
                    },
                    variableNames: [
                      {
                        name: 'sum',
                        nodeType: 'YulIdentifier',
                        src: '6688:3:5',
                      },
                    ],
                  },
                ],
              },
              name: 'checked_add_t_uint256',
              nodeType: 'YulFunctionDefinition',
              parameters: [
                {
                  name: 'x',
                  nodeType: 'YulTypedName',
                  src: '6436:1:5',
                  type: '',
                },
                {
                  name: 'y',
                  nodeType: 'YulTypedName',
                  src: '6439:1:5',
                  type: '',
                },
              ],
              returnVariables: [
                {
                  name: 'sum',
                  nodeType: 'YulTypedName',
                  src: '6445:3:5',
                  type: '',
                },
              ],
              src: '6405:305:5',
            },
            {
              body: {
                nodeType: 'YulBlock',
                src: '6777:51:5',
                statements: [
                  {
                    expression: {
                      arguments: [
                        {
                          name: 'pos',
                          nodeType: 'YulIdentifier',
                          src: '6794:3:5',
                        },
                        {
                          arguments: [
                            {
                              name: 'value',
                              nodeType: 'YulIdentifier',
                              src: '6815:5:5',
                            },
                          ],
                          functionName: {
                            name: 'cleanup_t_uint8',
                            nodeType: 'YulIdentifier',
                            src: '6799:15:5',
                          },
                          nodeType: 'YulFunctionCall',
                          src: '6799:22:5',
                        },
                      ],
                      functionName: {
                        name: 'mstore',
                        nodeType: 'YulIdentifier',
                        src: '6787:6:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '6787:35:5',
                    },
                    nodeType: 'YulExpressionStatement',
                    src: '6787:35:5',
                  },
                ],
              },
              name: 'abi_encode_t_uint8_to_t_uint8_fromStack',
              nodeType: 'YulFunctionDefinition',
              parameters: [
                {
                  name: 'value',
                  nodeType: 'YulTypedName',
                  src: '6765:5:5',
                  type: '',
                },
                {
                  name: 'pos',
                  nodeType: 'YulTypedName',
                  src: '6772:3:5',
                  type: '',
                },
              ],
              src: '6716:112:5',
            },
            {
              body: {
                nodeType: 'YulBlock',
                src: '6928:120:5',
                statements: [
                  {
                    nodeType: 'YulAssignment',
                    src: '6938:26:5',
                    value: {
                      arguments: [
                        {
                          name: 'headStart',
                          nodeType: 'YulIdentifier',
                          src: '6950:9:5',
                        },
                        {
                          kind: 'number',
                          nodeType: 'YulLiteral',
                          src: '6961:2:5',
                          type: '',
                          value: '32',
                        },
                      ],
                      functionName: {
                        name: 'add',
                        nodeType: 'YulIdentifier',
                        src: '6946:3:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '6946:18:5',
                    },
                    variableNames: [
                      {
                        name: 'tail',
                        nodeType: 'YulIdentifier',
                        src: '6938:4:5',
                      },
                    ],
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          name: 'value0',
                          nodeType: 'YulIdentifier',
                          src: '7014:6:5',
                        },
                        {
                          arguments: [
                            {
                              name: 'headStart',
                              nodeType: 'YulIdentifier',
                              src: '7027:9:5',
                            },
                            {
                              kind: 'number',
                              nodeType: 'YulLiteral',
                              src: '7038:1:5',
                              type: '',
                              value: '0',
                            },
                          ],
                          functionName: {
                            name: 'add',
                            nodeType: 'YulIdentifier',
                            src: '7023:3:5',
                          },
                          nodeType: 'YulFunctionCall',
                          src: '7023:17:5',
                        },
                      ],
                      functionName: {
                        name: 'abi_encode_t_uint8_to_t_uint8_fromStack',
                        nodeType: 'YulIdentifier',
                        src: '6974:39:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '6974:67:5',
                    },
                    nodeType: 'YulExpressionStatement',
                    src: '6974:67:5',
                  },
                ],
              },
              name: 'abi_encode_tuple_t_uint8__to_t_uint8__fromStack_reversed',
              nodeType: 'YulFunctionDefinition',
              parameters: [
                {
                  name: 'headStart',
                  nodeType: 'YulTypedName',
                  src: '6900:9:5',
                  type: '',
                },
                {
                  name: 'value0',
                  nodeType: 'YulTypedName',
                  src: '6912:6:5',
                  type: '',
                },
              ],
              returnVariables: [
                {
                  name: 'tail',
                  nodeType: 'YulTypedName',
                  src: '6923:4:5',
                  type: '',
                },
              ],
              src: '6834:214:5',
            },
            {
              body: {
                nodeType: 'YulBlock',
                src: '7160:76:5',
                statements: [
                  {
                    expression: {
                      arguments: [
                        {
                          arguments: [
                            {
                              name: 'memPtr',
                              nodeType: 'YulIdentifier',
                              src: '7182:6:5',
                            },
                            {
                              kind: 'number',
                              nodeType: 'YulLiteral',
                              src: '7190:1:5',
                              type: '',
                              value: '0',
                            },
                          ],
                          functionName: {
                            name: 'add',
                            nodeType: 'YulIdentifier',
                            src: '7178:3:5',
                          },
                          nodeType: 'YulFunctionCall',
                          src: '7178:14:5',
                        },
                        {
                          hexValue:
                            '4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572',
                          kind: 'string',
                          nodeType: 'YulLiteral',
                          src: '7194:34:5',
                          type: '',
                          value: 'Ownable: caller is not the owner',
                        },
                      ],
                      functionName: {
                        name: 'mstore',
                        nodeType: 'YulIdentifier',
                        src: '7171:6:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '7171:58:5',
                    },
                    nodeType: 'YulExpressionStatement',
                    src: '7171:58:5',
                  },
                ],
              },
              name: 'store_literal_in_memory_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe',
              nodeType: 'YulFunctionDefinition',
              parameters: [
                {
                  name: 'memPtr',
                  nodeType: 'YulTypedName',
                  src: '7152:6:5',
                  type: '',
                },
              ],
              src: '7054:182:5',
            },
            {
              body: {
                nodeType: 'YulBlock',
                src: '7388:220:5',
                statements: [
                  {
                    nodeType: 'YulAssignment',
                    src: '7398:74:5',
                    value: {
                      arguments: [
                        {
                          name: 'pos',
                          nodeType: 'YulIdentifier',
                          src: '7464:3:5',
                        },
                        {
                          kind: 'number',
                          nodeType: 'YulLiteral',
                          src: '7469:2:5',
                          type: '',
                          value: '32',
                        },
                      ],
                      functionName: {
                        name: 'array_storeLengthForEncoding_t_string_memory_ptr_fromStack',
                        nodeType: 'YulIdentifier',
                        src: '7405:58:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '7405:67:5',
                    },
                    variableNames: [
                      {
                        name: 'pos',
                        nodeType: 'YulIdentifier',
                        src: '7398:3:5',
                      },
                    ],
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          name: 'pos',
                          nodeType: 'YulIdentifier',
                          src: '7570:3:5',
                        },
                      ],
                      functionName: {
                        name: 'store_literal_in_memory_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe',
                        nodeType: 'YulIdentifier',
                        src: '7481:88:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '7481:93:5',
                    },
                    nodeType: 'YulExpressionStatement',
                    src: '7481:93:5',
                  },
                  {
                    nodeType: 'YulAssignment',
                    src: '7583:19:5',
                    value: {
                      arguments: [
                        {
                          name: 'pos',
                          nodeType: 'YulIdentifier',
                          src: '7594:3:5',
                        },
                        {
                          kind: 'number',
                          nodeType: 'YulLiteral',
                          src: '7599:2:5',
                          type: '',
                          value: '32',
                        },
                      ],
                      functionName: {
                        name: 'add',
                        nodeType: 'YulIdentifier',
                        src: '7590:3:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '7590:12:5',
                    },
                    variableNames: [
                      {
                        name: 'end',
                        nodeType: 'YulIdentifier',
                        src: '7583:3:5',
                      },
                    ],
                  },
                ],
              },
              name: 'abi_encode_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe_to_t_string_memory_ptr_fromStack',
              nodeType: 'YulFunctionDefinition',
              parameters: [
                {
                  name: 'pos',
                  nodeType: 'YulTypedName',
                  src: '7376:3:5',
                  type: '',
                },
              ],
              returnVariables: [
                {
                  name: 'end',
                  nodeType: 'YulTypedName',
                  src: '7384:3:5',
                  type: '',
                },
              ],
              src: '7242:366:5',
            },
            {
              body: {
                nodeType: 'YulBlock',
                src: '7785:248:5',
                statements: [
                  {
                    nodeType: 'YulAssignment',
                    src: '7795:26:5',
                    value: {
                      arguments: [
                        {
                          name: 'headStart',
                          nodeType: 'YulIdentifier',
                          src: '7807:9:5',
                        },
                        {
                          kind: 'number',
                          nodeType: 'YulLiteral',
                          src: '7818:2:5',
                          type: '',
                          value: '32',
                        },
                      ],
                      functionName: {
                        name: 'add',
                        nodeType: 'YulIdentifier',
                        src: '7803:3:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '7803:18:5',
                    },
                    variableNames: [
                      {
                        name: 'tail',
                        nodeType: 'YulIdentifier',
                        src: '7795:4:5',
                      },
                    ],
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          arguments: [
                            {
                              name: 'headStart',
                              nodeType: 'YulIdentifier',
                              src: '7842:9:5',
                            },
                            {
                              kind: 'number',
                              nodeType: 'YulLiteral',
                              src: '7853:1:5',
                              type: '',
                              value: '0',
                            },
                          ],
                          functionName: {
                            name: 'add',
                            nodeType: 'YulIdentifier',
                            src: '7838:3:5',
                          },
                          nodeType: 'YulFunctionCall',
                          src: '7838:17:5',
                        },
                        {
                          arguments: [
                            {
                              name: 'tail',
                              nodeType: 'YulIdentifier',
                              src: '7861:4:5',
                            },
                            {
                              name: 'headStart',
                              nodeType: 'YulIdentifier',
                              src: '7867:9:5',
                            },
                          ],
                          functionName: {
                            name: 'sub',
                            nodeType: 'YulIdentifier',
                            src: '7857:3:5',
                          },
                          nodeType: 'YulFunctionCall',
                          src: '7857:20:5',
                        },
                      ],
                      functionName: {
                        name: 'mstore',
                        nodeType: 'YulIdentifier',
                        src: '7831:6:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '7831:47:5',
                    },
                    nodeType: 'YulExpressionStatement',
                    src: '7831:47:5',
                  },
                  {
                    nodeType: 'YulAssignment',
                    src: '7887:139:5',
                    value: {
                      arguments: [
                        {
                          name: 'tail',
                          nodeType: 'YulIdentifier',
                          src: '8021:4:5',
                        },
                      ],
                      functionName: {
                        name: 'abi_encode_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe_to_t_string_memory_ptr_fromStack',
                        nodeType: 'YulIdentifier',
                        src: '7895:124:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '7895:131:5',
                    },
                    variableNames: [
                      {
                        name: 'tail',
                        nodeType: 'YulIdentifier',
                        src: '7887:4:5',
                      },
                    ],
                  },
                ],
              },
              name: 'abi_encode_tuple_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe__to_t_string_memory_ptr__fromStack_reversed',
              nodeType: 'YulFunctionDefinition',
              parameters: [
                {
                  name: 'headStart',
                  nodeType: 'YulTypedName',
                  src: '7765:9:5',
                  type: '',
                },
              ],
              returnVariables: [
                {
                  name: 'tail',
                  nodeType: 'YulTypedName',
                  src: '7780:4:5',
                  type: '',
                },
              ],
              src: '7614:419:5',
            },
            {
              body: {
                nodeType: 'YulBlock',
                src: '8067:152:5',
                statements: [
                  {
                    expression: {
                      arguments: [
                        {
                          kind: 'number',
                          nodeType: 'YulLiteral',
                          src: '8084:1:5',
                          type: '',
                          value: '0',
                        },
                        {
                          kind: 'number',
                          nodeType: 'YulLiteral',
                          src: '8087:77:5',
                          type: '',
                          value:
                            '35408467139433450592217433187231851964531694900788300625387963629091585785856',
                        },
                      ],
                      functionName: {
                        name: 'mstore',
                        nodeType: 'YulIdentifier',
                        src: '8077:6:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '8077:88:5',
                    },
                    nodeType: 'YulExpressionStatement',
                    src: '8077:88:5',
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          kind: 'number',
                          nodeType: 'YulLiteral',
                          src: '8181:1:5',
                          type: '',
                          value: '4',
                        },
                        {
                          kind: 'number',
                          nodeType: 'YulLiteral',
                          src: '8184:4:5',
                          type: '',
                          value: '0x01',
                        },
                      ],
                      functionName: {
                        name: 'mstore',
                        nodeType: 'YulIdentifier',
                        src: '8174:6:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '8174:15:5',
                    },
                    nodeType: 'YulExpressionStatement',
                    src: '8174:15:5',
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          kind: 'number',
                          nodeType: 'YulLiteral',
                          src: '8205:1:5',
                          type: '',
                          value: '0',
                        },
                        {
                          kind: 'number',
                          nodeType: 'YulLiteral',
                          src: '8208:4:5',
                          type: '',
                          value: '0x24',
                        },
                      ],
                      functionName: {
                        name: 'revert',
                        nodeType: 'YulIdentifier',
                        src: '8198:6:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '8198:15:5',
                    },
                    nodeType: 'YulExpressionStatement',
                    src: '8198:15:5',
                  },
                ],
              },
              name: 'panic_error_0x01',
              nodeType: 'YulFunctionDefinition',
              src: '8039:180:5',
            },
            {
              body: {
                nodeType: 'YulBlock',
                src: '8351:206:5',
                statements: [
                  {
                    nodeType: 'YulAssignment',
                    src: '8361:26:5',
                    value: {
                      arguments: [
                        {
                          name: 'headStart',
                          nodeType: 'YulIdentifier',
                          src: '8373:9:5',
                        },
                        {
                          kind: 'number',
                          nodeType: 'YulLiteral',
                          src: '8384:2:5',
                          type: '',
                          value: '64',
                        },
                      ],
                      functionName: {
                        name: 'add',
                        nodeType: 'YulIdentifier',
                        src: '8369:3:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '8369:18:5',
                    },
                    variableNames: [
                      {
                        name: 'tail',
                        nodeType: 'YulIdentifier',
                        src: '8361:4:5',
                      },
                    ],
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          name: 'value0',
                          nodeType: 'YulIdentifier',
                          src: '8441:6:5',
                        },
                        {
                          arguments: [
                            {
                              name: 'headStart',
                              nodeType: 'YulIdentifier',
                              src: '8454:9:5',
                            },
                            {
                              kind: 'number',
                              nodeType: 'YulLiteral',
                              src: '8465:1:5',
                              type: '',
                              value: '0',
                            },
                          ],
                          functionName: {
                            name: 'add',
                            nodeType: 'YulIdentifier',
                            src: '8450:3:5',
                          },
                          nodeType: 'YulFunctionCall',
                          src: '8450:17:5',
                        },
                      ],
                      functionName: {
                        name: 'abi_encode_t_address_to_t_address_fromStack',
                        nodeType: 'YulIdentifier',
                        src: '8397:43:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '8397:71:5',
                    },
                    nodeType: 'YulExpressionStatement',
                    src: '8397:71:5',
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          name: 'value1',
                          nodeType: 'YulIdentifier',
                          src: '8522:6:5',
                        },
                        {
                          arguments: [
                            {
                              name: 'headStart',
                              nodeType: 'YulIdentifier',
                              src: '8535:9:5',
                            },
                            {
                              kind: 'number',
                              nodeType: 'YulLiteral',
                              src: '8546:2:5',
                              type: '',
                              value: '32',
                            },
                          ],
                          functionName: {
                            name: 'add',
                            nodeType: 'YulIdentifier',
                            src: '8531:3:5',
                          },
                          nodeType: 'YulFunctionCall',
                          src: '8531:18:5',
                        },
                      ],
                      functionName: {
                        name: 'abi_encode_t_uint256_to_t_uint256_fromStack',
                        nodeType: 'YulIdentifier',
                        src: '8478:43:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '8478:72:5',
                    },
                    nodeType: 'YulExpressionStatement',
                    src: '8478:72:5',
                  },
                ],
              },
              name: 'abi_encode_tuple_t_address_t_uint256__to_t_address_t_uint256__fromStack_reversed',
              nodeType: 'YulFunctionDefinition',
              parameters: [
                {
                  name: 'headStart',
                  nodeType: 'YulTypedName',
                  src: '8315:9:5',
                  type: '',
                },
                {
                  name: 'value1',
                  nodeType: 'YulTypedName',
                  src: '8327:6:5',
                  type: '',
                },
                {
                  name: 'value0',
                  nodeType: 'YulTypedName',
                  src: '8335:6:5',
                  type: '',
                },
              ],
              returnVariables: [
                {
                  name: 'tail',
                  nodeType: 'YulTypedName',
                  src: '8346:4:5',
                  type: '',
                },
              ],
              src: '8225:332:5',
            },
            {
              body: {
                nodeType: 'YulBlock',
                src: '8669:119:5',
                statements: [
                  {
                    expression: {
                      arguments: [
                        {
                          arguments: [
                            {
                              name: 'memPtr',
                              nodeType: 'YulIdentifier',
                              src: '8691:6:5',
                            },
                            {
                              kind: 'number',
                              nodeType: 'YulLiteral',
                              src: '8699:1:5',
                              type: '',
                              value: '0',
                            },
                          ],
                          functionName: {
                            name: 'add',
                            nodeType: 'YulIdentifier',
                            src: '8687:3:5',
                          },
                          nodeType: 'YulFunctionCall',
                          src: '8687:14:5',
                        },
                        {
                          hexValue:
                            '4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061',
                          kind: 'string',
                          nodeType: 'YulLiteral',
                          src: '8703:34:5',
                          type: '',
                          value: 'Ownable: new owner is the zero a',
                        },
                      ],
                      functionName: {
                        name: 'mstore',
                        nodeType: 'YulIdentifier',
                        src: '8680:6:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '8680:58:5',
                    },
                    nodeType: 'YulExpressionStatement',
                    src: '8680:58:5',
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          arguments: [
                            {
                              name: 'memPtr',
                              nodeType: 'YulIdentifier',
                              src: '8759:6:5',
                            },
                            {
                              kind: 'number',
                              nodeType: 'YulLiteral',
                              src: '8767:2:5',
                              type: '',
                              value: '32',
                            },
                          ],
                          functionName: {
                            name: 'add',
                            nodeType: 'YulIdentifier',
                            src: '8755:3:5',
                          },
                          nodeType: 'YulFunctionCall',
                          src: '8755:15:5',
                        },
                        {
                          hexValue: '646472657373',
                          kind: 'string',
                          nodeType: 'YulLiteral',
                          src: '8772:8:5',
                          type: '',
                          value: 'ddress',
                        },
                      ],
                      functionName: {
                        name: 'mstore',
                        nodeType: 'YulIdentifier',
                        src: '8748:6:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '8748:33:5',
                    },
                    nodeType: 'YulExpressionStatement',
                    src: '8748:33:5',
                  },
                ],
              },
              name: 'store_literal_in_memory_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe',
              nodeType: 'YulFunctionDefinition',
              parameters: [
                {
                  name: 'memPtr',
                  nodeType: 'YulTypedName',
                  src: '8661:6:5',
                  type: '',
                },
              ],
              src: '8563:225:5',
            },
            {
              body: {
                nodeType: 'YulBlock',
                src: '8940:220:5',
                statements: [
                  {
                    nodeType: 'YulAssignment',
                    src: '8950:74:5',
                    value: {
                      arguments: [
                        {
                          name: 'pos',
                          nodeType: 'YulIdentifier',
                          src: '9016:3:5',
                        },
                        {
                          kind: 'number',
                          nodeType: 'YulLiteral',
                          src: '9021:2:5',
                          type: '',
                          value: '38',
                        },
                      ],
                      functionName: {
                        name: 'array_storeLengthForEncoding_t_string_memory_ptr_fromStack',
                        nodeType: 'YulIdentifier',
                        src: '8957:58:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '8957:67:5',
                    },
                    variableNames: [
                      {
                        name: 'pos',
                        nodeType: 'YulIdentifier',
                        src: '8950:3:5',
                      },
                    ],
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          name: 'pos',
                          nodeType: 'YulIdentifier',
                          src: '9122:3:5',
                        },
                      ],
                      functionName: {
                        name: 'store_literal_in_memory_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe',
                        nodeType: 'YulIdentifier',
                        src: '9033:88:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '9033:93:5',
                    },
                    nodeType: 'YulExpressionStatement',
                    src: '9033:93:5',
                  },
                  {
                    nodeType: 'YulAssignment',
                    src: '9135:19:5',
                    value: {
                      arguments: [
                        {
                          name: 'pos',
                          nodeType: 'YulIdentifier',
                          src: '9146:3:5',
                        },
                        {
                          kind: 'number',
                          nodeType: 'YulLiteral',
                          src: '9151:2:5',
                          type: '',
                          value: '64',
                        },
                      ],
                      functionName: {
                        name: 'add',
                        nodeType: 'YulIdentifier',
                        src: '9142:3:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '9142:12:5',
                    },
                    variableNames: [
                      {
                        name: 'end',
                        nodeType: 'YulIdentifier',
                        src: '9135:3:5',
                      },
                    ],
                  },
                ],
              },
              name: 'abi_encode_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe_to_t_string_memory_ptr_fromStack',
              nodeType: 'YulFunctionDefinition',
              parameters: [
                {
                  name: 'pos',
                  nodeType: 'YulTypedName',
                  src: '8928:3:5',
                  type: '',
                },
              ],
              returnVariables: [
                {
                  name: 'end',
                  nodeType: 'YulTypedName',
                  src: '8936:3:5',
                  type: '',
                },
              ],
              src: '8794:366:5',
            },
            {
              body: {
                nodeType: 'YulBlock',
                src: '9337:248:5',
                statements: [
                  {
                    nodeType: 'YulAssignment',
                    src: '9347:26:5',
                    value: {
                      arguments: [
                        {
                          name: 'headStart',
                          nodeType: 'YulIdentifier',
                          src: '9359:9:5',
                        },
                        {
                          kind: 'number',
                          nodeType: 'YulLiteral',
                          src: '9370:2:5',
                          type: '',
                          value: '32',
                        },
                      ],
                      functionName: {
                        name: 'add',
                        nodeType: 'YulIdentifier',
                        src: '9355:3:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '9355:18:5',
                    },
                    variableNames: [
                      {
                        name: 'tail',
                        nodeType: 'YulIdentifier',
                        src: '9347:4:5',
                      },
                    ],
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          arguments: [
                            {
                              name: 'headStart',
                              nodeType: 'YulIdentifier',
                              src: '9394:9:5',
                            },
                            {
                              kind: 'number',
                              nodeType: 'YulLiteral',
                              src: '9405:1:5',
                              type: '',
                              value: '0',
                            },
                          ],
                          functionName: {
                            name: 'add',
                            nodeType: 'YulIdentifier',
                            src: '9390:3:5',
                          },
                          nodeType: 'YulFunctionCall',
                          src: '9390:17:5',
                        },
                        {
                          arguments: [
                            {
                              name: 'tail',
                              nodeType: 'YulIdentifier',
                              src: '9413:4:5',
                            },
                            {
                              name: 'headStart',
                              nodeType: 'YulIdentifier',
                              src: '9419:9:5',
                            },
                          ],
                          functionName: {
                            name: 'sub',
                            nodeType: 'YulIdentifier',
                            src: '9409:3:5',
                          },
                          nodeType: 'YulFunctionCall',
                          src: '9409:20:5',
                        },
                      ],
                      functionName: {
                        name: 'mstore',
                        nodeType: 'YulIdentifier',
                        src: '9383:6:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '9383:47:5',
                    },
                    nodeType: 'YulExpressionStatement',
                    src: '9383:47:5',
                  },
                  {
                    nodeType: 'YulAssignment',
                    src: '9439:139:5',
                    value: {
                      arguments: [
                        {
                          name: 'tail',
                          nodeType: 'YulIdentifier',
                          src: '9573:4:5',
                        },
                      ],
                      functionName: {
                        name: 'abi_encode_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe_to_t_string_memory_ptr_fromStack',
                        nodeType: 'YulIdentifier',
                        src: '9447:124:5',
                      },
                      nodeType: 'YulFunctionCall',
                      src: '9447:131:5',
                    },
                    variableNames: [
                      {
                        name: 'tail',
                        nodeType: 'YulIdentifier',
                        src: '9439:4:5',
                      },
                    ],
                  },
                ],
              },
              name: 'abi_encode_tuple_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe__to_t_string_memory_ptr__fromStack_reversed',
              nodeType: 'YulFunctionDefinition',
              parameters: [
                {
                  name: 'headStart',
                  nodeType: 'YulTypedName',
                  src: '9317:9:5',
                  type: '',
                },
              ],
              returnVariables: [
                {
                  name: 'tail',
                  nodeType: 'YulTypedName',
                  src: '9332:4:5',
                  type: '',
                },
              ],
              src: '9166:419:5',
            },
          ],
        },
        contents:
          '{\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function cleanup_t_uint8(value) -> cleaned {\n        cleaned := and(value, 0xff)\n    }\n\n    function validator_revert_t_uint8(value) {\n        if iszero(eq(value, cleanup_t_uint8(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_uint8(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_uint8(value)\n    }\n\n    function abi_decode_tuple_t_uint8(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_uint8(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function cleanup_t_bool(value) -> cleaned {\n        cleaned := iszero(iszero(value))\n    }\n\n    function abi_encode_t_bool_to_t_bool_fromStack(value, pos) {\n        mstore(pos, cleanup_t_bool(value))\n    }\n\n    function abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_bool_to_t_bool_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function abi_encode_t_address_to_t_address_fromStack(value, pos) {\n        mstore(pos, cleanup_t_address(value))\n    }\n\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function validator_revert_t_address(value) {\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_address(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_address(value)\n    }\n\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function store_literal_in_memory_017157b9f30962c99190ba4241b1c3fe2697dafa0962ee9996e8b8917ab35c1e(memPtr) {\n\n        mstore(add(memPtr, 0), "The contract hasn\'t enought fund")\n\n        mstore(add(memPtr, 32), "s")\n\n    }\n\n    function abi_encode_t_stringliteral_017157b9f30962c99190ba4241b1c3fe2697dafa0962ee9996e8b8917ab35c1e_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 33)\n        store_literal_in_memory_017157b9f30962c99190ba4241b1c3fe2697dafa0962ee9996e8b8917ab35c1e(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_017157b9f30962c99190ba4241b1c3fe2697dafa0962ee9996e8b8917ab35c1e__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_017157b9f30962c99190ba4241b1c3fe2697dafa0962ee9996e8b8917ab35c1e_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_b4ee9d7cf8f32d287665e66a51316dcb6f1dafa3ca81b2857cbee760ca73a43d(memPtr) {\n\n        mstore(add(memPtr, 0), "Incorrect side, needs to be 0 or")\n\n        mstore(add(memPtr, 32), " 1")\n\n    }\n\n    function abi_encode_t_stringliteral_b4ee9d7cf8f32d287665e66a51316dcb6f1dafa3ca81b2857cbee760ca73a43d_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 34)\n        store_literal_in_memory_b4ee9d7cf8f32d287665e66a51316dcb6f1dafa3ca81b2857cbee760ca73a43d(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_b4ee9d7cf8f32d287665e66a51316dcb6f1dafa3ca81b2857cbee760ca73a43d__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_b4ee9d7cf8f32d287665e66a51316dcb6f1dafa3ca81b2857cbee760ca73a43d_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function panic_error_0x12() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x12)\n        revert(0, 0x24)\n    }\n\n    function mod_t_uint256(x, y) -> r {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n        if iszero(y) { panic_error_0x12() }\n        r := mod(x, y)\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function checked_sub_t_uint256(x, y) -> diff {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n\n        if lt(x, y) { panic_error_0x11() }\n\n        diff := sub(x, y)\n    }\n\n    function checked_mul_t_uint256(x, y) -> product {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n\n        // overflow, if x != 0 and y > (maxValue / x)\n        if and(iszero(iszero(x)), gt(y, div(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff, x))) { panic_error_0x11() }\n\n        product := mul(x, y)\n    }\n\n    function checked_add_t_uint256(x, y) -> sum {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n\n        // overflow, if x > (maxValue - y)\n        if gt(x, sub(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff, y)) { panic_error_0x11() }\n\n        sum := add(x, y)\n    }\n\n    function abi_encode_t_uint8_to_t_uint8_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint8(value))\n    }\n\n    function abi_encode_tuple_t_uint8__to_t_uint8__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint8_to_t_uint8_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function store_literal_in_memory_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe(memPtr) {\n\n        mstore(add(memPtr, 0), "Ownable: caller is not the owner")\n\n    }\n\n    function abi_encode_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 32)\n        store_literal_in_memory_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function panic_error_0x01() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x01)\n        revert(0, 0x24)\n    }\n\n    function abi_encode_tuple_t_address_t_uint256__to_t_address_t_uint256__fromStack_reversed(headStart , value1, value0) -> tail {\n        tail := add(headStart, 64)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value1,  add(headStart, 32))\n\n    }\n\n    function store_literal_in_memory_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe(memPtr) {\n\n        mstore(add(memPtr, 0), "Ownable: new owner is the zero a")\n\n        mstore(add(memPtr, 32), "ddress")\n\n    }\n\n    function abi_encode_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 38)\n        store_literal_in_memory_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n}\n',
        id: 5,
        language: 'Yul',
        name: '#utility.yul',
      },
    ],
    sourceMap:
      '175:1538:3:-:0;;;;;;;;;;;;;921:32:0;940:12;:10;;;:12;;:::i;:::-;921:18;;;:32;;:::i;:::-;175:1538:3;;640:96:1;693:7;719:10;712:17;;640:96;:::o;2270:187:0:-;2343:16;2362:6;;;;;;;;;;;2343:25;;2387:8;2378:6;;:17;;;;;;;;;;;;;;;;;;2441:8;2410:40;;2431:8;2410:40;;;;;;;;;;;;2333:124;2270:187;:::o;175:1538:3:-;;;;;;;',
    deployedSourceMap:
      '175:1538:3:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1343:88;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;252:27;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;473:572;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1668:101:0;;;;;;;;;;;;;:::i;:::-;;1084:203:3;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1036:85:0;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1461:249:3;;;:::i;:::-;;1918:198:0;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1343:88:3;1386:4;1409:15;;1402:22;;1343:88;:::o;252:27::-;;;;:::o;473:572::-;522:4;570:16;584:1;570:9;:13;;:16;;;;:::i;:::-;545:21;:41;;537:87;;;;;;;;;;;;:::i;:::-;;;;;;;;;650:1;642:4;:9;;;:22;;;;663:1;655:4;:9;;;642:22;634:69;;;;;;;;;;;;:::i;:::-;;;;;;;;;713:8;757:4;734:27;;752:1;734:15;:19;;;;:::i;:::-;:27;731:256;;;795:9;776:15;;:28;;;;;;;:::i;:::-;;;;;;;;826:10;818:28;;:43;859:1;847:9;:13;;;;:::i;:::-;818:43;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;881:4;875:10;;731:256;;;942:9;923:15;;:28;;;;;;;:::i;:::-;;;;;;;;971:5;965:11;;731:256;1028:3;1001:37;;1017:9;1005:10;1001:37;;;1033:4;1001:37;;;;;;:::i;:::-;;;;;;;;527:518;473:572;;;:::o;1668:101:0:-;1259:12;:10;:12::i;:::-;1248:23;;:7;:5;:7::i;:::-;:23;;;1240:68;;;;;;;;;;;;:::i;:::-;;;;;;;;;1732:30:::1;1759:1;1732:18;:30::i;:::-;1668:101::o:0;1084:203:3:-;1132:4;1259:12:0;:10;:12::i;:::-;1248:23;;:7;:5;:7::i;:::-;:23;;;1240:68;;;;;;;;;;;;:::i;:::-;;;;;;;;;1155:10:3::1;1147:28;;:51;1176:21;1147:51;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;1240:1;1215:21;:26;1208:34;;;;:::i;:::-;;1259:21;1252:28;;1084:203:::0;:::o;1036:85:0:-;1082:7;1108:6;;;;;;;;;;;1101:13;;1036:85;:::o;1461:249:3:-;1259:12:0;:10;:12::i;:::-;1248:23;;:7;:5;:7::i;:::-;:23;;;1240:68;;;;;;;;;;;;:::i;:::-;;;;;;;;;1541:1:3::1;1528:9;:14;;1520:23;;;::::0;::::1;;1571:30;1591:9;1571:15;;:19;;:30;;;;:::i;:::-;1553:15;:48;;;;1616:29;1623:10;1635:9;1616:29;;;;;;;:::i;:::-;;;;;;;;1681:21;1662:15;;:40;1655:48;;;;:::i;:::-;;1461:249::o:0;1918:198:0:-;1259:12;:10;:12::i;:::-;1248:23;;:7;:5;:7::i;:::-;:23;;;1240:68;;;;;;;;;;;;:::i;:::-;;;;;;;;;2026:1:::1;2006:22;;:8;:22;;;;1998:73;;;;;;;;;;;;:::i;:::-;;;;;;;;;2081:28;2100:8;2081:18;:28::i;:::-;1918:198:::0;:::o;3451:96:2:-;3509:7;3539:1;3535;:5;;;;:::i;:::-;3528:12;;3451:96;;;;:::o;640::1:-;693:7;719:10;712:17;;640:96;:::o;2270:187:0:-;2343:16;2362:6;;;;;;;;;;;2343:25;;2387:8;2378:6;;:17;;;;;;;;;;;;;;;;;;2441:8;2410:40;;2431:8;2410:40;;;;;;;;;;;;2333:124;2270:187;:::o;2741:96:2:-;2799:7;2829:1;2825;:5;;;;:::i;:::-;2818:12;;2741:96;;;;:::o;7:77:5:-;44:7;73:5;62:16;;7:77;;;:::o;90:118::-;177:24;195:5;177:24;:::i;:::-;172:3;165:37;90:118;;:::o;214:222::-;307:4;345:2;334:9;330:18;322:26;;358:71;426:1;415:9;411:17;402:6;358:71;:::i;:::-;214:222;;;;:::o;523:117::-;632:1;629;622:12;769:86;804:7;844:4;837:5;833:16;822:27;;769:86;;;:::o;861:118::-;932:22;948:5;932:22;:::i;:::-;925:5;922:33;912:61;;969:1;966;959:12;912:61;861:118;:::o;985:135::-;1029:5;1067:6;1054:20;1045:29;;1083:31;1108:5;1083:31;:::i;:::-;985:135;;;;:::o;1126:325::-;1183:6;1232:2;1220:9;1211:7;1207:23;1203:32;1200:119;;;1238:79;;:::i;:::-;1200:119;1358:1;1383:51;1426:7;1417:6;1406:9;1402:22;1383:51;:::i;:::-;1373:61;;1329:115;1126:325;;;;:::o;1457:90::-;1491:7;1534:5;1527:13;1520:21;1509:32;;1457:90;;;:::o;1553:109::-;1634:21;1649:5;1634:21;:::i;:::-;1629:3;1622:34;1553:109;;:::o;1668:210::-;1755:4;1793:2;1782:9;1778:18;1770:26;;1806:65;1868:1;1857:9;1853:17;1844:6;1806:65;:::i;:::-;1668:210;;;;:::o;1884:126::-;1921:7;1961:42;1954:5;1950:54;1939:65;;1884:126;;;:::o;2016:96::-;2053:7;2082:24;2100:5;2082:24;:::i;:::-;2071:35;;2016:96;;;:::o;2118:118::-;2205:24;2223:5;2205:24;:::i;:::-;2200:3;2193:37;2118:118;;:::o;2242:222::-;2335:4;2373:2;2362:9;2358:18;2350:26;;2386:71;2454:1;2443:9;2439:17;2430:6;2386:71;:::i;:::-;2242:222;;;;:::o;2470:122::-;2543:24;2561:5;2543:24;:::i;:::-;2536:5;2533:35;2523:63;;2582:1;2579;2572:12;2523:63;2470:122;:::o;2598:139::-;2644:5;2682:6;2669:20;2660:29;;2698:33;2725:5;2698:33;:::i;:::-;2598:139;;;;:::o;2743:329::-;2802:6;2851:2;2839:9;2830:7;2826:23;2822:32;2819:119;;;2857:79;;:::i;:::-;2819:119;2977:1;3002:53;3047:7;3038:6;3027:9;3023:22;3002:53;:::i;:::-;2992:63;;2948:117;2743:329;;;;:::o;3078:169::-;3162:11;3196:6;3191:3;3184:19;3236:4;3231:3;3227:14;3212:29;;3078:169;;;;:::o;3253:220::-;3393:34;3389:1;3381:6;3377:14;3370:58;3462:3;3457:2;3449:6;3445:15;3438:28;3253:220;:::o;3479:366::-;3621:3;3642:67;3706:2;3701:3;3642:67;:::i;:::-;3635:74;;3718:93;3807:3;3718:93;:::i;:::-;3836:2;3831:3;3827:12;3820:19;;3479:366;;;:::o;3851:419::-;4017:4;4055:2;4044:9;4040:18;4032:26;;4104:9;4098:4;4094:20;4090:1;4079:9;4075:17;4068:47;4132:131;4258:4;4132:131;:::i;:::-;4124:139;;3851:419;;;:::o;4276:221::-;4416:34;4412:1;4404:6;4400:14;4393:58;4485:4;4480:2;4472:6;4468:15;4461:29;4276:221;:::o;4503:366::-;4645:3;4666:67;4730:2;4725:3;4666:67;:::i;:::-;4659:74;;4742:93;4831:3;4742:93;:::i;:::-;4860:2;4855:3;4851:12;4844:19;;4503:366;;;:::o;4875:419::-;5041:4;5079:2;5068:9;5064:18;5056:26;;5128:9;5122:4;5118:20;5114:1;5103:9;5099:17;5092:47;5156:131;5282:4;5156:131;:::i;:::-;5148:139;;4875:419;;;:::o;5300:180::-;5348:77;5345:1;5338:88;5445:4;5442:1;5435:15;5469:4;5466:1;5459:15;5486:176;5518:1;5535:20;5553:1;5535:20;:::i;:::-;5530:25;;5569:20;5587:1;5569:20;:::i;:::-;5564:25;;5608:1;5598:35;;5613:18;;:::i;:::-;5598:35;5654:1;5651;5647:9;5642:14;;5486:176;;;;:::o;5668:180::-;5716:77;5713:1;5706:88;5813:4;5810:1;5803:15;5837:4;5834:1;5827:15;5854:191;5894:4;5914:20;5932:1;5914:20;:::i;:::-;5909:25;;5948:20;5966:1;5948:20;:::i;:::-;5943:25;;5987:1;5984;5981:8;5978:34;;;5992:18;;:::i;:::-;5978:34;6037:1;6034;6030:9;6022:17;;5854:191;;;;:::o;6051:348::-;6091:7;6114:20;6132:1;6114:20;:::i;:::-;6109:25;;6148:20;6166:1;6148:20;:::i;:::-;6143:25;;6336:1;6268:66;6264:74;6261:1;6258:81;6253:1;6246:9;6239:17;6235:105;6232:131;;;6343:18;;:::i;:::-;6232:131;6391:1;6388;6384:9;6373:20;;6051:348;;;;:::o;6405:305::-;6445:3;6464:20;6482:1;6464:20;:::i;:::-;6459:25;;6498:20;6516:1;6498:20;:::i;:::-;6493:25;;6652:1;6584:66;6580:74;6577:1;6574:81;6571:107;;;6658:18;;:::i;:::-;6571:107;6702:1;6699;6695:9;6688:16;;6405:305;;;;:::o;6716:112::-;6799:22;6815:5;6799:22;:::i;:::-;6794:3;6787:35;6716:112;;:::o;6834:214::-;6923:4;6961:2;6950:9;6946:18;6938:26;;6974:67;7038:1;7027:9;7023:17;7014:6;6974:67;:::i;:::-;6834:214;;;;:::o;7054:182::-;7194:34;7190:1;7182:6;7178:14;7171:58;7054:182;:::o;7242:366::-;7384:3;7405:67;7469:2;7464:3;7405:67;:::i;:::-;7398:74;;7481:93;7570:3;7481:93;:::i;:::-;7599:2;7594:3;7590:12;7583:19;;7242:366;;;:::o;7614:419::-;7780:4;7818:2;7807:9;7803:18;7795:26;;7867:9;7861:4;7857:20;7853:1;7842:9;7838:17;7831:47;7895:131;8021:4;7895:131;:::i;:::-;7887:139;;7614:419;;;:::o;8039:180::-;8087:77;8084:1;8077:88;8184:4;8181:1;8174:15;8208:4;8205:1;8198:15;8225:332;8346:4;8384:2;8373:9;8369:18;8361:26;;8397:71;8465:1;8454:9;8450:17;8441:6;8397:71;:::i;:::-;8478:72;8546:2;8535:9;8531:18;8522:6;8478:72;:::i;:::-;8225:332;;;;;:::o;8563:225::-;8703:34;8699:1;8691:6;8687:14;8680:58;8772:8;8767:2;8759:6;8755:15;8748:33;8563:225;:::o;8794:366::-;8936:3;8957:67;9021:2;9016:3;8957:67;:::i;:::-;8950:74;;9033:93;9122:3;9033:93;:::i;:::-;9151:2;9146:3;9142:12;9135:19;;8794:366;;;:::o;9166:419::-;9332:4;9370:2;9359:9;9355:18;9347:26;;9419:9;9413:4;9409:20;9405:1;9394:9;9390:17;9383:47;9447:131;9573:4;9447:131;:::i;:::-;9439:139;;9166:419;;;:::o',
    source:
      'import "../../node_modules/@openzeppelin/contracts/access/Ownable.sol";\nimport "../../node_modules/@openzeppelin/contracts/utils/math/SafeMath.sol";\n\npragma solidity ^0.8.9;\n\ncontract FlipContract is Ownable {\n    \n    using SafeMath for uint256;\n\n    uint public ContractBalance;\n\n    event bet(address indexed user, uint indexed bet, bool indexed win, uint8 side);\n    event funded(address owner, uint funding);\n\n    // Function to simulate coin flip 50/50 randomnes\n    function flip(uint8 side) public payable returns(bool){\n        require(address(this).balance >= msg.value.mul(2), "The contract hasn\'t enought funds");\n        require(side == 0 || side == 1, "Incorrect side, needs to be 0 or 1");\n        bool win;\n        if(block.timestamp % 2 == side){\n            ContractBalance -= msg.value;\n            payable(msg.sender).transfer(msg.value * 2);\n            win = true;\n        }\n        else{\n            ContractBalance += msg.value;\n            win = false;\n        }\n        emit bet(msg.sender, msg.value, win, side);\n    }\n    // Function to Withdraw Funds\n    function withdrawAll() public onlyOwner returns(uint){\n        payable(msg.sender).transfer(address(this).balance);\n        assert(address(this).balance == 0);\n        return address(this).balance;\n    }\n    // Function to get the Balance of the Contract\n    function getBalance() public view returns (uint) {\n        return ContractBalance;\n    }\n    // Fund the Contract\n    function fundContract() public payable onlyOwner {\n        require(msg.value != 0);\n        ContractBalance = ContractBalance.add(msg.value);\n        emit funded(msg.sender, msg.value);\n        assert(ContractBalance == address(this).balance);\n    }\n\n}',
    sourcePath:
      '/Users/pierre-macmini/Desktop/GIT/thegraphWeb3/thegraph/src/contracts/flipcontract.sol',
    ast: {
      absolutePath: 'project:/src/contracts/flipcontract.sol',
      exportedSymbols: {
        Context: [126],
        FlipContract: [634],
        Ownable: [104],
        SafeMath: [438],
      },
      id: 635,
      nodeType: 'SourceUnit',
      nodes: [
        {
          absolutePath:
            'project:/node_modules/@openzeppelin/contracts/access/Ownable.sol',
          file: '../../node_modules/@openzeppelin/contracts/access/Ownable.sol',
          id: 440,
          nameLocation: '-1:-1:-1',
          nodeType: 'ImportDirective',
          scope: 635,
          sourceUnit: 105,
          src: '0:71:3',
          symbolAliases: [],
          unitAlias: '',
        },
        {
          absolutePath:
            'project:/node_modules/@openzeppelin/contracts/utils/math/SafeMath.sol',
          file: '../../node_modules/@openzeppelin/contracts/utils/math/SafeMath.sol',
          id: 441,
          nameLocation: '-1:-1:-1',
          nodeType: 'ImportDirective',
          scope: 635,
          sourceUnit: 439,
          src: '72:76:3',
          symbolAliases: [],
          unitAlias: '',
        },
        {
          id: 442,
          literals: ['solidity', '^', '0.8', '.9'],
          nodeType: 'PragmaDirective',
          src: '150:23:3',
        },
        {
          abstract: false,
          baseContracts: [
            {
              baseName: {
                id: 443,
                name: 'Ownable',
                nodeType: 'IdentifierPath',
                referencedDeclaration: 104,
                src: '200:7:3',
              },
              id: 444,
              nodeType: 'InheritanceSpecifier',
              src: '200:7:3',
            },
          ],
          canonicalName: 'FlipContract',
          contractDependencies: [],
          contractKind: 'contract',
          fullyImplemented: true,
          id: 634,
          linearizedBaseContracts: [634, 104, 126],
          name: 'FlipContract',
          nameLocation: '184:12:3',
          nodeType: 'ContractDefinition',
          nodes: [
            {
              id: 447,
              libraryName: {
                id: 445,
                name: 'SafeMath',
                nodeType: 'IdentifierPath',
                referencedDeclaration: 438,
                src: '225:8:3',
              },
              nodeType: 'UsingForDirective',
              src: '219:27:3',
              typeName: {
                id: 446,
                name: 'uint256',
                nodeType: 'ElementaryTypeName',
                src: '238:7:3',
                typeDescriptions: {
                  typeIdentifier: 't_uint256',
                  typeString: 'uint256',
                },
              },
            },
            {
              constant: false,
              functionSelector: '3b668059',
              id: 449,
              mutability: 'mutable',
              name: 'ContractBalance',
              nameLocation: '264:15:3',
              nodeType: 'VariableDeclaration',
              scope: 634,
              src: '252:27:3',
              stateVariable: true,
              storageLocation: 'default',
              typeDescriptions: {
                typeIdentifier: 't_uint256',
                typeString: 'uint256',
              },
              typeName: {
                id: 448,
                name: 'uint',
                nodeType: 'ElementaryTypeName',
                src: '252:4:3',
                typeDescriptions: {
                  typeIdentifier: 't_uint256',
                  typeString: 'uint256',
                },
              },
              visibility: 'public',
            },
            {
              anonymous: false,
              id: 459,
              name: 'bet',
              nameLocation: '292:3:3',
              nodeType: 'EventDefinition',
              parameters: {
                id: 458,
                nodeType: 'ParameterList',
                parameters: [
                  {
                    constant: false,
                    id: 451,
                    indexed: true,
                    mutability: 'mutable',
                    name: 'user',
                    nameLocation: '312:4:3',
                    nodeType: 'VariableDeclaration',
                    scope: 459,
                    src: '296:20:3',
                    stateVariable: false,
                    storageLocation: 'default',
                    typeDescriptions: {
                      typeIdentifier: 't_address',
                      typeString: 'address',
                    },
                    typeName: {
                      id: 450,
                      name: 'address',
                      nodeType: 'ElementaryTypeName',
                      src: '296:7:3',
                      stateMutability: 'nonpayable',
                      typeDescriptions: {
                        typeIdentifier: 't_address',
                        typeString: 'address',
                      },
                    },
                    visibility: 'internal',
                  },
                  {
                    constant: false,
                    id: 453,
                    indexed: true,
                    mutability: 'mutable',
                    name: 'bet',
                    nameLocation: '331:3:3',
                    nodeType: 'VariableDeclaration',
                    scope: 459,
                    src: '318:16:3',
                    stateVariable: false,
                    storageLocation: 'default',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256',
                    },
                    typeName: {
                      id: 452,
                      name: 'uint',
                      nodeType: 'ElementaryTypeName',
                      src: '318:4:3',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256',
                      },
                    },
                    visibility: 'internal',
                  },
                  {
                    constant: false,
                    id: 455,
                    indexed: true,
                    mutability: 'mutable',
                    name: 'win',
                    nameLocation: '349:3:3',
                    nodeType: 'VariableDeclaration',
                    scope: 459,
                    src: '336:16:3',
                    stateVariable: false,
                    storageLocation: 'default',
                    typeDescriptions: {
                      typeIdentifier: 't_bool',
                      typeString: 'bool',
                    },
                    typeName: {
                      id: 454,
                      name: 'bool',
                      nodeType: 'ElementaryTypeName',
                      src: '336:4:3',
                      typeDescriptions: {
                        typeIdentifier: 't_bool',
                        typeString: 'bool',
                      },
                    },
                    visibility: 'internal',
                  },
                  {
                    constant: false,
                    id: 457,
                    indexed: false,
                    mutability: 'mutable',
                    name: 'side',
                    nameLocation: '360:4:3',
                    nodeType: 'VariableDeclaration',
                    scope: 459,
                    src: '354:10:3',
                    stateVariable: false,
                    storageLocation: 'default',
                    typeDescriptions: {
                      typeIdentifier: 't_uint8',
                      typeString: 'uint8',
                    },
                    typeName: {
                      id: 456,
                      name: 'uint8',
                      nodeType: 'ElementaryTypeName',
                      src: '354:5:3',
                      typeDescriptions: {
                        typeIdentifier: 't_uint8',
                        typeString: 'uint8',
                      },
                    },
                    visibility: 'internal',
                  },
                ],
                src: '295:70:3',
              },
              src: '286:80:3',
            },
            {
              anonymous: false,
              id: 465,
              name: 'funded',
              nameLocation: '377:6:3',
              nodeType: 'EventDefinition',
              parameters: {
                id: 464,
                nodeType: 'ParameterList',
                parameters: [
                  {
                    constant: false,
                    id: 461,
                    indexed: false,
                    mutability: 'mutable',
                    name: 'owner',
                    nameLocation: '392:5:3',
                    nodeType: 'VariableDeclaration',
                    scope: 465,
                    src: '384:13:3',
                    stateVariable: false,
                    storageLocation: 'default',
                    typeDescriptions: {
                      typeIdentifier: 't_address',
                      typeString: 'address',
                    },
                    typeName: {
                      id: 460,
                      name: 'address',
                      nodeType: 'ElementaryTypeName',
                      src: '384:7:3',
                      stateMutability: 'nonpayable',
                      typeDescriptions: {
                        typeIdentifier: 't_address',
                        typeString: 'address',
                      },
                    },
                    visibility: 'internal',
                  },
                  {
                    constant: false,
                    id: 463,
                    indexed: false,
                    mutability: 'mutable',
                    name: 'funding',
                    nameLocation: '404:7:3',
                    nodeType: 'VariableDeclaration',
                    scope: 465,
                    src: '399:12:3',
                    stateVariable: false,
                    storageLocation: 'default',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256',
                    },
                    typeName: {
                      id: 462,
                      name: 'uint',
                      nodeType: 'ElementaryTypeName',
                      src: '399:4:3',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256',
                      },
                    },
                    visibility: 'internal',
                  },
                ],
                src: '383:29:3',
              },
              src: '371:42:3',
            },
            {
              body: {
                id: 549,
                nodeType: 'Block',
                src: '527:518:3',
                statements: [
                  {
                    expression: {
                      arguments: [
                        {
                          commonType: {
                            typeIdentifier: 't_uint256',
                            typeString: 'uint256',
                          },
                          id: 483,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          leftExpression: {
                            expression: {
                              arguments: [
                                {
                                  id: 475,
                                  name: 'this',
                                  nodeType: 'Identifier',
                                  overloadedDeclarations: [],
                                  referencedDeclaration: 4294967268,
                                  src: '553:4:3',
                                  typeDescriptions: {
                                    typeIdentifier:
                                      't_contract$_FlipContract_$634',
                                    typeString: 'contract FlipContract',
                                  },
                                },
                              ],
                              expression: {
                                argumentTypes: [
                                  {
                                    typeIdentifier:
                                      't_contract$_FlipContract_$634',
                                    typeString: 'contract FlipContract',
                                  },
                                ],
                                id: 474,
                                isConstant: false,
                                isLValue: false,
                                isPure: true,
                                lValueRequested: false,
                                nodeType: 'ElementaryTypeNameExpression',
                                src: '545:7:3',
                                typeDescriptions: {
                                  typeIdentifier: 't_type$_t_address_$',
                                  typeString: 'type(address)',
                                },
                                typeName: {
                                  id: 473,
                                  name: 'address',
                                  nodeType: 'ElementaryTypeName',
                                  src: '545:7:3',
                                  typeDescriptions: {},
                                },
                              },
                              id: 476,
                              isConstant: false,
                              isLValue: false,
                              isPure: false,
                              kind: 'typeConversion',
                              lValueRequested: false,
                              names: [],
                              nodeType: 'FunctionCall',
                              src: '545:13:3',
                              tryCall: false,
                              typeDescriptions: {
                                typeIdentifier: 't_address',
                                typeString: 'address',
                              },
                            },
                            id: 477,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            memberName: 'balance',
                            nodeType: 'MemberAccess',
                            src: '545:21:3',
                            typeDescriptions: {
                              typeIdentifier: 't_uint256',
                              typeString: 'uint256',
                            },
                          },
                          nodeType: 'BinaryOperation',
                          operator: '>=',
                          rightExpression: {
                            arguments: [
                              {
                                hexValue: '32',
                                id: 481,
                                isConstant: false,
                                isLValue: false,
                                isPure: true,
                                kind: 'number',
                                lValueRequested: false,
                                nodeType: 'Literal',
                                src: '584:1:3',
                                typeDescriptions: {
                                  typeIdentifier: 't_rational_2_by_1',
                                  typeString: 'int_const 2',
                                },
                                value: '2',
                              },
                            ],
                            expression: {
                              argumentTypes: [
                                {
                                  typeIdentifier: 't_rational_2_by_1',
                                  typeString: 'int_const 2',
                                },
                              ],
                              expression: {
                                expression: {
                                  id: 478,
                                  name: 'msg',
                                  nodeType: 'Identifier',
                                  overloadedDeclarations: [],
                                  referencedDeclaration: 4294967281,
                                  src: '570:3:3',
                                  typeDescriptions: {
                                    typeIdentifier: 't_magic_message',
                                    typeString: 'msg',
                                  },
                                },
                                id: 479,
                                isConstant: false,
                                isLValue: false,
                                isPure: false,
                                lValueRequested: false,
                                memberName: 'value',
                                nodeType: 'MemberAccess',
                                src: '570:9:3',
                                typeDescriptions: {
                                  typeIdentifier: 't_uint256',
                                  typeString: 'uint256',
                                },
                              },
                              id: 480,
                              isConstant: false,
                              isLValue: false,
                              isPure: false,
                              lValueRequested: false,
                              memberName: 'mul',
                              nodeType: 'MemberAccess',
                              referencedDeclaration: 332,
                              src: '570:13:3',
                              typeDescriptions: {
                                typeIdentifier:
                                  't_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$',
                                typeString:
                                  'function (uint256,uint256) pure returns (uint256)',
                              },
                            },
                            id: 482,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            kind: 'functionCall',
                            lValueRequested: false,
                            names: [],
                            nodeType: 'FunctionCall',
                            src: '570:16:3',
                            tryCall: false,
                            typeDescriptions: {
                              typeIdentifier: 't_uint256',
                              typeString: 'uint256',
                            },
                          },
                          src: '545:41:3',
                          typeDescriptions: {
                            typeIdentifier: 't_bool',
                            typeString: 'bool',
                          },
                        },
                        {
                          hexValue:
                            '54686520636f6e7472616374206861736e277420656e6f756768742066756e6473',
                          id: 484,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: 'string',
                          lValueRequested: false,
                          nodeType: 'Literal',
                          src: '588:35:3',
                          typeDescriptions: {
                            typeIdentifier:
                              't_stringliteral_017157b9f30962c99190ba4241b1c3fe2697dafa0962ee9996e8b8917ab35c1e',
                            typeString:
                              'literal_string "The contract hasn\'t enought funds"',
                          },
                          value: "The contract hasn't enought funds",
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: 't_bool',
                            typeString: 'bool',
                          },
                          {
                            typeIdentifier:
                              't_stringliteral_017157b9f30962c99190ba4241b1c3fe2697dafa0962ee9996e8b8917ab35c1e',
                            typeString:
                              'literal_string "The contract hasn\'t enought funds"',
                          },
                        ],
                        id: 472,
                        name: 'require',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [4294967278, 4294967278],
                        referencedDeclaration: 4294967278,
                        src: '537:7:3',
                        typeDescriptions: {
                          typeIdentifier:
                            't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                          typeString: 'function (bool,string memory) pure',
                        },
                      },
                      id: 485,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: 'functionCall',
                      lValueRequested: false,
                      names: [],
                      nodeType: 'FunctionCall',
                      src: '537:87:3',
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: 't_tuple$__$',
                        typeString: 'tuple()',
                      },
                    },
                    id: 486,
                    nodeType: 'ExpressionStatement',
                    src: '537:87:3',
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          commonType: {
                            typeIdentifier: 't_bool',
                            typeString: 'bool',
                          },
                          id: 494,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          leftExpression: {
                            commonType: {
                              typeIdentifier: 't_uint8',
                              typeString: 'uint8',
                            },
                            id: 490,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            leftExpression: {
                              id: 488,
                              name: 'side',
                              nodeType: 'Identifier',
                              overloadedDeclarations: [],
                              referencedDeclaration: 467,
                              src: '642:4:3',
                              typeDescriptions: {
                                typeIdentifier: 't_uint8',
                                typeString: 'uint8',
                              },
                            },
                            nodeType: 'BinaryOperation',
                            operator: '==',
                            rightExpression: {
                              hexValue: '30',
                              id: 489,
                              isConstant: false,
                              isLValue: false,
                              isPure: true,
                              kind: 'number',
                              lValueRequested: false,
                              nodeType: 'Literal',
                              src: '650:1:3',
                              typeDescriptions: {
                                typeIdentifier: 't_rational_0_by_1',
                                typeString: 'int_const 0',
                              },
                              value: '0',
                            },
                            src: '642:9:3',
                            typeDescriptions: {
                              typeIdentifier: 't_bool',
                              typeString: 'bool',
                            },
                          },
                          nodeType: 'BinaryOperation',
                          operator: '||',
                          rightExpression: {
                            commonType: {
                              typeIdentifier: 't_uint8',
                              typeString: 'uint8',
                            },
                            id: 493,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            leftExpression: {
                              id: 491,
                              name: 'side',
                              nodeType: 'Identifier',
                              overloadedDeclarations: [],
                              referencedDeclaration: 467,
                              src: '655:4:3',
                              typeDescriptions: {
                                typeIdentifier: 't_uint8',
                                typeString: 'uint8',
                              },
                            },
                            nodeType: 'BinaryOperation',
                            operator: '==',
                            rightExpression: {
                              hexValue: '31',
                              id: 492,
                              isConstant: false,
                              isLValue: false,
                              isPure: true,
                              kind: 'number',
                              lValueRequested: false,
                              nodeType: 'Literal',
                              src: '663:1:3',
                              typeDescriptions: {
                                typeIdentifier: 't_rational_1_by_1',
                                typeString: 'int_const 1',
                              },
                              value: '1',
                            },
                            src: '655:9:3',
                            typeDescriptions: {
                              typeIdentifier: 't_bool',
                              typeString: 'bool',
                            },
                          },
                          src: '642:22:3',
                          typeDescriptions: {
                            typeIdentifier: 't_bool',
                            typeString: 'bool',
                          },
                        },
                        {
                          hexValue:
                            '496e636f727265637420736964652c206e6565647320746f2062652030206f722031',
                          id: 495,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: 'string',
                          lValueRequested: false,
                          nodeType: 'Literal',
                          src: '666:36:3',
                          typeDescriptions: {
                            typeIdentifier:
                              't_stringliteral_b4ee9d7cf8f32d287665e66a51316dcb6f1dafa3ca81b2857cbee760ca73a43d',
                            typeString:
                              'literal_string "Incorrect side, needs to be 0 or 1"',
                          },
                          value: 'Incorrect side, needs to be 0 or 1',
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: 't_bool',
                            typeString: 'bool',
                          },
                          {
                            typeIdentifier:
                              't_stringliteral_b4ee9d7cf8f32d287665e66a51316dcb6f1dafa3ca81b2857cbee760ca73a43d',
                            typeString:
                              'literal_string "Incorrect side, needs to be 0 or 1"',
                          },
                        ],
                        id: 487,
                        name: 'require',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [4294967278, 4294967278],
                        referencedDeclaration: 4294967278,
                        src: '634:7:3',
                        typeDescriptions: {
                          typeIdentifier:
                            't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                          typeString: 'function (bool,string memory) pure',
                        },
                      },
                      id: 496,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: 'functionCall',
                      lValueRequested: false,
                      names: [],
                      nodeType: 'FunctionCall',
                      src: '634:69:3',
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: 't_tuple$__$',
                        typeString: 'tuple()',
                      },
                    },
                    id: 497,
                    nodeType: 'ExpressionStatement',
                    src: '634:69:3',
                  },
                  {
                    assignments: [499],
                    declarations: [
                      {
                        constant: false,
                        id: 499,
                        mutability: 'mutable',
                        name: 'win',
                        nameLocation: '718:3:3',
                        nodeType: 'VariableDeclaration',
                        scope: 549,
                        src: '713:8:3',
                        stateVariable: false,
                        storageLocation: 'default',
                        typeDescriptions: {
                          typeIdentifier: 't_bool',
                          typeString: 'bool',
                        },
                        typeName: {
                          id: 498,
                          name: 'bool',
                          nodeType: 'ElementaryTypeName',
                          src: '713:4:3',
                          typeDescriptions: {
                            typeIdentifier: 't_bool',
                            typeString: 'bool',
                          },
                        },
                        visibility: 'internal',
                      },
                    ],
                    id: 500,
                    nodeType: 'VariableDeclarationStatement',
                    src: '713:8:3',
                  },
                  {
                    condition: {
                      commonType: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256',
                      },
                      id: 506,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      leftExpression: {
                        commonType: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256',
                        },
                        id: 504,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        leftExpression: {
                          expression: {
                            id: 501,
                            name: 'block',
                            nodeType: 'Identifier',
                            overloadedDeclarations: [],
                            referencedDeclaration: 4294967292,
                            src: '734:5:3',
                            typeDescriptions: {
                              typeIdentifier: 't_magic_block',
                              typeString: 'block',
                            },
                          },
                          id: 502,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          memberName: 'timestamp',
                          nodeType: 'MemberAccess',
                          src: '734:15:3',
                          typeDescriptions: {
                            typeIdentifier: 't_uint256',
                            typeString: 'uint256',
                          },
                        },
                        nodeType: 'BinaryOperation',
                        operator: '%',
                        rightExpression: {
                          hexValue: '32',
                          id: 503,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: 'number',
                          lValueRequested: false,
                          nodeType: 'Literal',
                          src: '752:1:3',
                          typeDescriptions: {
                            typeIdentifier: 't_rational_2_by_1',
                            typeString: 'int_const 2',
                          },
                          value: '2',
                        },
                        src: '734:19:3',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256',
                        },
                      },
                      nodeType: 'BinaryOperation',
                      operator: '==',
                      rightExpression: {
                        id: 505,
                        name: 'side',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 467,
                        src: '757:4:3',
                        typeDescriptions: {
                          typeIdentifier: 't_uint8',
                          typeString: 'uint8',
                        },
                      },
                      src: '734:27:3',
                      typeDescriptions: {
                        typeIdentifier: 't_bool',
                        typeString: 'bool',
                      },
                    },
                    falseBody: {
                      id: 538,
                      nodeType: 'Block',
                      src: '909:78:3',
                      statements: [
                        {
                          expression: {
                            id: 532,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            leftHandSide: {
                              id: 529,
                              name: 'ContractBalance',
                              nodeType: 'Identifier',
                              overloadedDeclarations: [],
                              referencedDeclaration: 449,
                              src: '923:15:3',
                              typeDescriptions: {
                                typeIdentifier: 't_uint256',
                                typeString: 'uint256',
                              },
                            },
                            nodeType: 'Assignment',
                            operator: '+=',
                            rightHandSide: {
                              expression: {
                                id: 530,
                                name: 'msg',
                                nodeType: 'Identifier',
                                overloadedDeclarations: [],
                                referencedDeclaration: 4294967281,
                                src: '942:3:3',
                                typeDescriptions: {
                                  typeIdentifier: 't_magic_message',
                                  typeString: 'msg',
                                },
                              },
                              id: 531,
                              isConstant: false,
                              isLValue: false,
                              isPure: false,
                              lValueRequested: false,
                              memberName: 'value',
                              nodeType: 'MemberAccess',
                              src: '942:9:3',
                              typeDescriptions: {
                                typeIdentifier: 't_uint256',
                                typeString: 'uint256',
                              },
                            },
                            src: '923:28:3',
                            typeDescriptions: {
                              typeIdentifier: 't_uint256',
                              typeString: 'uint256',
                            },
                          },
                          id: 533,
                          nodeType: 'ExpressionStatement',
                          src: '923:28:3',
                        },
                        {
                          expression: {
                            id: 536,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            leftHandSide: {
                              id: 534,
                              name: 'win',
                              nodeType: 'Identifier',
                              overloadedDeclarations: [],
                              referencedDeclaration: 499,
                              src: '965:3:3',
                              typeDescriptions: {
                                typeIdentifier: 't_bool',
                                typeString: 'bool',
                              },
                            },
                            nodeType: 'Assignment',
                            operator: '=',
                            rightHandSide: {
                              hexValue: '66616c7365',
                              id: 535,
                              isConstant: false,
                              isLValue: false,
                              isPure: true,
                              kind: 'bool',
                              lValueRequested: false,
                              nodeType: 'Literal',
                              src: '971:5:3',
                              typeDescriptions: {
                                typeIdentifier: 't_bool',
                                typeString: 'bool',
                              },
                              value: 'false',
                            },
                            src: '965:11:3',
                            typeDescriptions: {
                              typeIdentifier: 't_bool',
                              typeString: 'bool',
                            },
                          },
                          id: 537,
                          nodeType: 'ExpressionStatement',
                          src: '965:11:3',
                        },
                      ],
                    },
                    id: 539,
                    nodeType: 'IfStatement',
                    src: '731:256:3',
                    trueBody: {
                      id: 528,
                      nodeType: 'Block',
                      src: '762:134:3',
                      statements: [
                        {
                          expression: {
                            id: 510,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            leftHandSide: {
                              id: 507,
                              name: 'ContractBalance',
                              nodeType: 'Identifier',
                              overloadedDeclarations: [],
                              referencedDeclaration: 449,
                              src: '776:15:3',
                              typeDescriptions: {
                                typeIdentifier: 't_uint256',
                                typeString: 'uint256',
                              },
                            },
                            nodeType: 'Assignment',
                            operator: '-=',
                            rightHandSide: {
                              expression: {
                                id: 508,
                                name: 'msg',
                                nodeType: 'Identifier',
                                overloadedDeclarations: [],
                                referencedDeclaration: 4294967281,
                                src: '795:3:3',
                                typeDescriptions: {
                                  typeIdentifier: 't_magic_message',
                                  typeString: 'msg',
                                },
                              },
                              id: 509,
                              isConstant: false,
                              isLValue: false,
                              isPure: false,
                              lValueRequested: false,
                              memberName: 'value',
                              nodeType: 'MemberAccess',
                              src: '795:9:3',
                              typeDescriptions: {
                                typeIdentifier: 't_uint256',
                                typeString: 'uint256',
                              },
                            },
                            src: '776:28:3',
                            typeDescriptions: {
                              typeIdentifier: 't_uint256',
                              typeString: 'uint256',
                            },
                          },
                          id: 511,
                          nodeType: 'ExpressionStatement',
                          src: '776:28:3',
                        },
                        {
                          expression: {
                            arguments: [
                              {
                                commonType: {
                                  typeIdentifier: 't_uint256',
                                  typeString: 'uint256',
                                },
                                id: 521,
                                isConstant: false,
                                isLValue: false,
                                isPure: false,
                                lValueRequested: false,
                                leftExpression: {
                                  expression: {
                                    id: 518,
                                    name: 'msg',
                                    nodeType: 'Identifier',
                                    overloadedDeclarations: [],
                                    referencedDeclaration: 4294967281,
                                    src: '847:3:3',
                                    typeDescriptions: {
                                      typeIdentifier: 't_magic_message',
                                      typeString: 'msg',
                                    },
                                  },
                                  id: 519,
                                  isConstant: false,
                                  isLValue: false,
                                  isPure: false,
                                  lValueRequested: false,
                                  memberName: 'value',
                                  nodeType: 'MemberAccess',
                                  src: '847:9:3',
                                  typeDescriptions: {
                                    typeIdentifier: 't_uint256',
                                    typeString: 'uint256',
                                  },
                                },
                                nodeType: 'BinaryOperation',
                                operator: '*',
                                rightExpression: {
                                  hexValue: '32',
                                  id: 520,
                                  isConstant: false,
                                  isLValue: false,
                                  isPure: true,
                                  kind: 'number',
                                  lValueRequested: false,
                                  nodeType: 'Literal',
                                  src: '859:1:3',
                                  typeDescriptions: {
                                    typeIdentifier: 't_rational_2_by_1',
                                    typeString: 'int_const 2',
                                  },
                                  value: '2',
                                },
                                src: '847:13:3',
                                typeDescriptions: {
                                  typeIdentifier: 't_uint256',
                                  typeString: 'uint256',
                                },
                              },
                            ],
                            expression: {
                              argumentTypes: [
                                {
                                  typeIdentifier: 't_uint256',
                                  typeString: 'uint256',
                                },
                              ],
                              expression: {
                                arguments: [
                                  {
                                    expression: {
                                      id: 514,
                                      name: 'msg',
                                      nodeType: 'Identifier',
                                      overloadedDeclarations: [],
                                      referencedDeclaration: 4294967281,
                                      src: '826:3:3',
                                      typeDescriptions: {
                                        typeIdentifier: 't_magic_message',
                                        typeString: 'msg',
                                      },
                                    },
                                    id: 515,
                                    isConstant: false,
                                    isLValue: false,
                                    isPure: false,
                                    lValueRequested: false,
                                    memberName: 'sender',
                                    nodeType: 'MemberAccess',
                                    src: '826:10:3',
                                    typeDescriptions: {
                                      typeIdentifier: 't_address',
                                      typeString: 'address',
                                    },
                                  },
                                ],
                                expression: {
                                  argumentTypes: [
                                    {
                                      typeIdentifier: 't_address',
                                      typeString: 'address',
                                    },
                                  ],
                                  id: 513,
                                  isConstant: false,
                                  isLValue: false,
                                  isPure: true,
                                  lValueRequested: false,
                                  nodeType: 'ElementaryTypeNameExpression',
                                  src: '818:8:3',
                                  typeDescriptions: {
                                    typeIdentifier:
                                      't_type$_t_address_payable_$',
                                    typeString: 'type(address payable)',
                                  },
                                  typeName: {
                                    id: 512,
                                    name: 'address',
                                    nodeType: 'ElementaryTypeName',
                                    src: '818:8:3',
                                    stateMutability: 'payable',
                                    typeDescriptions: {},
                                  },
                                },
                                id: 516,
                                isConstant: false,
                                isLValue: false,
                                isPure: false,
                                kind: 'typeConversion',
                                lValueRequested: false,
                                names: [],
                                nodeType: 'FunctionCall',
                                src: '818:19:3',
                                tryCall: false,
                                typeDescriptions: {
                                  typeIdentifier: 't_address_payable',
                                  typeString: 'address payable',
                                },
                              },
                              id: 517,
                              isConstant: false,
                              isLValue: false,
                              isPure: false,
                              lValueRequested: false,
                              memberName: 'transfer',
                              nodeType: 'MemberAccess',
                              src: '818:28:3',
                              typeDescriptions: {
                                typeIdentifier:
                                  't_function_transfer_nonpayable$_t_uint256_$returns$__$',
                                typeString: 'function (uint256)',
                              },
                            },
                            id: 522,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            kind: 'functionCall',
                            lValueRequested: false,
                            names: [],
                            nodeType: 'FunctionCall',
                            src: '818:43:3',
                            tryCall: false,
                            typeDescriptions: {
                              typeIdentifier: 't_tuple$__$',
                              typeString: 'tuple()',
                            },
                          },
                          id: 523,
                          nodeType: 'ExpressionStatement',
                          src: '818:43:3',
                        },
                        {
                          expression: {
                            id: 526,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            leftHandSide: {
                              id: 524,
                              name: 'win',
                              nodeType: 'Identifier',
                              overloadedDeclarations: [],
                              referencedDeclaration: 499,
                              src: '875:3:3',
                              typeDescriptions: {
                                typeIdentifier: 't_bool',
                                typeString: 'bool',
                              },
                            },
                            nodeType: 'Assignment',
                            operator: '=',
                            rightHandSide: {
                              hexValue: '74727565',
                              id: 525,
                              isConstant: false,
                              isLValue: false,
                              isPure: true,
                              kind: 'bool',
                              lValueRequested: false,
                              nodeType: 'Literal',
                              src: '881:4:3',
                              typeDescriptions: {
                                typeIdentifier: 't_bool',
                                typeString: 'bool',
                              },
                              value: 'true',
                            },
                            src: '875:10:3',
                            typeDescriptions: {
                              typeIdentifier: 't_bool',
                              typeString: 'bool',
                            },
                          },
                          id: 527,
                          nodeType: 'ExpressionStatement',
                          src: '875:10:3',
                        },
                      ],
                    },
                  },
                  {
                    eventCall: {
                      arguments: [
                        {
                          expression: {
                            id: 541,
                            name: 'msg',
                            nodeType: 'Identifier',
                            overloadedDeclarations: [],
                            referencedDeclaration: 4294967281,
                            src: '1005:3:3',
                            typeDescriptions: {
                              typeIdentifier: 't_magic_message',
                              typeString: 'msg',
                            },
                          },
                          id: 542,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          memberName: 'sender',
                          nodeType: 'MemberAccess',
                          src: '1005:10:3',
                          typeDescriptions: {
                            typeIdentifier: 't_address',
                            typeString: 'address',
                          },
                        },
                        {
                          expression: {
                            id: 543,
                            name: 'msg',
                            nodeType: 'Identifier',
                            overloadedDeclarations: [],
                            referencedDeclaration: 4294967281,
                            src: '1017:3:3',
                            typeDescriptions: {
                              typeIdentifier: 't_magic_message',
                              typeString: 'msg',
                            },
                          },
                          id: 544,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          memberName: 'value',
                          nodeType: 'MemberAccess',
                          src: '1017:9:3',
                          typeDescriptions: {
                            typeIdentifier: 't_uint256',
                            typeString: 'uint256',
                          },
                        },
                        {
                          id: 545,
                          name: 'win',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: 499,
                          src: '1028:3:3',
                          typeDescriptions: {
                            typeIdentifier: 't_bool',
                            typeString: 'bool',
                          },
                        },
                        {
                          id: 546,
                          name: 'side',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: 467,
                          src: '1033:4:3',
                          typeDescriptions: {
                            typeIdentifier: 't_uint8',
                            typeString: 'uint8',
                          },
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: 't_address',
                            typeString: 'address',
                          },
                          {
                            typeIdentifier: 't_uint256',
                            typeString: 'uint256',
                          },
                          {
                            typeIdentifier: 't_bool',
                            typeString: 'bool',
                          },
                          {
                            typeIdentifier: 't_uint8',
                            typeString: 'uint8',
                          },
                        ],
                        id: 540,
                        name: 'bet',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 459,
                        src: '1001:3:3',
                        typeDescriptions: {
                          typeIdentifier:
                            't_function_event_nonpayable$_t_address_$_t_uint256_$_t_bool_$_t_uint8_$returns$__$',
                          typeString: 'function (address,uint256,bool,uint8)',
                        },
                      },
                      id: 547,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: 'functionCall',
                      lValueRequested: false,
                      names: [],
                      nodeType: 'FunctionCall',
                      src: '1001:37:3',
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: 't_tuple$__$',
                        typeString: 'tuple()',
                      },
                    },
                    id: 548,
                    nodeType: 'EmitStatement',
                    src: '996:42:3',
                  },
                ],
              },
              functionSelector: '638c0637',
              id: 550,
              implemented: true,
              kind: 'function',
              modifiers: [],
              name: 'flip',
              nameLocation: '482:4:3',
              nodeType: 'FunctionDefinition',
              parameters: {
                id: 468,
                nodeType: 'ParameterList',
                parameters: [
                  {
                    constant: false,
                    id: 467,
                    mutability: 'mutable',
                    name: 'side',
                    nameLocation: '493:4:3',
                    nodeType: 'VariableDeclaration',
                    scope: 550,
                    src: '487:10:3',
                    stateVariable: false,
                    storageLocation: 'default',
                    typeDescriptions: {
                      typeIdentifier: 't_uint8',
                      typeString: 'uint8',
                    },
                    typeName: {
                      id: 466,
                      name: 'uint8',
                      nodeType: 'ElementaryTypeName',
                      src: '487:5:3',
                      typeDescriptions: {
                        typeIdentifier: 't_uint8',
                        typeString: 'uint8',
                      },
                    },
                    visibility: 'internal',
                  },
                ],
                src: '486:12:3',
              },
              returnParameters: {
                id: 471,
                nodeType: 'ParameterList',
                parameters: [
                  {
                    constant: false,
                    id: 470,
                    mutability: 'mutable',
                    name: '',
                    nameLocation: '-1:-1:-1',
                    nodeType: 'VariableDeclaration',
                    scope: 550,
                    src: '522:4:3',
                    stateVariable: false,
                    storageLocation: 'default',
                    typeDescriptions: {
                      typeIdentifier: 't_bool',
                      typeString: 'bool',
                    },
                    typeName: {
                      id: 469,
                      name: 'bool',
                      nodeType: 'ElementaryTypeName',
                      src: '522:4:3',
                      typeDescriptions: {
                        typeIdentifier: 't_bool',
                        typeString: 'bool',
                      },
                    },
                    visibility: 'internal',
                  },
                ],
                src: '521:6:3',
              },
              scope: 634,
              src: '473:572:3',
              stateMutability: 'payable',
              virtual: false,
              visibility: 'public',
            },
            {
              body: {
                id: 586,
                nodeType: 'Block',
                src: '1137:150:3',
                statements: [
                  {
                    expression: {
                      arguments: [
                        {
                          expression: {
                            arguments: [
                              {
                                id: 565,
                                name: 'this',
                                nodeType: 'Identifier',
                                overloadedDeclarations: [],
                                referencedDeclaration: 4294967268,
                                src: '1184:4:3',
                                typeDescriptions: {
                                  typeIdentifier:
                                    't_contract$_FlipContract_$634',
                                  typeString: 'contract FlipContract',
                                },
                              },
                            ],
                            expression: {
                              argumentTypes: [
                                {
                                  typeIdentifier:
                                    't_contract$_FlipContract_$634',
                                  typeString: 'contract FlipContract',
                                },
                              ],
                              id: 564,
                              isConstant: false,
                              isLValue: false,
                              isPure: true,
                              lValueRequested: false,
                              nodeType: 'ElementaryTypeNameExpression',
                              src: '1176:7:3',
                              typeDescriptions: {
                                typeIdentifier: 't_type$_t_address_$',
                                typeString: 'type(address)',
                              },
                              typeName: {
                                id: 563,
                                name: 'address',
                                nodeType: 'ElementaryTypeName',
                                src: '1176:7:3',
                                typeDescriptions: {},
                              },
                            },
                            id: 566,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            kind: 'typeConversion',
                            lValueRequested: false,
                            names: [],
                            nodeType: 'FunctionCall',
                            src: '1176:13:3',
                            tryCall: false,
                            typeDescriptions: {
                              typeIdentifier: 't_address',
                              typeString: 'address',
                            },
                          },
                          id: 567,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          memberName: 'balance',
                          nodeType: 'MemberAccess',
                          src: '1176:21:3',
                          typeDescriptions: {
                            typeIdentifier: 't_uint256',
                            typeString: 'uint256',
                          },
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: 't_uint256',
                            typeString: 'uint256',
                          },
                        ],
                        expression: {
                          arguments: [
                            {
                              expression: {
                                id: 559,
                                name: 'msg',
                                nodeType: 'Identifier',
                                overloadedDeclarations: [],
                                referencedDeclaration: 4294967281,
                                src: '1155:3:3',
                                typeDescriptions: {
                                  typeIdentifier: 't_magic_message',
                                  typeString: 'msg',
                                },
                              },
                              id: 560,
                              isConstant: false,
                              isLValue: false,
                              isPure: false,
                              lValueRequested: false,
                              memberName: 'sender',
                              nodeType: 'MemberAccess',
                              src: '1155:10:3',
                              typeDescriptions: {
                                typeIdentifier: 't_address',
                                typeString: 'address',
                              },
                            },
                          ],
                          expression: {
                            argumentTypes: [
                              {
                                typeIdentifier: 't_address',
                                typeString: 'address',
                              },
                            ],
                            id: 558,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            lValueRequested: false,
                            nodeType: 'ElementaryTypeNameExpression',
                            src: '1147:8:3',
                            typeDescriptions: {
                              typeIdentifier: 't_type$_t_address_payable_$',
                              typeString: 'type(address payable)',
                            },
                            typeName: {
                              id: 557,
                              name: 'address',
                              nodeType: 'ElementaryTypeName',
                              src: '1147:8:3',
                              stateMutability: 'payable',
                              typeDescriptions: {},
                            },
                          },
                          id: 561,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          kind: 'typeConversion',
                          lValueRequested: false,
                          names: [],
                          nodeType: 'FunctionCall',
                          src: '1147:19:3',
                          tryCall: false,
                          typeDescriptions: {
                            typeIdentifier: 't_address_payable',
                            typeString: 'address payable',
                          },
                        },
                        id: 562,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberName: 'transfer',
                        nodeType: 'MemberAccess',
                        src: '1147:28:3',
                        typeDescriptions: {
                          typeIdentifier:
                            't_function_transfer_nonpayable$_t_uint256_$returns$__$',
                          typeString: 'function (uint256)',
                        },
                      },
                      id: 568,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: 'functionCall',
                      lValueRequested: false,
                      names: [],
                      nodeType: 'FunctionCall',
                      src: '1147:51:3',
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: 't_tuple$__$',
                        typeString: 'tuple()',
                      },
                    },
                    id: 569,
                    nodeType: 'ExpressionStatement',
                    src: '1147:51:3',
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          commonType: {
                            typeIdentifier: 't_uint256',
                            typeString: 'uint256',
                          },
                          id: 577,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          leftExpression: {
                            expression: {
                              arguments: [
                                {
                                  id: 573,
                                  name: 'this',
                                  nodeType: 'Identifier',
                                  overloadedDeclarations: [],
                                  referencedDeclaration: 4294967268,
                                  src: '1223:4:3',
                                  typeDescriptions: {
                                    typeIdentifier:
                                      't_contract$_FlipContract_$634',
                                    typeString: 'contract FlipContract',
                                  },
                                },
                              ],
                              expression: {
                                argumentTypes: [
                                  {
                                    typeIdentifier:
                                      't_contract$_FlipContract_$634',
                                    typeString: 'contract FlipContract',
                                  },
                                ],
                                id: 572,
                                isConstant: false,
                                isLValue: false,
                                isPure: true,
                                lValueRequested: false,
                                nodeType: 'ElementaryTypeNameExpression',
                                src: '1215:7:3',
                                typeDescriptions: {
                                  typeIdentifier: 't_type$_t_address_$',
                                  typeString: 'type(address)',
                                },
                                typeName: {
                                  id: 571,
                                  name: 'address',
                                  nodeType: 'ElementaryTypeName',
                                  src: '1215:7:3',
                                  typeDescriptions: {},
                                },
                              },
                              id: 574,
                              isConstant: false,
                              isLValue: false,
                              isPure: false,
                              kind: 'typeConversion',
                              lValueRequested: false,
                              names: [],
                              nodeType: 'FunctionCall',
                              src: '1215:13:3',
                              tryCall: false,
                              typeDescriptions: {
                                typeIdentifier: 't_address',
                                typeString: 'address',
                              },
                            },
                            id: 575,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            memberName: 'balance',
                            nodeType: 'MemberAccess',
                            src: '1215:21:3',
                            typeDescriptions: {
                              typeIdentifier: 't_uint256',
                              typeString: 'uint256',
                            },
                          },
                          nodeType: 'BinaryOperation',
                          operator: '==',
                          rightExpression: {
                            hexValue: '30',
                            id: 576,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: 'number',
                            lValueRequested: false,
                            nodeType: 'Literal',
                            src: '1240:1:3',
                            typeDescriptions: {
                              typeIdentifier: 't_rational_0_by_1',
                              typeString: 'int_const 0',
                            },
                            value: '0',
                          },
                          src: '1215:26:3',
                          typeDescriptions: {
                            typeIdentifier: 't_bool',
                            typeString: 'bool',
                          },
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: 't_bool',
                            typeString: 'bool',
                          },
                        ],
                        id: 570,
                        name: 'assert',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 4294967293,
                        src: '1208:6:3',
                        typeDescriptions: {
                          typeIdentifier:
                            't_function_assert_pure$_t_bool_$returns$__$',
                          typeString: 'function (bool) pure',
                        },
                      },
                      id: 578,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: 'functionCall',
                      lValueRequested: false,
                      names: [],
                      nodeType: 'FunctionCall',
                      src: '1208:34:3',
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: 't_tuple$__$',
                        typeString: 'tuple()',
                      },
                    },
                    id: 579,
                    nodeType: 'ExpressionStatement',
                    src: '1208:34:3',
                  },
                  {
                    expression: {
                      expression: {
                        arguments: [
                          {
                            id: 582,
                            name: 'this',
                            nodeType: 'Identifier',
                            overloadedDeclarations: [],
                            referencedDeclaration: 4294967268,
                            src: '1267:4:3',
                            typeDescriptions: {
                              typeIdentifier: 't_contract$_FlipContract_$634',
                              typeString: 'contract FlipContract',
                            },
                          },
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier: 't_contract$_FlipContract_$634',
                              typeString: 'contract FlipContract',
                            },
                          ],
                          id: 581,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          lValueRequested: false,
                          nodeType: 'ElementaryTypeNameExpression',
                          src: '1259:7:3',
                          typeDescriptions: {
                            typeIdentifier: 't_type$_t_address_$',
                            typeString: 'type(address)',
                          },
                          typeName: {
                            id: 580,
                            name: 'address',
                            nodeType: 'ElementaryTypeName',
                            src: '1259:7:3',
                            typeDescriptions: {},
                          },
                        },
                        id: 583,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        kind: 'typeConversion',
                        lValueRequested: false,
                        names: [],
                        nodeType: 'FunctionCall',
                        src: '1259:13:3',
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier: 't_address',
                          typeString: 'address',
                        },
                      },
                      id: 584,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberName: 'balance',
                      nodeType: 'MemberAccess',
                      src: '1259:21:3',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256',
                      },
                    },
                    functionReturnParameters: 556,
                    id: 585,
                    nodeType: 'Return',
                    src: '1252:28:3',
                  },
                ],
              },
              functionSelector: '853828b6',
              id: 587,
              implemented: true,
              kind: 'function',
              modifiers: [
                {
                  id: 553,
                  kind: 'modifierInvocation',
                  modifierName: {
                    id: 552,
                    name: 'onlyOwner',
                    nodeType: 'IdentifierPath',
                    referencedDeclaration: 46,
                    src: '1114:9:3',
                  },
                  nodeType: 'ModifierInvocation',
                  src: '1114:9:3',
                },
              ],
              name: 'withdrawAll',
              nameLocation: '1093:11:3',
              nodeType: 'FunctionDefinition',
              parameters: {
                id: 551,
                nodeType: 'ParameterList',
                parameters: [],
                src: '1104:2:3',
              },
              returnParameters: {
                id: 556,
                nodeType: 'ParameterList',
                parameters: [
                  {
                    constant: false,
                    id: 555,
                    mutability: 'mutable',
                    name: '',
                    nameLocation: '-1:-1:-1',
                    nodeType: 'VariableDeclaration',
                    scope: 587,
                    src: '1132:4:3',
                    stateVariable: false,
                    storageLocation: 'default',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256',
                    },
                    typeName: {
                      id: 554,
                      name: 'uint',
                      nodeType: 'ElementaryTypeName',
                      src: '1132:4:3',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256',
                      },
                    },
                    visibility: 'internal',
                  },
                ],
                src: '1131:6:3',
              },
              scope: 634,
              src: '1084:203:3',
              stateMutability: 'nonpayable',
              virtual: false,
              visibility: 'public',
            },
            {
              body: {
                id: 594,
                nodeType: 'Block',
                src: '1392:39:3',
                statements: [
                  {
                    expression: {
                      id: 592,
                      name: 'ContractBalance',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 449,
                      src: '1409:15:3',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256',
                      },
                    },
                    functionReturnParameters: 591,
                    id: 593,
                    nodeType: 'Return',
                    src: '1402:22:3',
                  },
                ],
              },
              functionSelector: '12065fe0',
              id: 595,
              implemented: true,
              kind: 'function',
              modifiers: [],
              name: 'getBalance',
              nameLocation: '1352:10:3',
              nodeType: 'FunctionDefinition',
              parameters: {
                id: 588,
                nodeType: 'ParameterList',
                parameters: [],
                src: '1362:2:3',
              },
              returnParameters: {
                id: 591,
                nodeType: 'ParameterList',
                parameters: [
                  {
                    constant: false,
                    id: 590,
                    mutability: 'mutable',
                    name: '',
                    nameLocation: '-1:-1:-1',
                    nodeType: 'VariableDeclaration',
                    scope: 595,
                    src: '1386:4:3',
                    stateVariable: false,
                    storageLocation: 'default',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256',
                    },
                    typeName: {
                      id: 589,
                      name: 'uint',
                      nodeType: 'ElementaryTypeName',
                      src: '1386:4:3',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256',
                      },
                    },
                    visibility: 'internal',
                  },
                ],
                src: '1385:6:3',
              },
              scope: 634,
              src: '1343:88:3',
              stateMutability: 'view',
              virtual: false,
              visibility: 'public',
            },
            {
              body: {
                id: 632,
                nodeType: 'Block',
                src: '1510:200:3',
                statements: [
                  {
                    expression: {
                      arguments: [
                        {
                          commonType: {
                            typeIdentifier: 't_uint256',
                            typeString: 'uint256',
                          },
                          id: 604,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          leftExpression: {
                            expression: {
                              id: 601,
                              name: 'msg',
                              nodeType: 'Identifier',
                              overloadedDeclarations: [],
                              referencedDeclaration: 4294967281,
                              src: '1528:3:3',
                              typeDescriptions: {
                                typeIdentifier: 't_magic_message',
                                typeString: 'msg',
                              },
                            },
                            id: 602,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            memberName: 'value',
                            nodeType: 'MemberAccess',
                            src: '1528:9:3',
                            typeDescriptions: {
                              typeIdentifier: 't_uint256',
                              typeString: 'uint256',
                            },
                          },
                          nodeType: 'BinaryOperation',
                          operator: '!=',
                          rightExpression: {
                            hexValue: '30',
                            id: 603,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: 'number',
                            lValueRequested: false,
                            nodeType: 'Literal',
                            src: '1541:1:3',
                            typeDescriptions: {
                              typeIdentifier: 't_rational_0_by_1',
                              typeString: 'int_const 0',
                            },
                            value: '0',
                          },
                          src: '1528:14:3',
                          typeDescriptions: {
                            typeIdentifier: 't_bool',
                            typeString: 'bool',
                          },
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: 't_bool',
                            typeString: 'bool',
                          },
                        ],
                        id: 600,
                        name: 'require',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [4294967278, 4294967278],
                        referencedDeclaration: 4294967278,
                        src: '1520:7:3',
                        typeDescriptions: {
                          typeIdentifier:
                            't_function_require_pure$_t_bool_$returns$__$',
                          typeString: 'function (bool) pure',
                        },
                      },
                      id: 605,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: 'functionCall',
                      lValueRequested: false,
                      names: [],
                      nodeType: 'FunctionCall',
                      src: '1520:23:3',
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: 't_tuple$__$',
                        typeString: 'tuple()',
                      },
                    },
                    id: 606,
                    nodeType: 'ExpressionStatement',
                    src: '1520:23:3',
                  },
                  {
                    expression: {
                      id: 613,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      leftHandSide: {
                        id: 607,
                        name: 'ContractBalance',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 449,
                        src: '1553:15:3',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256',
                        },
                      },
                      nodeType: 'Assignment',
                      operator: '=',
                      rightHandSide: {
                        arguments: [
                          {
                            expression: {
                              id: 610,
                              name: 'msg',
                              nodeType: 'Identifier',
                              overloadedDeclarations: [],
                              referencedDeclaration: 4294967281,
                              src: '1591:3:3',
                              typeDescriptions: {
                                typeIdentifier: 't_magic_message',
                                typeString: 'msg',
                              },
                            },
                            id: 611,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            memberName: 'value',
                            nodeType: 'MemberAccess',
                            src: '1591:9:3',
                            typeDescriptions: {
                              typeIdentifier: 't_uint256',
                              typeString: 'uint256',
                            },
                          },
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier: 't_uint256',
                              typeString: 'uint256',
                            },
                          ],
                          expression: {
                            id: 608,
                            name: 'ContractBalance',
                            nodeType: 'Identifier',
                            overloadedDeclarations: [],
                            referencedDeclaration: 449,
                            src: '1571:15:3',
                            typeDescriptions: {
                              typeIdentifier: 't_uint256',
                              typeString: 'uint256',
                            },
                          },
                          id: 609,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          memberName: 'add',
                          nodeType: 'MemberAccess',
                          referencedDeclaration: 302,
                          src: '1571:19:3',
                          typeDescriptions: {
                            typeIdentifier:
                              't_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$',
                            typeString:
                              'function (uint256,uint256) pure returns (uint256)',
                          },
                        },
                        id: 612,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        kind: 'functionCall',
                        lValueRequested: false,
                        names: [],
                        nodeType: 'FunctionCall',
                        src: '1571:30:3',
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256',
                        },
                      },
                      src: '1553:48:3',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256',
                      },
                    },
                    id: 614,
                    nodeType: 'ExpressionStatement',
                    src: '1553:48:3',
                  },
                  {
                    eventCall: {
                      arguments: [
                        {
                          expression: {
                            id: 616,
                            name: 'msg',
                            nodeType: 'Identifier',
                            overloadedDeclarations: [],
                            referencedDeclaration: 4294967281,
                            src: '1623:3:3',
                            typeDescriptions: {
                              typeIdentifier: 't_magic_message',
                              typeString: 'msg',
                            },
                          },
                          id: 617,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          memberName: 'sender',
                          nodeType: 'MemberAccess',
                          src: '1623:10:3',
                          typeDescriptions: {
                            typeIdentifier: 't_address',
                            typeString: 'address',
                          },
                        },
                        {
                          expression: {
                            id: 618,
                            name: 'msg',
                            nodeType: 'Identifier',
                            overloadedDeclarations: [],
                            referencedDeclaration: 4294967281,
                            src: '1635:3:3',
                            typeDescriptions: {
                              typeIdentifier: 't_magic_message',
                              typeString: 'msg',
                            },
                          },
                          id: 619,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          memberName: 'value',
                          nodeType: 'MemberAccess',
                          src: '1635:9:3',
                          typeDescriptions: {
                            typeIdentifier: 't_uint256',
                            typeString: 'uint256',
                          },
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: 't_address',
                            typeString: 'address',
                          },
                          {
                            typeIdentifier: 't_uint256',
                            typeString: 'uint256',
                          },
                        ],
                        id: 615,
                        name: 'funded',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 465,
                        src: '1616:6:3',
                        typeDescriptions: {
                          typeIdentifier:
                            't_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$',
                          typeString: 'function (address,uint256)',
                        },
                      },
                      id: 620,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: 'functionCall',
                      lValueRequested: false,
                      names: [],
                      nodeType: 'FunctionCall',
                      src: '1616:29:3',
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: 't_tuple$__$',
                        typeString: 'tuple()',
                      },
                    },
                    id: 621,
                    nodeType: 'EmitStatement',
                    src: '1611:34:3',
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          commonType: {
                            typeIdentifier: 't_uint256',
                            typeString: 'uint256',
                          },
                          id: 629,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          leftExpression: {
                            id: 623,
                            name: 'ContractBalance',
                            nodeType: 'Identifier',
                            overloadedDeclarations: [],
                            referencedDeclaration: 449,
                            src: '1662:15:3',
                            typeDescriptions: {
                              typeIdentifier: 't_uint256',
                              typeString: 'uint256',
                            },
                          },
                          nodeType: 'BinaryOperation',
                          operator: '==',
                          rightExpression: {
                            expression: {
                              arguments: [
                                {
                                  id: 626,
                                  name: 'this',
                                  nodeType: 'Identifier',
                                  overloadedDeclarations: [],
                                  referencedDeclaration: 4294967268,
                                  src: '1689:4:3',
                                  typeDescriptions: {
                                    typeIdentifier:
                                      't_contract$_FlipContract_$634',
                                    typeString: 'contract FlipContract',
                                  },
                                },
                              ],
                              expression: {
                                argumentTypes: [
                                  {
                                    typeIdentifier:
                                      't_contract$_FlipContract_$634',
                                    typeString: 'contract FlipContract',
                                  },
                                ],
                                id: 625,
                                isConstant: false,
                                isLValue: false,
                                isPure: true,
                                lValueRequested: false,
                                nodeType: 'ElementaryTypeNameExpression',
                                src: '1681:7:3',
                                typeDescriptions: {
                                  typeIdentifier: 't_type$_t_address_$',
                                  typeString: 'type(address)',
                                },
                                typeName: {
                                  id: 624,
                                  name: 'address',
                                  nodeType: 'ElementaryTypeName',
                                  src: '1681:7:3',
                                  typeDescriptions: {},
                                },
                              },
                              id: 627,
                              isConstant: false,
                              isLValue: false,
                              isPure: false,
                              kind: 'typeConversion',
                              lValueRequested: false,
                              names: [],
                              nodeType: 'FunctionCall',
                              src: '1681:13:3',
                              tryCall: false,
                              typeDescriptions: {
                                typeIdentifier: 't_address',
                                typeString: 'address',
                              },
                            },
                            id: 628,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            memberName: 'balance',
                            nodeType: 'MemberAccess',
                            src: '1681:21:3',
                            typeDescriptions: {
                              typeIdentifier: 't_uint256',
                              typeString: 'uint256',
                            },
                          },
                          src: '1662:40:3',
                          typeDescriptions: {
                            typeIdentifier: 't_bool',
                            typeString: 'bool',
                          },
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: 't_bool',
                            typeString: 'bool',
                          },
                        ],
                        id: 622,
                        name: 'assert',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 4294967293,
                        src: '1655:6:3',
                        typeDescriptions: {
                          typeIdentifier:
                            't_function_assert_pure$_t_bool_$returns$__$',
                          typeString: 'function (bool) pure',
                        },
                      },
                      id: 630,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: 'functionCall',
                      lValueRequested: false,
                      names: [],
                      nodeType: 'FunctionCall',
                      src: '1655:48:3',
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: 't_tuple$__$',
                        typeString: 'tuple()',
                      },
                    },
                    id: 631,
                    nodeType: 'ExpressionStatement',
                    src: '1655:48:3',
                  },
                ],
              },
              functionSelector: 'bd097e21',
              id: 633,
              implemented: true,
              kind: 'function',
              modifiers: [
                {
                  id: 598,
                  kind: 'modifierInvocation',
                  modifierName: {
                    id: 597,
                    name: 'onlyOwner',
                    nodeType: 'IdentifierPath',
                    referencedDeclaration: 46,
                    src: '1500:9:3',
                  },
                  nodeType: 'ModifierInvocation',
                  src: '1500:9:3',
                },
              ],
              name: 'fundContract',
              nameLocation: '1470:12:3',
              nodeType: 'FunctionDefinition',
              parameters: {
                id: 596,
                nodeType: 'ParameterList',
                parameters: [],
                src: '1482:2:3',
              },
              returnParameters: {
                id: 599,
                nodeType: 'ParameterList',
                parameters: [],
                src: '1510:0:3',
              },
              scope: 634,
              src: '1461:249:3',
              stateMutability: 'payable',
              virtual: false,
              visibility: 'public',
            },
          ],
          scope: 635,
          src: '175:1538:3',
          usedErrors: [],
        },
      ],
      src: '0:1713:3',
    },
    legacyAST: {
      absolutePath: 'project:/src/contracts/flipcontract.sol',
      exportedSymbols: {
        Context: [126],
        FlipContract: [634],
        Ownable: [104],
        SafeMath: [438],
      },
      id: 635,
      nodeType: 'SourceUnit',
      nodes: [
        {
          absolutePath:
            'project:/node_modules/@openzeppelin/contracts/access/Ownable.sol',
          file: '../../node_modules/@openzeppelin/contracts/access/Ownable.sol',
          id: 440,
          nameLocation: '-1:-1:-1',
          nodeType: 'ImportDirective',
          scope: 635,
          sourceUnit: 105,
          src: '0:71:3',
          symbolAliases: [],
          unitAlias: '',
        },
        {
          absolutePath:
            'project:/node_modules/@openzeppelin/contracts/utils/math/SafeMath.sol',
          file: '../../node_modules/@openzeppelin/contracts/utils/math/SafeMath.sol',
          id: 441,
          nameLocation: '-1:-1:-1',
          nodeType: 'ImportDirective',
          scope: 635,
          sourceUnit: 439,
          src: '72:76:3',
          symbolAliases: [],
          unitAlias: '',
        },
        {
          id: 442,
          literals: ['solidity', '^', '0.8', '.9'],
          nodeType: 'PragmaDirective',
          src: '150:23:3',
        },
        {
          abstract: false,
          baseContracts: [
            {
              baseName: {
                id: 443,
                name: 'Ownable',
                nodeType: 'IdentifierPath',
                referencedDeclaration: 104,
                src: '200:7:3',
              },
              id: 444,
              nodeType: 'InheritanceSpecifier',
              src: '200:7:3',
            },
          ],
          canonicalName: 'FlipContract',
          contractDependencies: [],
          contractKind: 'contract',
          fullyImplemented: true,
          id: 634,
          linearizedBaseContracts: [634, 104, 126],
          name: 'FlipContract',
          nameLocation: '184:12:3',
          nodeType: 'ContractDefinition',
          nodes: [
            {
              id: 447,
              libraryName: {
                id: 445,
                name: 'SafeMath',
                nodeType: 'IdentifierPath',
                referencedDeclaration: 438,
                src: '225:8:3',
              },
              nodeType: 'UsingForDirective',
              src: '219:27:3',
              typeName: {
                id: 446,
                name: 'uint256',
                nodeType: 'ElementaryTypeName',
                src: '238:7:3',
                typeDescriptions: {
                  typeIdentifier: 't_uint256',
                  typeString: 'uint256',
                },
              },
            },
            {
              constant: false,
              functionSelector: '3b668059',
              id: 449,
              mutability: 'mutable',
              name: 'ContractBalance',
              nameLocation: '264:15:3',
              nodeType: 'VariableDeclaration',
              scope: 634,
              src: '252:27:3',
              stateVariable: true,
              storageLocation: 'default',
              typeDescriptions: {
                typeIdentifier: 't_uint256',
                typeString: 'uint256',
              },
              typeName: {
                id: 448,
                name: 'uint',
                nodeType: 'ElementaryTypeName',
                src: '252:4:3',
                typeDescriptions: {
                  typeIdentifier: 't_uint256',
                  typeString: 'uint256',
                },
              },
              visibility: 'public',
            },
            {
              anonymous: false,
              id: 459,
              name: 'bet',
              nameLocation: '292:3:3',
              nodeType: 'EventDefinition',
              parameters: {
                id: 458,
                nodeType: 'ParameterList',
                parameters: [
                  {
                    constant: false,
                    id: 451,
                    indexed: true,
                    mutability: 'mutable',
                    name: 'user',
                    nameLocation: '312:4:3',
                    nodeType: 'VariableDeclaration',
                    scope: 459,
                    src: '296:20:3',
                    stateVariable: false,
                    storageLocation: 'default',
                    typeDescriptions: {
                      typeIdentifier: 't_address',
                      typeString: 'address',
                    },
                    typeName: {
                      id: 450,
                      name: 'address',
                      nodeType: 'ElementaryTypeName',
                      src: '296:7:3',
                      stateMutability: 'nonpayable',
                      typeDescriptions: {
                        typeIdentifier: 't_address',
                        typeString: 'address',
                      },
                    },
                    visibility: 'internal',
                  },
                  {
                    constant: false,
                    id: 453,
                    indexed: true,
                    mutability: 'mutable',
                    name: 'bet',
                    nameLocation: '331:3:3',
                    nodeType: 'VariableDeclaration',
                    scope: 459,
                    src: '318:16:3',
                    stateVariable: false,
                    storageLocation: 'default',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256',
                    },
                    typeName: {
                      id: 452,
                      name: 'uint',
                      nodeType: 'ElementaryTypeName',
                      src: '318:4:3',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256',
                      },
                    },
                    visibility: 'internal',
                  },
                  {
                    constant: false,
                    id: 455,
                    indexed: true,
                    mutability: 'mutable',
                    name: 'win',
                    nameLocation: '349:3:3',
                    nodeType: 'VariableDeclaration',
                    scope: 459,
                    src: '336:16:3',
                    stateVariable: false,
                    storageLocation: 'default',
                    typeDescriptions: {
                      typeIdentifier: 't_bool',
                      typeString: 'bool',
                    },
                    typeName: {
                      id: 454,
                      name: 'bool',
                      nodeType: 'ElementaryTypeName',
                      src: '336:4:3',
                      typeDescriptions: {
                        typeIdentifier: 't_bool',
                        typeString: 'bool',
                      },
                    },
                    visibility: 'internal',
                  },
                  {
                    constant: false,
                    id: 457,
                    indexed: false,
                    mutability: 'mutable',
                    name: 'side',
                    nameLocation: '360:4:3',
                    nodeType: 'VariableDeclaration',
                    scope: 459,
                    src: '354:10:3',
                    stateVariable: false,
                    storageLocation: 'default',
                    typeDescriptions: {
                      typeIdentifier: 't_uint8',
                      typeString: 'uint8',
                    },
                    typeName: {
                      id: 456,
                      name: 'uint8',
                      nodeType: 'ElementaryTypeName',
                      src: '354:5:3',
                      typeDescriptions: {
                        typeIdentifier: 't_uint8',
                        typeString: 'uint8',
                      },
                    },
                    visibility: 'internal',
                  },
                ],
                src: '295:70:3',
              },
              src: '286:80:3',
            },
            {
              anonymous: false,
              id: 465,
              name: 'funded',
              nameLocation: '377:6:3',
              nodeType: 'EventDefinition',
              parameters: {
                id: 464,
                nodeType: 'ParameterList',
                parameters: [
                  {
                    constant: false,
                    id: 461,
                    indexed: false,
                    mutability: 'mutable',
                    name: 'owner',
                    nameLocation: '392:5:3',
                    nodeType: 'VariableDeclaration',
                    scope: 465,
                    src: '384:13:3',
                    stateVariable: false,
                    storageLocation: 'default',
                    typeDescriptions: {
                      typeIdentifier: 't_address',
                      typeString: 'address',
                    },
                    typeName: {
                      id: 460,
                      name: 'address',
                      nodeType: 'ElementaryTypeName',
                      src: '384:7:3',
                      stateMutability: 'nonpayable',
                      typeDescriptions: {
                        typeIdentifier: 't_address',
                        typeString: 'address',
                      },
                    },
                    visibility: 'internal',
                  },
                  {
                    constant: false,
                    id: 463,
                    indexed: false,
                    mutability: 'mutable',
                    name: 'funding',
                    nameLocation: '404:7:3',
                    nodeType: 'VariableDeclaration',
                    scope: 465,
                    src: '399:12:3',
                    stateVariable: false,
                    storageLocation: 'default',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256',
                    },
                    typeName: {
                      id: 462,
                      name: 'uint',
                      nodeType: 'ElementaryTypeName',
                      src: '399:4:3',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256',
                      },
                    },
                    visibility: 'internal',
                  },
                ],
                src: '383:29:3',
              },
              src: '371:42:3',
            },
            {
              body: {
                id: 549,
                nodeType: 'Block',
                src: '527:518:3',
                statements: [
                  {
                    expression: {
                      arguments: [
                        {
                          commonType: {
                            typeIdentifier: 't_uint256',
                            typeString: 'uint256',
                          },
                          id: 483,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          leftExpression: {
                            expression: {
                              arguments: [
                                {
                                  id: 475,
                                  name: 'this',
                                  nodeType: 'Identifier',
                                  overloadedDeclarations: [],
                                  referencedDeclaration: 4294967268,
                                  src: '553:4:3',
                                  typeDescriptions: {
                                    typeIdentifier:
                                      't_contract$_FlipContract_$634',
                                    typeString: 'contract FlipContract',
                                  },
                                },
                              ],
                              expression: {
                                argumentTypes: [
                                  {
                                    typeIdentifier:
                                      't_contract$_FlipContract_$634',
                                    typeString: 'contract FlipContract',
                                  },
                                ],
                                id: 474,
                                isConstant: false,
                                isLValue: false,
                                isPure: true,
                                lValueRequested: false,
                                nodeType: 'ElementaryTypeNameExpression',
                                src: '545:7:3',
                                typeDescriptions: {
                                  typeIdentifier: 't_type$_t_address_$',
                                  typeString: 'type(address)',
                                },
                                typeName: {
                                  id: 473,
                                  name: 'address',
                                  nodeType: 'ElementaryTypeName',
                                  src: '545:7:3',
                                  typeDescriptions: {},
                                },
                              },
                              id: 476,
                              isConstant: false,
                              isLValue: false,
                              isPure: false,
                              kind: 'typeConversion',
                              lValueRequested: false,
                              names: [],
                              nodeType: 'FunctionCall',
                              src: '545:13:3',
                              tryCall: false,
                              typeDescriptions: {
                                typeIdentifier: 't_address',
                                typeString: 'address',
                              },
                            },
                            id: 477,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            memberName: 'balance',
                            nodeType: 'MemberAccess',
                            src: '545:21:3',
                            typeDescriptions: {
                              typeIdentifier: 't_uint256',
                              typeString: 'uint256',
                            },
                          },
                          nodeType: 'BinaryOperation',
                          operator: '>=',
                          rightExpression: {
                            arguments: [
                              {
                                hexValue: '32',
                                id: 481,
                                isConstant: false,
                                isLValue: false,
                                isPure: true,
                                kind: 'number',
                                lValueRequested: false,
                                nodeType: 'Literal',
                                src: '584:1:3',
                                typeDescriptions: {
                                  typeIdentifier: 't_rational_2_by_1',
                                  typeString: 'int_const 2',
                                },
                                value: '2',
                              },
                            ],
                            expression: {
                              argumentTypes: [
                                {
                                  typeIdentifier: 't_rational_2_by_1',
                                  typeString: 'int_const 2',
                                },
                              ],
                              expression: {
                                expression: {
                                  id: 478,
                                  name: 'msg',
                                  nodeType: 'Identifier',
                                  overloadedDeclarations: [],
                                  referencedDeclaration: 4294967281,
                                  src: '570:3:3',
                                  typeDescriptions: {
                                    typeIdentifier: 't_magic_message',
                                    typeString: 'msg',
                                  },
                                },
                                id: 479,
                                isConstant: false,
                                isLValue: false,
                                isPure: false,
                                lValueRequested: false,
                                memberName: 'value',
                                nodeType: 'MemberAccess',
                                src: '570:9:3',
                                typeDescriptions: {
                                  typeIdentifier: 't_uint256',
                                  typeString: 'uint256',
                                },
                              },
                              id: 480,
                              isConstant: false,
                              isLValue: false,
                              isPure: false,
                              lValueRequested: false,
                              memberName: 'mul',
                              nodeType: 'MemberAccess',
                              referencedDeclaration: 332,
                              src: '570:13:3',
                              typeDescriptions: {
                                typeIdentifier:
                                  't_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$',
                                typeString:
                                  'function (uint256,uint256) pure returns (uint256)',
                              },
                            },
                            id: 482,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            kind: 'functionCall',
                            lValueRequested: false,
                            names: [],
                            nodeType: 'FunctionCall',
                            src: '570:16:3',
                            tryCall: false,
                            typeDescriptions: {
                              typeIdentifier: 't_uint256',
                              typeString: 'uint256',
                            },
                          },
                          src: '545:41:3',
                          typeDescriptions: {
                            typeIdentifier: 't_bool',
                            typeString: 'bool',
                          },
                        },
                        {
                          hexValue:
                            '54686520636f6e7472616374206861736e277420656e6f756768742066756e6473',
                          id: 484,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: 'string',
                          lValueRequested: false,
                          nodeType: 'Literal',
                          src: '588:35:3',
                          typeDescriptions: {
                            typeIdentifier:
                              't_stringliteral_017157b9f30962c99190ba4241b1c3fe2697dafa0962ee9996e8b8917ab35c1e',
                            typeString:
                              'literal_string "The contract hasn\'t enought funds"',
                          },
                          value: "The contract hasn't enought funds",
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: 't_bool',
                            typeString: 'bool',
                          },
                          {
                            typeIdentifier:
                              't_stringliteral_017157b9f30962c99190ba4241b1c3fe2697dafa0962ee9996e8b8917ab35c1e',
                            typeString:
                              'literal_string "The contract hasn\'t enought funds"',
                          },
                        ],
                        id: 472,
                        name: 'require',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [4294967278, 4294967278],
                        referencedDeclaration: 4294967278,
                        src: '537:7:3',
                        typeDescriptions: {
                          typeIdentifier:
                            't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                          typeString: 'function (bool,string memory) pure',
                        },
                      },
                      id: 485,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: 'functionCall',
                      lValueRequested: false,
                      names: [],
                      nodeType: 'FunctionCall',
                      src: '537:87:3',
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: 't_tuple$__$',
                        typeString: 'tuple()',
                      },
                    },
                    id: 486,
                    nodeType: 'ExpressionStatement',
                    src: '537:87:3',
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          commonType: {
                            typeIdentifier: 't_bool',
                            typeString: 'bool',
                          },
                          id: 494,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          leftExpression: {
                            commonType: {
                              typeIdentifier: 't_uint8',
                              typeString: 'uint8',
                            },
                            id: 490,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            leftExpression: {
                              id: 488,
                              name: 'side',
                              nodeType: 'Identifier',
                              overloadedDeclarations: [],
                              referencedDeclaration: 467,
                              src: '642:4:3',
                              typeDescriptions: {
                                typeIdentifier: 't_uint8',
                                typeString: 'uint8',
                              },
                            },
                            nodeType: 'BinaryOperation',
                            operator: '==',
                            rightExpression: {
                              hexValue: '30',
                              id: 489,
                              isConstant: false,
                              isLValue: false,
                              isPure: true,
                              kind: 'number',
                              lValueRequested: false,
                              nodeType: 'Literal',
                              src: '650:1:3',
                              typeDescriptions: {
                                typeIdentifier: 't_rational_0_by_1',
                                typeString: 'int_const 0',
                              },
                              value: '0',
                            },
                            src: '642:9:3',
                            typeDescriptions: {
                              typeIdentifier: 't_bool',
                              typeString: 'bool',
                            },
                          },
                          nodeType: 'BinaryOperation',
                          operator: '||',
                          rightExpression: {
                            commonType: {
                              typeIdentifier: 't_uint8',
                              typeString: 'uint8',
                            },
                            id: 493,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            leftExpression: {
                              id: 491,
                              name: 'side',
                              nodeType: 'Identifier',
                              overloadedDeclarations: [],
                              referencedDeclaration: 467,
                              src: '655:4:3',
                              typeDescriptions: {
                                typeIdentifier: 't_uint8',
                                typeString: 'uint8',
                              },
                            },
                            nodeType: 'BinaryOperation',
                            operator: '==',
                            rightExpression: {
                              hexValue: '31',
                              id: 492,
                              isConstant: false,
                              isLValue: false,
                              isPure: true,
                              kind: 'number',
                              lValueRequested: false,
                              nodeType: 'Literal',
                              src: '663:1:3',
                              typeDescriptions: {
                                typeIdentifier: 't_rational_1_by_1',
                                typeString: 'int_const 1',
                              },
                              value: '1',
                            },
                            src: '655:9:3',
                            typeDescriptions: {
                              typeIdentifier: 't_bool',
                              typeString: 'bool',
                            },
                          },
                          src: '642:22:3',
                          typeDescriptions: {
                            typeIdentifier: 't_bool',
                            typeString: 'bool',
                          },
                        },
                        {
                          hexValue:
                            '496e636f727265637420736964652c206e6565647320746f2062652030206f722031',
                          id: 495,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: 'string',
                          lValueRequested: false,
                          nodeType: 'Literal',
                          src: '666:36:3',
                          typeDescriptions: {
                            typeIdentifier:
                              't_stringliteral_b4ee9d7cf8f32d287665e66a51316dcb6f1dafa3ca81b2857cbee760ca73a43d',
                            typeString:
                              'literal_string "Incorrect side, needs to be 0 or 1"',
                          },
                          value: 'Incorrect side, needs to be 0 or 1',
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: 't_bool',
                            typeString: 'bool',
                          },
                          {
                            typeIdentifier:
                              't_stringliteral_b4ee9d7cf8f32d287665e66a51316dcb6f1dafa3ca81b2857cbee760ca73a43d',
                            typeString:
                              'literal_string "Incorrect side, needs to be 0 or 1"',
                          },
                        ],
                        id: 487,
                        name: 'require',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [4294967278, 4294967278],
                        referencedDeclaration: 4294967278,
                        src: '634:7:3',
                        typeDescriptions: {
                          typeIdentifier:
                            't_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$',
                          typeString: 'function (bool,string memory) pure',
                        },
                      },
                      id: 496,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: 'functionCall',
                      lValueRequested: false,
                      names: [],
                      nodeType: 'FunctionCall',
                      src: '634:69:3',
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: 't_tuple$__$',
                        typeString: 'tuple()',
                      },
                    },
                    id: 497,
                    nodeType: 'ExpressionStatement',
                    src: '634:69:3',
                  },
                  {
                    assignments: [499],
                    declarations: [
                      {
                        constant: false,
                        id: 499,
                        mutability: 'mutable',
                        name: 'win',
                        nameLocation: '718:3:3',
                        nodeType: 'VariableDeclaration',
                        scope: 549,
                        src: '713:8:3',
                        stateVariable: false,
                        storageLocation: 'default',
                        typeDescriptions: {
                          typeIdentifier: 't_bool',
                          typeString: 'bool',
                        },
                        typeName: {
                          id: 498,
                          name: 'bool',
                          nodeType: 'ElementaryTypeName',
                          src: '713:4:3',
                          typeDescriptions: {
                            typeIdentifier: 't_bool',
                            typeString: 'bool',
                          },
                        },
                        visibility: 'internal',
                      },
                    ],
                    id: 500,
                    nodeType: 'VariableDeclarationStatement',
                    src: '713:8:3',
                  },
                  {
                    condition: {
                      commonType: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256',
                      },
                      id: 506,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      leftExpression: {
                        commonType: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256',
                        },
                        id: 504,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        leftExpression: {
                          expression: {
                            id: 501,
                            name: 'block',
                            nodeType: 'Identifier',
                            overloadedDeclarations: [],
                            referencedDeclaration: 4294967292,
                            src: '734:5:3',
                            typeDescriptions: {
                              typeIdentifier: 't_magic_block',
                              typeString: 'block',
                            },
                          },
                          id: 502,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          memberName: 'timestamp',
                          nodeType: 'MemberAccess',
                          src: '734:15:3',
                          typeDescriptions: {
                            typeIdentifier: 't_uint256',
                            typeString: 'uint256',
                          },
                        },
                        nodeType: 'BinaryOperation',
                        operator: '%',
                        rightExpression: {
                          hexValue: '32',
                          id: 503,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: 'number',
                          lValueRequested: false,
                          nodeType: 'Literal',
                          src: '752:1:3',
                          typeDescriptions: {
                            typeIdentifier: 't_rational_2_by_1',
                            typeString: 'int_const 2',
                          },
                          value: '2',
                        },
                        src: '734:19:3',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256',
                        },
                      },
                      nodeType: 'BinaryOperation',
                      operator: '==',
                      rightExpression: {
                        id: 505,
                        name: 'side',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 467,
                        src: '757:4:3',
                        typeDescriptions: {
                          typeIdentifier: 't_uint8',
                          typeString: 'uint8',
                        },
                      },
                      src: '734:27:3',
                      typeDescriptions: {
                        typeIdentifier: 't_bool',
                        typeString: 'bool',
                      },
                    },
                    falseBody: {
                      id: 538,
                      nodeType: 'Block',
                      src: '909:78:3',
                      statements: [
                        {
                          expression: {
                            id: 532,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            leftHandSide: {
                              id: 529,
                              name: 'ContractBalance',
                              nodeType: 'Identifier',
                              overloadedDeclarations: [],
                              referencedDeclaration: 449,
                              src: '923:15:3',
                              typeDescriptions: {
                                typeIdentifier: 't_uint256',
                                typeString: 'uint256',
                              },
                            },
                            nodeType: 'Assignment',
                            operator: '+=',
                            rightHandSide: {
                              expression: {
                                id: 530,
                                name: 'msg',
                                nodeType: 'Identifier',
                                overloadedDeclarations: [],
                                referencedDeclaration: 4294967281,
                                src: '942:3:3',
                                typeDescriptions: {
                                  typeIdentifier: 't_magic_message',
                                  typeString: 'msg',
                                },
                              },
                              id: 531,
                              isConstant: false,
                              isLValue: false,
                              isPure: false,
                              lValueRequested: false,
                              memberName: 'value',
                              nodeType: 'MemberAccess',
                              src: '942:9:3',
                              typeDescriptions: {
                                typeIdentifier: 't_uint256',
                                typeString: 'uint256',
                              },
                            },
                            src: '923:28:3',
                            typeDescriptions: {
                              typeIdentifier: 't_uint256',
                              typeString: 'uint256',
                            },
                          },
                          id: 533,
                          nodeType: 'ExpressionStatement',
                          src: '923:28:3',
                        },
                        {
                          expression: {
                            id: 536,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            leftHandSide: {
                              id: 534,
                              name: 'win',
                              nodeType: 'Identifier',
                              overloadedDeclarations: [],
                              referencedDeclaration: 499,
                              src: '965:3:3',
                              typeDescriptions: {
                                typeIdentifier: 't_bool',
                                typeString: 'bool',
                              },
                            },
                            nodeType: 'Assignment',
                            operator: '=',
                            rightHandSide: {
                              hexValue: '66616c7365',
                              id: 535,
                              isConstant: false,
                              isLValue: false,
                              isPure: true,
                              kind: 'bool',
                              lValueRequested: false,
                              nodeType: 'Literal',
                              src: '971:5:3',
                              typeDescriptions: {
                                typeIdentifier: 't_bool',
                                typeString: 'bool',
                              },
                              value: 'false',
                            },
                            src: '965:11:3',
                            typeDescriptions: {
                              typeIdentifier: 't_bool',
                              typeString: 'bool',
                            },
                          },
                          id: 537,
                          nodeType: 'ExpressionStatement',
                          src: '965:11:3',
                        },
                      ],
                    },
                    id: 539,
                    nodeType: 'IfStatement',
                    src: '731:256:3',
                    trueBody: {
                      id: 528,
                      nodeType: 'Block',
                      src: '762:134:3',
                      statements: [
                        {
                          expression: {
                            id: 510,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            leftHandSide: {
                              id: 507,
                              name: 'ContractBalance',
                              nodeType: 'Identifier',
                              overloadedDeclarations: [],
                              referencedDeclaration: 449,
                              src: '776:15:3',
                              typeDescriptions: {
                                typeIdentifier: 't_uint256',
                                typeString: 'uint256',
                              },
                            },
                            nodeType: 'Assignment',
                            operator: '-=',
                            rightHandSide: {
                              expression: {
                                id: 508,
                                name: 'msg',
                                nodeType: 'Identifier',
                                overloadedDeclarations: [],
                                referencedDeclaration: 4294967281,
                                src: '795:3:3',
                                typeDescriptions: {
                                  typeIdentifier: 't_magic_message',
                                  typeString: 'msg',
                                },
                              },
                              id: 509,
                              isConstant: false,
                              isLValue: false,
                              isPure: false,
                              lValueRequested: false,
                              memberName: 'value',
                              nodeType: 'MemberAccess',
                              src: '795:9:3',
                              typeDescriptions: {
                                typeIdentifier: 't_uint256',
                                typeString: 'uint256',
                              },
                            },
                            src: '776:28:3',
                            typeDescriptions: {
                              typeIdentifier: 't_uint256',
                              typeString: 'uint256',
                            },
                          },
                          id: 511,
                          nodeType: 'ExpressionStatement',
                          src: '776:28:3',
                        },
                        {
                          expression: {
                            arguments: [
                              {
                                commonType: {
                                  typeIdentifier: 't_uint256',
                                  typeString: 'uint256',
                                },
                                id: 521,
                                isConstant: false,
                                isLValue: false,
                                isPure: false,
                                lValueRequested: false,
                                leftExpression: {
                                  expression: {
                                    id: 518,
                                    name: 'msg',
                                    nodeType: 'Identifier',
                                    overloadedDeclarations: [],
                                    referencedDeclaration: 4294967281,
                                    src: '847:3:3',
                                    typeDescriptions: {
                                      typeIdentifier: 't_magic_message',
                                      typeString: 'msg',
                                    },
                                  },
                                  id: 519,
                                  isConstant: false,
                                  isLValue: false,
                                  isPure: false,
                                  lValueRequested: false,
                                  memberName: 'value',
                                  nodeType: 'MemberAccess',
                                  src: '847:9:3',
                                  typeDescriptions: {
                                    typeIdentifier: 't_uint256',
                                    typeString: 'uint256',
                                  },
                                },
                                nodeType: 'BinaryOperation',
                                operator: '*',
                                rightExpression: {
                                  hexValue: '32',
                                  id: 520,
                                  isConstant: false,
                                  isLValue: false,
                                  isPure: true,
                                  kind: 'number',
                                  lValueRequested: false,
                                  nodeType: 'Literal',
                                  src: '859:1:3',
                                  typeDescriptions: {
                                    typeIdentifier: 't_rational_2_by_1',
                                    typeString: 'int_const 2',
                                  },
                                  value: '2',
                                },
                                src: '847:13:3',
                                typeDescriptions: {
                                  typeIdentifier: 't_uint256',
                                  typeString: 'uint256',
                                },
                              },
                            ],
                            expression: {
                              argumentTypes: [
                                {
                                  typeIdentifier: 't_uint256',
                                  typeString: 'uint256',
                                },
                              ],
                              expression: {
                                arguments: [
                                  {
                                    expression: {
                                      id: 514,
                                      name: 'msg',
                                      nodeType: 'Identifier',
                                      overloadedDeclarations: [],
                                      referencedDeclaration: 4294967281,
                                      src: '826:3:3',
                                      typeDescriptions: {
                                        typeIdentifier: 't_magic_message',
                                        typeString: 'msg',
                                      },
                                    },
                                    id: 515,
                                    isConstant: false,
                                    isLValue: false,
                                    isPure: false,
                                    lValueRequested: false,
                                    memberName: 'sender',
                                    nodeType: 'MemberAccess',
                                    src: '826:10:3',
                                    typeDescriptions: {
                                      typeIdentifier: 't_address',
                                      typeString: 'address',
                                    },
                                  },
                                ],
                                expression: {
                                  argumentTypes: [
                                    {
                                      typeIdentifier: 't_address',
                                      typeString: 'address',
                                    },
                                  ],
                                  id: 513,
                                  isConstant: false,
                                  isLValue: false,
                                  isPure: true,
                                  lValueRequested: false,
                                  nodeType: 'ElementaryTypeNameExpression',
                                  src: '818:8:3',
                                  typeDescriptions: {
                                    typeIdentifier:
                                      't_type$_t_address_payable_$',
                                    typeString: 'type(address payable)',
                                  },
                                  typeName: {
                                    id: 512,
                                    name: 'address',
                                    nodeType: 'ElementaryTypeName',
                                    src: '818:8:3',
                                    stateMutability: 'payable',
                                    typeDescriptions: {},
                                  },
                                },
                                id: 516,
                                isConstant: false,
                                isLValue: false,
                                isPure: false,
                                kind: 'typeConversion',
                                lValueRequested: false,
                                names: [],
                                nodeType: 'FunctionCall',
                                src: '818:19:3',
                                tryCall: false,
                                typeDescriptions: {
                                  typeIdentifier: 't_address_payable',
                                  typeString: 'address payable',
                                },
                              },
                              id: 517,
                              isConstant: false,
                              isLValue: false,
                              isPure: false,
                              lValueRequested: false,
                              memberName: 'transfer',
                              nodeType: 'MemberAccess',
                              src: '818:28:3',
                              typeDescriptions: {
                                typeIdentifier:
                                  't_function_transfer_nonpayable$_t_uint256_$returns$__$',
                                typeString: 'function (uint256)',
                              },
                            },
                            id: 522,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            kind: 'functionCall',
                            lValueRequested: false,
                            names: [],
                            nodeType: 'FunctionCall',
                            src: '818:43:3',
                            tryCall: false,
                            typeDescriptions: {
                              typeIdentifier: 't_tuple$__$',
                              typeString: 'tuple()',
                            },
                          },
                          id: 523,
                          nodeType: 'ExpressionStatement',
                          src: '818:43:3',
                        },
                        {
                          expression: {
                            id: 526,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            leftHandSide: {
                              id: 524,
                              name: 'win',
                              nodeType: 'Identifier',
                              overloadedDeclarations: [],
                              referencedDeclaration: 499,
                              src: '875:3:3',
                              typeDescriptions: {
                                typeIdentifier: 't_bool',
                                typeString: 'bool',
                              },
                            },
                            nodeType: 'Assignment',
                            operator: '=',
                            rightHandSide: {
                              hexValue: '74727565',
                              id: 525,
                              isConstant: false,
                              isLValue: false,
                              isPure: true,
                              kind: 'bool',
                              lValueRequested: false,
                              nodeType: 'Literal',
                              src: '881:4:3',
                              typeDescriptions: {
                                typeIdentifier: 't_bool',
                                typeString: 'bool',
                              },
                              value: 'true',
                            },
                            src: '875:10:3',
                            typeDescriptions: {
                              typeIdentifier: 't_bool',
                              typeString: 'bool',
                            },
                          },
                          id: 527,
                          nodeType: 'ExpressionStatement',
                          src: '875:10:3',
                        },
                      ],
                    },
                  },
                  {
                    eventCall: {
                      arguments: [
                        {
                          expression: {
                            id: 541,
                            name: 'msg',
                            nodeType: 'Identifier',
                            overloadedDeclarations: [],
                            referencedDeclaration: 4294967281,
                            src: '1005:3:3',
                            typeDescriptions: {
                              typeIdentifier: 't_magic_message',
                              typeString: 'msg',
                            },
                          },
                          id: 542,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          memberName: 'sender',
                          nodeType: 'MemberAccess',
                          src: '1005:10:3',
                          typeDescriptions: {
                            typeIdentifier: 't_address',
                            typeString: 'address',
                          },
                        },
                        {
                          expression: {
                            id: 543,
                            name: 'msg',
                            nodeType: 'Identifier',
                            overloadedDeclarations: [],
                            referencedDeclaration: 4294967281,
                            src: '1017:3:3',
                            typeDescriptions: {
                              typeIdentifier: 't_magic_message',
                              typeString: 'msg',
                            },
                          },
                          id: 544,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          memberName: 'value',
                          nodeType: 'MemberAccess',
                          src: '1017:9:3',
                          typeDescriptions: {
                            typeIdentifier: 't_uint256',
                            typeString: 'uint256',
                          },
                        },
                        {
                          id: 545,
                          name: 'win',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: 499,
                          src: '1028:3:3',
                          typeDescriptions: {
                            typeIdentifier: 't_bool',
                            typeString: 'bool',
                          },
                        },
                        {
                          id: 546,
                          name: 'side',
                          nodeType: 'Identifier',
                          overloadedDeclarations: [],
                          referencedDeclaration: 467,
                          src: '1033:4:3',
                          typeDescriptions: {
                            typeIdentifier: 't_uint8',
                            typeString: 'uint8',
                          },
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: 't_address',
                            typeString: 'address',
                          },
                          {
                            typeIdentifier: 't_uint256',
                            typeString: 'uint256',
                          },
                          {
                            typeIdentifier: 't_bool',
                            typeString: 'bool',
                          },
                          {
                            typeIdentifier: 't_uint8',
                            typeString: 'uint8',
                          },
                        ],
                        id: 540,
                        name: 'bet',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 459,
                        src: '1001:3:3',
                        typeDescriptions: {
                          typeIdentifier:
                            't_function_event_nonpayable$_t_address_$_t_uint256_$_t_bool_$_t_uint8_$returns$__$',
                          typeString: 'function (address,uint256,bool,uint8)',
                        },
                      },
                      id: 547,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: 'functionCall',
                      lValueRequested: false,
                      names: [],
                      nodeType: 'FunctionCall',
                      src: '1001:37:3',
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: 't_tuple$__$',
                        typeString: 'tuple()',
                      },
                    },
                    id: 548,
                    nodeType: 'EmitStatement',
                    src: '996:42:3',
                  },
                ],
              },
              functionSelector: '638c0637',
              id: 550,
              implemented: true,
              kind: 'function',
              modifiers: [],
              name: 'flip',
              nameLocation: '482:4:3',
              nodeType: 'FunctionDefinition',
              parameters: {
                id: 468,
                nodeType: 'ParameterList',
                parameters: [
                  {
                    constant: false,
                    id: 467,
                    mutability: 'mutable',
                    name: 'side',
                    nameLocation: '493:4:3',
                    nodeType: 'VariableDeclaration',
                    scope: 550,
                    src: '487:10:3',
                    stateVariable: false,
                    storageLocation: 'default',
                    typeDescriptions: {
                      typeIdentifier: 't_uint8',
                      typeString: 'uint8',
                    },
                    typeName: {
                      id: 466,
                      name: 'uint8',
                      nodeType: 'ElementaryTypeName',
                      src: '487:5:3',
                      typeDescriptions: {
                        typeIdentifier: 't_uint8',
                        typeString: 'uint8',
                      },
                    },
                    visibility: 'internal',
                  },
                ],
                src: '486:12:3',
              },
              returnParameters: {
                id: 471,
                nodeType: 'ParameterList',
                parameters: [
                  {
                    constant: false,
                    id: 470,
                    mutability: 'mutable',
                    name: '',
                    nameLocation: '-1:-1:-1',
                    nodeType: 'VariableDeclaration',
                    scope: 550,
                    src: '522:4:3',
                    stateVariable: false,
                    storageLocation: 'default',
                    typeDescriptions: {
                      typeIdentifier: 't_bool',
                      typeString: 'bool',
                    },
                    typeName: {
                      id: 469,
                      name: 'bool',
                      nodeType: 'ElementaryTypeName',
                      src: '522:4:3',
                      typeDescriptions: {
                        typeIdentifier: 't_bool',
                        typeString: 'bool',
                      },
                    },
                    visibility: 'internal',
                  },
                ],
                src: '521:6:3',
              },
              scope: 634,
              src: '473:572:3',
              stateMutability: 'payable',
              virtual: false,
              visibility: 'public',
            },
            {
              body: {
                id: 586,
                nodeType: 'Block',
                src: '1137:150:3',
                statements: [
                  {
                    expression: {
                      arguments: [
                        {
                          expression: {
                            arguments: [
                              {
                                id: 565,
                                name: 'this',
                                nodeType: 'Identifier',
                                overloadedDeclarations: [],
                                referencedDeclaration: 4294967268,
                                src: '1184:4:3',
                                typeDescriptions: {
                                  typeIdentifier:
                                    't_contract$_FlipContract_$634',
                                  typeString: 'contract FlipContract',
                                },
                              },
                            ],
                            expression: {
                              argumentTypes: [
                                {
                                  typeIdentifier:
                                    't_contract$_FlipContract_$634',
                                  typeString: 'contract FlipContract',
                                },
                              ],
                              id: 564,
                              isConstant: false,
                              isLValue: false,
                              isPure: true,
                              lValueRequested: false,
                              nodeType: 'ElementaryTypeNameExpression',
                              src: '1176:7:3',
                              typeDescriptions: {
                                typeIdentifier: 't_type$_t_address_$',
                                typeString: 'type(address)',
                              },
                              typeName: {
                                id: 563,
                                name: 'address',
                                nodeType: 'ElementaryTypeName',
                                src: '1176:7:3',
                                typeDescriptions: {},
                              },
                            },
                            id: 566,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            kind: 'typeConversion',
                            lValueRequested: false,
                            names: [],
                            nodeType: 'FunctionCall',
                            src: '1176:13:3',
                            tryCall: false,
                            typeDescriptions: {
                              typeIdentifier: 't_address',
                              typeString: 'address',
                            },
                          },
                          id: 567,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          memberName: 'balance',
                          nodeType: 'MemberAccess',
                          src: '1176:21:3',
                          typeDescriptions: {
                            typeIdentifier: 't_uint256',
                            typeString: 'uint256',
                          },
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: 't_uint256',
                            typeString: 'uint256',
                          },
                        ],
                        expression: {
                          arguments: [
                            {
                              expression: {
                                id: 559,
                                name: 'msg',
                                nodeType: 'Identifier',
                                overloadedDeclarations: [],
                                referencedDeclaration: 4294967281,
                                src: '1155:3:3',
                                typeDescriptions: {
                                  typeIdentifier: 't_magic_message',
                                  typeString: 'msg',
                                },
                              },
                              id: 560,
                              isConstant: false,
                              isLValue: false,
                              isPure: false,
                              lValueRequested: false,
                              memberName: 'sender',
                              nodeType: 'MemberAccess',
                              src: '1155:10:3',
                              typeDescriptions: {
                                typeIdentifier: 't_address',
                                typeString: 'address',
                              },
                            },
                          ],
                          expression: {
                            argumentTypes: [
                              {
                                typeIdentifier: 't_address',
                                typeString: 'address',
                              },
                            ],
                            id: 558,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            lValueRequested: false,
                            nodeType: 'ElementaryTypeNameExpression',
                            src: '1147:8:3',
                            typeDescriptions: {
                              typeIdentifier: 't_type$_t_address_payable_$',
                              typeString: 'type(address payable)',
                            },
                            typeName: {
                              id: 557,
                              name: 'address',
                              nodeType: 'ElementaryTypeName',
                              src: '1147:8:3',
                              stateMutability: 'payable',
                              typeDescriptions: {},
                            },
                          },
                          id: 561,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          kind: 'typeConversion',
                          lValueRequested: false,
                          names: [],
                          nodeType: 'FunctionCall',
                          src: '1147:19:3',
                          tryCall: false,
                          typeDescriptions: {
                            typeIdentifier: 't_address_payable',
                            typeString: 'address payable',
                          },
                        },
                        id: 562,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberName: 'transfer',
                        nodeType: 'MemberAccess',
                        src: '1147:28:3',
                        typeDescriptions: {
                          typeIdentifier:
                            't_function_transfer_nonpayable$_t_uint256_$returns$__$',
                          typeString: 'function (uint256)',
                        },
                      },
                      id: 568,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: 'functionCall',
                      lValueRequested: false,
                      names: [],
                      nodeType: 'FunctionCall',
                      src: '1147:51:3',
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: 't_tuple$__$',
                        typeString: 'tuple()',
                      },
                    },
                    id: 569,
                    nodeType: 'ExpressionStatement',
                    src: '1147:51:3',
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          commonType: {
                            typeIdentifier: 't_uint256',
                            typeString: 'uint256',
                          },
                          id: 577,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          leftExpression: {
                            expression: {
                              arguments: [
                                {
                                  id: 573,
                                  name: 'this',
                                  nodeType: 'Identifier',
                                  overloadedDeclarations: [],
                                  referencedDeclaration: 4294967268,
                                  src: '1223:4:3',
                                  typeDescriptions: {
                                    typeIdentifier:
                                      't_contract$_FlipContract_$634',
                                    typeString: 'contract FlipContract',
                                  },
                                },
                              ],
                              expression: {
                                argumentTypes: [
                                  {
                                    typeIdentifier:
                                      't_contract$_FlipContract_$634',
                                    typeString: 'contract FlipContract',
                                  },
                                ],
                                id: 572,
                                isConstant: false,
                                isLValue: false,
                                isPure: true,
                                lValueRequested: false,
                                nodeType: 'ElementaryTypeNameExpression',
                                src: '1215:7:3',
                                typeDescriptions: {
                                  typeIdentifier: 't_type$_t_address_$',
                                  typeString: 'type(address)',
                                },
                                typeName: {
                                  id: 571,
                                  name: 'address',
                                  nodeType: 'ElementaryTypeName',
                                  src: '1215:7:3',
                                  typeDescriptions: {},
                                },
                              },
                              id: 574,
                              isConstant: false,
                              isLValue: false,
                              isPure: false,
                              kind: 'typeConversion',
                              lValueRequested: false,
                              names: [],
                              nodeType: 'FunctionCall',
                              src: '1215:13:3',
                              tryCall: false,
                              typeDescriptions: {
                                typeIdentifier: 't_address',
                                typeString: 'address',
                              },
                            },
                            id: 575,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            memberName: 'balance',
                            nodeType: 'MemberAccess',
                            src: '1215:21:3',
                            typeDescriptions: {
                              typeIdentifier: 't_uint256',
                              typeString: 'uint256',
                            },
                          },
                          nodeType: 'BinaryOperation',
                          operator: '==',
                          rightExpression: {
                            hexValue: '30',
                            id: 576,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: 'number',
                            lValueRequested: false,
                            nodeType: 'Literal',
                            src: '1240:1:3',
                            typeDescriptions: {
                              typeIdentifier: 't_rational_0_by_1',
                              typeString: 'int_const 0',
                            },
                            value: '0',
                          },
                          src: '1215:26:3',
                          typeDescriptions: {
                            typeIdentifier: 't_bool',
                            typeString: 'bool',
                          },
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: 't_bool',
                            typeString: 'bool',
                          },
                        ],
                        id: 570,
                        name: 'assert',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 4294967293,
                        src: '1208:6:3',
                        typeDescriptions: {
                          typeIdentifier:
                            't_function_assert_pure$_t_bool_$returns$__$',
                          typeString: 'function (bool) pure',
                        },
                      },
                      id: 578,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: 'functionCall',
                      lValueRequested: false,
                      names: [],
                      nodeType: 'FunctionCall',
                      src: '1208:34:3',
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: 't_tuple$__$',
                        typeString: 'tuple()',
                      },
                    },
                    id: 579,
                    nodeType: 'ExpressionStatement',
                    src: '1208:34:3',
                  },
                  {
                    expression: {
                      expression: {
                        arguments: [
                          {
                            id: 582,
                            name: 'this',
                            nodeType: 'Identifier',
                            overloadedDeclarations: [],
                            referencedDeclaration: 4294967268,
                            src: '1267:4:3',
                            typeDescriptions: {
                              typeIdentifier: 't_contract$_FlipContract_$634',
                              typeString: 'contract FlipContract',
                            },
                          },
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier: 't_contract$_FlipContract_$634',
                              typeString: 'contract FlipContract',
                            },
                          ],
                          id: 581,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          lValueRequested: false,
                          nodeType: 'ElementaryTypeNameExpression',
                          src: '1259:7:3',
                          typeDescriptions: {
                            typeIdentifier: 't_type$_t_address_$',
                            typeString: 'type(address)',
                          },
                          typeName: {
                            id: 580,
                            name: 'address',
                            nodeType: 'ElementaryTypeName',
                            src: '1259:7:3',
                            typeDescriptions: {},
                          },
                        },
                        id: 583,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        kind: 'typeConversion',
                        lValueRequested: false,
                        names: [],
                        nodeType: 'FunctionCall',
                        src: '1259:13:3',
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier: 't_address',
                          typeString: 'address',
                        },
                      },
                      id: 584,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberName: 'balance',
                      nodeType: 'MemberAccess',
                      src: '1259:21:3',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256',
                      },
                    },
                    functionReturnParameters: 556,
                    id: 585,
                    nodeType: 'Return',
                    src: '1252:28:3',
                  },
                ],
              },
              functionSelector: '853828b6',
              id: 587,
              implemented: true,
              kind: 'function',
              modifiers: [
                {
                  id: 553,
                  kind: 'modifierInvocation',
                  modifierName: {
                    id: 552,
                    name: 'onlyOwner',
                    nodeType: 'IdentifierPath',
                    referencedDeclaration: 46,
                    src: '1114:9:3',
                  },
                  nodeType: 'ModifierInvocation',
                  src: '1114:9:3',
                },
              ],
              name: 'withdrawAll',
              nameLocation: '1093:11:3',
              nodeType: 'FunctionDefinition',
              parameters: {
                id: 551,
                nodeType: 'ParameterList',
                parameters: [],
                src: '1104:2:3',
              },
              returnParameters: {
                id: 556,
                nodeType: 'ParameterList',
                parameters: [
                  {
                    constant: false,
                    id: 555,
                    mutability: 'mutable',
                    name: '',
                    nameLocation: '-1:-1:-1',
                    nodeType: 'VariableDeclaration',
                    scope: 587,
                    src: '1132:4:3',
                    stateVariable: false,
                    storageLocation: 'default',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256',
                    },
                    typeName: {
                      id: 554,
                      name: 'uint',
                      nodeType: 'ElementaryTypeName',
                      src: '1132:4:3',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256',
                      },
                    },
                    visibility: 'internal',
                  },
                ],
                src: '1131:6:3',
              },
              scope: 634,
              src: '1084:203:3',
              stateMutability: 'nonpayable',
              virtual: false,
              visibility: 'public',
            },
            {
              body: {
                id: 594,
                nodeType: 'Block',
                src: '1392:39:3',
                statements: [
                  {
                    expression: {
                      id: 592,
                      name: 'ContractBalance',
                      nodeType: 'Identifier',
                      overloadedDeclarations: [],
                      referencedDeclaration: 449,
                      src: '1409:15:3',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256',
                      },
                    },
                    functionReturnParameters: 591,
                    id: 593,
                    nodeType: 'Return',
                    src: '1402:22:3',
                  },
                ],
              },
              functionSelector: '12065fe0',
              id: 595,
              implemented: true,
              kind: 'function',
              modifiers: [],
              name: 'getBalance',
              nameLocation: '1352:10:3',
              nodeType: 'FunctionDefinition',
              parameters: {
                id: 588,
                nodeType: 'ParameterList',
                parameters: [],
                src: '1362:2:3',
              },
              returnParameters: {
                id: 591,
                nodeType: 'ParameterList',
                parameters: [
                  {
                    constant: false,
                    id: 590,
                    mutability: 'mutable',
                    name: '',
                    nameLocation: '-1:-1:-1',
                    nodeType: 'VariableDeclaration',
                    scope: 595,
                    src: '1386:4:3',
                    stateVariable: false,
                    storageLocation: 'default',
                    typeDescriptions: {
                      typeIdentifier: 't_uint256',
                      typeString: 'uint256',
                    },
                    typeName: {
                      id: 589,
                      name: 'uint',
                      nodeType: 'ElementaryTypeName',
                      src: '1386:4:3',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256',
                      },
                    },
                    visibility: 'internal',
                  },
                ],
                src: '1385:6:3',
              },
              scope: 634,
              src: '1343:88:3',
              stateMutability: 'view',
              virtual: false,
              visibility: 'public',
            },
            {
              body: {
                id: 632,
                nodeType: 'Block',
                src: '1510:200:3',
                statements: [
                  {
                    expression: {
                      arguments: [
                        {
                          commonType: {
                            typeIdentifier: 't_uint256',
                            typeString: 'uint256',
                          },
                          id: 604,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          leftExpression: {
                            expression: {
                              id: 601,
                              name: 'msg',
                              nodeType: 'Identifier',
                              overloadedDeclarations: [],
                              referencedDeclaration: 4294967281,
                              src: '1528:3:3',
                              typeDescriptions: {
                                typeIdentifier: 't_magic_message',
                                typeString: 'msg',
                              },
                            },
                            id: 602,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            memberName: 'value',
                            nodeType: 'MemberAccess',
                            src: '1528:9:3',
                            typeDescriptions: {
                              typeIdentifier: 't_uint256',
                              typeString: 'uint256',
                            },
                          },
                          nodeType: 'BinaryOperation',
                          operator: '!=',
                          rightExpression: {
                            hexValue: '30',
                            id: 603,
                            isConstant: false,
                            isLValue: false,
                            isPure: true,
                            kind: 'number',
                            lValueRequested: false,
                            nodeType: 'Literal',
                            src: '1541:1:3',
                            typeDescriptions: {
                              typeIdentifier: 't_rational_0_by_1',
                              typeString: 'int_const 0',
                            },
                            value: '0',
                          },
                          src: '1528:14:3',
                          typeDescriptions: {
                            typeIdentifier: 't_bool',
                            typeString: 'bool',
                          },
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: 't_bool',
                            typeString: 'bool',
                          },
                        ],
                        id: 600,
                        name: 'require',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [4294967278, 4294967278],
                        referencedDeclaration: 4294967278,
                        src: '1520:7:3',
                        typeDescriptions: {
                          typeIdentifier:
                            't_function_require_pure$_t_bool_$returns$__$',
                          typeString: 'function (bool) pure',
                        },
                      },
                      id: 605,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: 'functionCall',
                      lValueRequested: false,
                      names: [],
                      nodeType: 'FunctionCall',
                      src: '1520:23:3',
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: 't_tuple$__$',
                        typeString: 'tuple()',
                      },
                    },
                    id: 606,
                    nodeType: 'ExpressionStatement',
                    src: '1520:23:3',
                  },
                  {
                    expression: {
                      id: 613,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      leftHandSide: {
                        id: 607,
                        name: 'ContractBalance',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 449,
                        src: '1553:15:3',
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256',
                        },
                      },
                      nodeType: 'Assignment',
                      operator: '=',
                      rightHandSide: {
                        arguments: [
                          {
                            expression: {
                              id: 610,
                              name: 'msg',
                              nodeType: 'Identifier',
                              overloadedDeclarations: [],
                              referencedDeclaration: 4294967281,
                              src: '1591:3:3',
                              typeDescriptions: {
                                typeIdentifier: 't_magic_message',
                                typeString: 'msg',
                              },
                            },
                            id: 611,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            memberName: 'value',
                            nodeType: 'MemberAccess',
                            src: '1591:9:3',
                            typeDescriptions: {
                              typeIdentifier: 't_uint256',
                              typeString: 'uint256',
                            },
                          },
                        ],
                        expression: {
                          argumentTypes: [
                            {
                              typeIdentifier: 't_uint256',
                              typeString: 'uint256',
                            },
                          ],
                          expression: {
                            id: 608,
                            name: 'ContractBalance',
                            nodeType: 'Identifier',
                            overloadedDeclarations: [],
                            referencedDeclaration: 449,
                            src: '1571:15:3',
                            typeDescriptions: {
                              typeIdentifier: 't_uint256',
                              typeString: 'uint256',
                            },
                          },
                          id: 609,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          memberName: 'add',
                          nodeType: 'MemberAccess',
                          referencedDeclaration: 302,
                          src: '1571:19:3',
                          typeDescriptions: {
                            typeIdentifier:
                              't_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$',
                            typeString:
                              'function (uint256,uint256) pure returns (uint256)',
                          },
                        },
                        id: 612,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        kind: 'functionCall',
                        lValueRequested: false,
                        names: [],
                        nodeType: 'FunctionCall',
                        src: '1571:30:3',
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier: 't_uint256',
                          typeString: 'uint256',
                        },
                      },
                      src: '1553:48:3',
                      typeDescriptions: {
                        typeIdentifier: 't_uint256',
                        typeString: 'uint256',
                      },
                    },
                    id: 614,
                    nodeType: 'ExpressionStatement',
                    src: '1553:48:3',
                  },
                  {
                    eventCall: {
                      arguments: [
                        {
                          expression: {
                            id: 616,
                            name: 'msg',
                            nodeType: 'Identifier',
                            overloadedDeclarations: [],
                            referencedDeclaration: 4294967281,
                            src: '1623:3:3',
                            typeDescriptions: {
                              typeIdentifier: 't_magic_message',
                              typeString: 'msg',
                            },
                          },
                          id: 617,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          memberName: 'sender',
                          nodeType: 'MemberAccess',
                          src: '1623:10:3',
                          typeDescriptions: {
                            typeIdentifier: 't_address',
                            typeString: 'address',
                          },
                        },
                        {
                          expression: {
                            id: 618,
                            name: 'msg',
                            nodeType: 'Identifier',
                            overloadedDeclarations: [],
                            referencedDeclaration: 4294967281,
                            src: '1635:3:3',
                            typeDescriptions: {
                              typeIdentifier: 't_magic_message',
                              typeString: 'msg',
                            },
                          },
                          id: 619,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          memberName: 'value',
                          nodeType: 'MemberAccess',
                          src: '1635:9:3',
                          typeDescriptions: {
                            typeIdentifier: 't_uint256',
                            typeString: 'uint256',
                          },
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: 't_address',
                            typeString: 'address',
                          },
                          {
                            typeIdentifier: 't_uint256',
                            typeString: 'uint256',
                          },
                        ],
                        id: 615,
                        name: 'funded',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 465,
                        src: '1616:6:3',
                        typeDescriptions: {
                          typeIdentifier:
                            't_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$',
                          typeString: 'function (address,uint256)',
                        },
                      },
                      id: 620,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: 'functionCall',
                      lValueRequested: false,
                      names: [],
                      nodeType: 'FunctionCall',
                      src: '1616:29:3',
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: 't_tuple$__$',
                        typeString: 'tuple()',
                      },
                    },
                    id: 621,
                    nodeType: 'EmitStatement',
                    src: '1611:34:3',
                  },
                  {
                    expression: {
                      arguments: [
                        {
                          commonType: {
                            typeIdentifier: 't_uint256',
                            typeString: 'uint256',
                          },
                          id: 629,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          leftExpression: {
                            id: 623,
                            name: 'ContractBalance',
                            nodeType: 'Identifier',
                            overloadedDeclarations: [],
                            referencedDeclaration: 449,
                            src: '1662:15:3',
                            typeDescriptions: {
                              typeIdentifier: 't_uint256',
                              typeString: 'uint256',
                            },
                          },
                          nodeType: 'BinaryOperation',
                          operator: '==',
                          rightExpression: {
                            expression: {
                              arguments: [
                                {
                                  id: 626,
                                  name: 'this',
                                  nodeType: 'Identifier',
                                  overloadedDeclarations: [],
                                  referencedDeclaration: 4294967268,
                                  src: '1689:4:3',
                                  typeDescriptions: {
                                    typeIdentifier:
                                      't_contract$_FlipContract_$634',
                                    typeString: 'contract FlipContract',
                                  },
                                },
                              ],
                              expression: {
                                argumentTypes: [
                                  {
                                    typeIdentifier:
                                      't_contract$_FlipContract_$634',
                                    typeString: 'contract FlipContract',
                                  },
                                ],
                                id: 625,
                                isConstant: false,
                                isLValue: false,
                                isPure: true,
                                lValueRequested: false,
                                nodeType: 'ElementaryTypeNameExpression',
                                src: '1681:7:3',
                                typeDescriptions: {
                                  typeIdentifier: 't_type$_t_address_$',
                                  typeString: 'type(address)',
                                },
                                typeName: {
                                  id: 624,
                                  name: 'address',
                                  nodeType: 'ElementaryTypeName',
                                  src: '1681:7:3',
                                  typeDescriptions: {},
                                },
                              },
                              id: 627,
                              isConstant: false,
                              isLValue: false,
                              isPure: false,
                              kind: 'typeConversion',
                              lValueRequested: false,
                              names: [],
                              nodeType: 'FunctionCall',
                              src: '1681:13:3',
                              tryCall: false,
                              typeDescriptions: {
                                typeIdentifier: 't_address',
                                typeString: 'address',
                              },
                            },
                            id: 628,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            lValueRequested: false,
                            memberName: 'balance',
                            nodeType: 'MemberAccess',
                            src: '1681:21:3',
                            typeDescriptions: {
                              typeIdentifier: 't_uint256',
                              typeString: 'uint256',
                            },
                          },
                          src: '1662:40:3',
                          typeDescriptions: {
                            typeIdentifier: 't_bool',
                            typeString: 'bool',
                          },
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: 't_bool',
                            typeString: 'bool',
                          },
                        ],
                        id: 622,
                        name: 'assert',
                        nodeType: 'Identifier',
                        overloadedDeclarations: [],
                        referencedDeclaration: 4294967293,
                        src: '1655:6:3',
                        typeDescriptions: {
                          typeIdentifier:
                            't_function_assert_pure$_t_bool_$returns$__$',
                          typeString: 'function (bool) pure',
                        },
                      },
                      id: 630,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: 'functionCall',
                      lValueRequested: false,
                      names: [],
                      nodeType: 'FunctionCall',
                      src: '1655:48:3',
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: 't_tuple$__$',
                        typeString: 'tuple()',
                      },
                    },
                    id: 631,
                    nodeType: 'ExpressionStatement',
                    src: '1655:48:3',
                  },
                ],
              },
              functionSelector: 'bd097e21',
              id: 633,
              implemented: true,
              kind: 'function',
              modifiers: [
                {
                  id: 598,
                  kind: 'modifierInvocation',
                  modifierName: {
                    id: 597,
                    name: 'onlyOwner',
                    nodeType: 'IdentifierPath',
                    referencedDeclaration: 46,
                    src: '1500:9:3',
                  },
                  nodeType: 'ModifierInvocation',
                  src: '1500:9:3',
                },
              ],
              name: 'fundContract',
              nameLocation: '1470:12:3',
              nodeType: 'FunctionDefinition',
              parameters: {
                id: 596,
                nodeType: 'ParameterList',
                parameters: [],
                src: '1482:2:3',
              },
              returnParameters: {
                id: 599,
                nodeType: 'ParameterList',
                parameters: [],
                src: '1510:0:3',
              },
              scope: 634,
              src: '1461:249:3',
              stateMutability: 'payable',
              virtual: false,
              visibility: 'public',
            },
          ],
          scope: 635,
          src: '175:1538:3',
          usedErrors: [],
        },
      ],
      src: '0:1713:3',
    },
    compiler: {
      name: 'solc',
      version: '0.8.10+commit.fc410830.Emscripten.clang',
    },
    networks: {
      5777: {
        events: {
          '0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0':
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
          '0x271b3e8d94a67ce5e9cee03d78c310019308ea7075468a4eb2bac8b027b14c4d':
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
          '0xed7d0ddcc17abdb3935a0a23cd93e91b449dfeac7fd0def9f481ed5b37e18c4d':
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
        },
        links: {},
        address: '0x5a9c83FdC4d8906E003cd1e4D18Ff3425C65684D',
        transactionHash:
          '0x36e9400cff4e31ea32fcab07236cad37db452fa258d616687d02b1576c7de3ce',
      },
    },
    schemaVersion: '3.4.3',
    updatedAt: '2021-12-16T04:12:05.048Z',
    networkType: 'ethereum',
    devdoc: {
      kind: 'dev',
      methods: {
        'owner()': {
          details: 'Returns the address of the current owner.',
        },
        'renounceOwnership()': {
          details:
            'Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.',
        },
        'transferOwnership(address)': {
          details:
            'Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.',
        },
      },
      version: 1,
    },
    userdoc: {
      kind: 'user',
      methods: {},
      version: 1,
    },
  },
];
