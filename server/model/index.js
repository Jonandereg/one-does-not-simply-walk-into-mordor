const mordor = [
  ['-', '-', '-', 'O', '-', '-', '-', '-', '-', 'O'],
  ['-', 'O', '-', '-', '-', 'O', '-', 'D', '-', '-'],
  ['-', '-', '-', '-', 'O', '-', '-', 'O', '-', '-'],
  ['-', 'O', '-', 'O', '-', '-', '-', '-', '-', '-'],
  ['-', '-', '-', '-', '-', 'O', '-', 'O', '-', '-'],
  ['F', '-', '-', 'O', '-', '-', '-', '-', '-', 'O'],
  ['-', '-', 'O', '-', '-', '-', '-', '-', '-', '-'],
  ['-', '-', '-', '-', '-', '-', '-', 'O', '-', '-'],
  ['-', 'O', '-', '-', 'O', 'O', '-', '-', '-', '-'],
  ['-', '-', '-', '-', '-', '-', '-', '-', 'O', '-']
];

let result;
function moveResult (moves) {
  let frodoColumn = 5;
  let frodoRow = 0;

  for (let i = 0; i < moves.length; i++) {
    let nextMove;
    switch (moves[i]) {
    case 'n':
      nextMove = mordor[frodoColumn - 1][frodoRow];
      moveChecker(nextMove);
      if (result) return result;
      else {
        mordor[frodoColumn][frodoRow] = '-';
        frodoColumn--;
        mordor[frodoColumn][frodoRow] = 'F';
        break;
      }
    case 's':
      nextMove = mordor[frodoColumn + 1][frodoRow];
      moveChecker(nextMove);
      if (result) return result;
      else {
        mordor[frodoColumn][frodoRow] = '-';
        frodoColumn++;
        mordor[frodoColumn][frodoRow] = 'F';
        break;
      }
    case 'e':
      nextMove = mordor[frodoColumn][frodoRow + 1];
      moveChecker(nextMove);
      if (result) return result;
      else {
        mordor[frodoColumn][frodoRow] = '-';
        frodoRow++;
        mordor[frodoColumn][frodoRow] = 'F';
        break;
      }
    case 'w':
      nextMove = mordor[frodoColumn][frodoRow - 1];
      moveChecker(nextMove);
      if (result) return result;
      else {
        mordor[frodoColumn][frodoRow] = '-';
        frodoRow--;
        mordor[frodoColumn][frodoRow] = 'F';
        break;
      }
    }
    if (i === moves.length - 1 && !result) {
      result = 'Frodo Remains lost in the darkness of mordor';
    }
    if (result) return result;
  }

  function moveChecker (nextMove) {
    if (!nextMove) {
      result = 'You Have left the borders of mordor without destrying the ring ';
    } else if (nextMove === 'O') {
      result = 'an Orc has Capture Frodo, Fall to despair';
    } else if (nextMove === 'D') {
      result = 'You DID IT, YOU HELPED FRODO DESTROY THE RING AND FREE MIDDLE EARTH';
    }
    return result;
  }
}

module.exports = moveResult;
