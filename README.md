# Thegraph & Web3 - Payments Decentralization

![preview](web.png)

> This project will be an intriduction to thegraph, solidity and web3 in general

## Why this project

![logo](TheGraph_logo.png)

### Cell Phones in Africa: Communication Lifeline vs land line

- https://www.pewresearch.org/global/2015/04/15/cell-phones-in-africa-communication-lifeline/
- https://www.cnn.com/2012/10/04/tech/mobile/africa-mobile-opinion/index.html

## ABI.json

- https://rinkeby.etherscan.io/address/0x869498c3Bb540BF94861EaB9A82122BFB1EF0fe7#code

- https://ethereum.stackexchange.com/questions/71060/sending-the-bool-to-function-payable-in-another-contract

## Step 1: Contract Compilation

- truffle init

- sudo truffle compile

- truffle migrate

## Step 2: Setup thegraph

### Ganache CLI

Install the IDE app OR below

- npm install -g ganache-cli

- ganache-cli -h 0.0.0.0

# Will install the lastest compiler from the config

- Truffle Contract: 0x9770ACd3Dca052716619bE9809C116064fF2d227

- Path: src/contracts/truffle_abis/FlipContract.json

# Available Accounts

(0) 0xeCE964373546E2EdC41C3dfe50e4261f160CD78E (100 ETH)

# Private Keys

(0) 0x616edf5483742589ab1c7648fc823077ac13125260f1ab77d26c928fb4672eaf

### Local thegraph

- https://github.com/graphprotocol/graph-node/blob/master/docker/docker-compose.yml

Read more: https://medium.com/blockrocket/dapp-development-with-a-local-subgraph-ganache-setup-566a4d4cbb

```
docker run -it \
  -e postgres_host=host.docker.internal \
  -e postgres_port=5432 \
  -e postgres_user=graph-node \
  -e postgres_pass=oh-hello \
  -e postgres_db=graph-node \
  -e ipfs=host.docker.internal:5001 \
  -e ethereum=mainnet:http://localhost:8545/ \
  graphprotocol/graph-node:latest

```

- docker-compose up

## The graph

- graph init --product hosted-service poboisvert/project_name

- ABI is in src/truffle_abis

- Contract ID
  ![preview](truffle_migrate.png)

- sh run-graph-node.sh

## See if it works - Console

- truffle console

- const truffleTutorial = await TruffleTutorial.deployed()

- const address = await truffleTutorial.address

- address

> '0xA91C04AEe928bF04f7457970f99bd8925Ec46B6f'

- const FlipContract = await FlipContract.deployed()

- const address_flip = await FlipContract.address

- address_flip

- const message = await truffleTutorial.message()

- message

> 'Hello World!'

## Thegraph local

- graph init --contract-name FlipContract \ --index-events --studio \ --from-contract 0xf45324e9081a70715EE9aaDFfB64379F26CB89e2
- cd subname
- npm run create-local
- Clean && npm run codegen
- npm run deploy-local

## Funding Manual

cd local_contract
FlipContract = await FlipContract.deployed()
FlipContract.fundContract({ value: 100000000000000000 });

# Issues

- https://ethereum.stackexchange.com/questions/99409/failed-to-deploy-to-graph-node-ethereum-network-not-supported-by-registrar-mai
