var web3 = new Web3();
web3.setProvider(new Web3.providers.WebsocketProvider('ws://localhost:8545'));

$(document).ready(function () {
  var firstAccount;

  web3.eth.getAccounts().then((e) => {
    firstAccount = e[0];
  });

  contractInstance = new web3.eth.Contract(
    abi,
    '0xf45324e9081a70715EE9aaDFfB64379F26CB89e2',
    { from: '0xa889A3C8436bD043E2c5F2250f5b2041cDab767F' }
  );
  console.log(contractInstance);
});

// Listener Buttons
$(document).ready(function () {
  $('#flip_button').click(flip);
  $('#fund_contract_button').click(fundContract);
  $('#withdraw_button').click(withdrawAll);
});

// Get Balance for HTML
if (web3.eth.getAccounts()) {
  console.log('Active Account');

  web3.eth
    .getBalance('0xf45324e9081a70715EE9aaDFfB64379F26CB89e2')
    .then(function (result) {
      $('#jackpot_output').text(web3.utils.fromWei(result, 'ether') + ' Ether');
    });
}

// Flip function
function flip() {
  var betAmount = $('#bet_input').val();
  console.log(betAmount);
  var config = {
    value: web3.utils.toWei(betAmount, 'ether'),
  };

  var MyContract = new web3.eth.Contract(
    abi,
    '0xf45324e9081a70715EE9aaDFfB64379F26CB89e2'
  );

  MyContract.methods.flip().send(config);
}

function fundContract() {
  var fund = $('#fund_input').val();
  var config = {
    value: web3.utils.toWei(fund, 'ether'),
  };
  contractInstance.methods
    .fundContract()
    .send(config)
    .on('transactionHash', function (hash) {
      console.log(hash);
    })
    .on('confirmation', function (confirmationNr) {
      console.log(confirmationNr);
    })
    .on('receipt', function (receipt) {
      console.log(receipt);
    });
}

function withdrawAll() {
  contractInstance.methods.withdrawAll().send();
}
