const express = require('express');
const path = require('path');

const { flip_req } = require('../controller/app.controller');

const router = express.Router();

async function wait(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

router.get('/flip_req', async function (req, res, next) {
  result = await flip_req();

  const data = result.events.bet.returnValues.win;

  console.log('APP.ROUTE', data);

  res.render('pages/index', {
    result: data,
  });
});

module.exports = router;
