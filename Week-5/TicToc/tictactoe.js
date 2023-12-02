let playerTurn = true;
let computerMoveTimeout = 0;

const GameStatus = {
  HumanWin: 'HumanWin',
  ComputerWin: 'ComputerWin',
  Draw: 'Draw',
  Continue: 'Continue'
};

function domLoaded() {
  const newGameButton = document.getElementById('newGameButton');
  newGameButton.addEventListener('click', newGame);
  
  const gameBoardButtons = getGameBoardButtons();
  for (const button of gameBoardButtons) {
    button.addEventListener('click', boardButtonClicked);
  }

  newGame();
}

function getGameBoardButtons() {
  const buttons = [];
  for (let i = 1; i <= 9; i++) {
    buttons.push(document.getElementById('button' + i));
  }
  return buttons;
}

function checkForWinner() {
  const gameBoardButtons = getGameBoardButtons();
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  for (const combo of winningCombos) {
    const [a, b, c] = combo;
    if (gameBoardButtons[a].innerHTML === 'X' &&
        gameBoardButtons[b].innerHTML === 'X' &&
        gameBoardButtons[c].innerHTML === 'X') {
      return GameStatus.HumanWin;
    }
    if (gameBoardButtons[a].innerHTML === 'O' &&
        gameBoardButtons[b].innerHTML === 'O' &&
        gameBoardButtons[c].innerHTML === 'O') {
      return GameStatus.ComputerWin;
    }
  }

  const isDraw = gameBoardButtons.every(button => button.innerHTML !== '');
  return isDraw ? GameStatus.Draw : GameStatus.Continue;
}

function newGame() {
  if (computerMoveTimeout !== 0) {
    clearTimeout(computerMoveTimeout);
    computerMoveTimeout = 0;
  }

  const gameBoardButtons = getGameBoardButtons();
  for (const button of gameBoardButtons) {
    button.innerHTML = '';
    button.classList.remove('x', 'o');
    button.disabled = false;
  }

  playerTurn = true;
  document.getElementById('turnInfo').textContent = 'Your turn';
}

function boardButtonClicked() {
  if (playerTurn) {
    const button = this;
    button.innerHTML = 'X';
    button.classList.add('x');
    button.disabled = true;
    switchTurn();
  }
}

function switchTurn() {
  const status = checkForWinner();
  if (status === GameStatus.Continue) {
    playerTurn = !playerTurn;
    const turnInfo = document.getElementById('turnInfo');
    turnInfo.textContent = playerTurn ? 'Your turn' : "Computer's turn";

    if (!playerTurn) {
      computerMoveTimeout = setTimeout(makeComputerMove, 1000);
    }
  } else {
    playerTurn = false;
    const turnInfo = document.getElementById('turnInfo');
    if (status === GameStatus.HumanWin) {
      turnInfo.textContent = 'You win!';
    } else if (status === GameStatus.ComputerWin) {
      turnInfo.textContent = 'Computer wins!';
    } else {
      turnInfo.textContent = 'Draw game';
    }
  }
}

function makeComputerMove() {
  const gameBoardButtons = getGameBoardButtons();
  const availableButtons = gameBoardButtons.filter(button => button.innerHTML === '');
  const randomIndex = Math.floor(Math.random() * availableButtons.length);
  const selectedButton = availableButtons[randomIndex];
  
  selectedButton.innerHTML = 'O';
  selectedButton.classList.add('o');
  selectedButton.disabled = true;

  switchTurn();
}

document.addEventListener('DOMContentLoaded', domLoaded);
