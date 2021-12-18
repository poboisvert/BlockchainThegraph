const crypto = require('crypto');
// Blockchain utils
const { flip } = require('../utils/blockChainUtils');

/**
 * Description: Create Product
 * Request:     POST /app/add/product
 * Send:        JSON object which contains product details with code
 * Receive:     Success or error message (JSON) with data
 */
const flip_req = async (req, res) => {
  try {
    let res = await flip();
    //console.log(res);
    if (!res) {
      throw new Error('Something is wrong in the controller');
    }
    return res;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  flip_req,
};
