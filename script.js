const gameBoard = document.getElementById('gameBoard');
const resetButton = document.getElementById('resetButton');

let cells = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = true;

function renderBoard() {
  gameBoard.innerHTML = '';
  cells.forEach((cell, index) => {
    const cellElement = document.createElement('div');
    cellElement.classList.add('cell');
    cellElement.textContent = cell;
    cellElement.addEventListener('click', () => handleClick(index));
    gameBoard.appendChild(cellElement);
  });
}

function handleClick(index) {
  if (cells[index] !== '' || !gameActive) return;
  cells[index] = currentPlayer;
  checkResult();
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  renderBoard();
}

function checkResult() {
  const winPatterns = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
  ];
  winPatterns.forEach(pattern => {
    const [a, b, c] = pattern;
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      alert(`${cells[a]} Wins!`);
      gameActive = false;
    }
  });

  if (!cells.includes('') && gameActive) {
    alert("It's a Draw!");
    gameActive = false;
  }
}

resetButton.addEventListener('click', () => {
  cells = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  gameActive = true;
  renderBoard();
});

renderBoard();
