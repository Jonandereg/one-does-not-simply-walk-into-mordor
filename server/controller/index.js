const moveResult = require('../model');

const moveFrodo = async (req, res) => {
  try {
    const moves = ['e', 'e', 'n', 'e', 'e', 'n', 'e', 'e', 'n', 'n', 'e'];
    res.send(moveResult(moves));
  } catch (error) {
    console.log(error); // eslint-disable-line no-console
  }
};

module.exports = { moveFrodo };
