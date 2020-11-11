const moveResult = require('../model');

const moveFrodo = async (req, res) => {
  try {
    const moves = req.body;

    res.send(moveResult(moves));
  } catch (error) {
    console.log(error); // eslint-disable-line no-console
  }
};

module.exports = { moveFrodo };
