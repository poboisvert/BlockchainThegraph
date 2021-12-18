const { contractInstance, web3 } = require('./smartcontract');

// Assign ownership to the new customer
const flip = async (code, oldCustomer, newCustomer) => {
  const accounts = await web3.eth.getAccounts();

  console.log(accounts[0]);

  var config = {
    value: web3.utils.toWei('0.1', 'ether'),
  };

  const bet = await contractInstance.methods.flip(1).send(config);

  const balance = await web3.eth.getBalance(
    '0x21be520c5c73Be7F24D136d838FA9B655fd0AEbD'
  );

  //console.log('BET', bet);
  console.log('Balance is ', balance);
  //const gas = console.log(bet.gasUsed);
  //const result = console.log(bet.events.bet.returnValues);
  return bet;
};

module.exports = {
  flip,
};
