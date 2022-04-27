import react, { useState } from 'react';
import './App.css';

function App() {
  const [player, setPlayer] = useState('X');
  const [columns, setColumns] = useState(Array(9).fill(''));

  const winningConditions = (content) => {
    let winningCombinations = {
      horizontal: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      vertical: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagonal: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };

    for (let wins in winningCombinations) {
      winningCombinations[wins].forEach((win) => {
        if (
          content[win[0]] === '' ||
          content[win[1]] === '' ||
          content[win[2]] === ''
        ) {
          //do nothing
        } else if (
          content[win[0]] === content[win[1]] &&
          content[win[1]] === content[win[2]]
        ) {
          alert(`Player ${content[win[0]]} won!`);
          handleReset();
        }
      });
    }
  };

  const handleClick = (id) => {
    if (columns[id] !== '') {
      alert('already filled');
      return;
    }

    let container = [...columns];
    if (player === 'X') {
      container[id] = 'X';
      setPlayer('O');
    } else {
      container[id] = 'O';
      setPlayer('X');
    }
    setColumns(container);
    console.log(container);
    winningConditions(container);
    if (container.includes('') === false) {
      alert('Draw!');
    }
  };

  const handleReset = () => {
    setColumns(Array(9).fill(''));
  };
  console.log(columns[0]);

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <div class="turn">
        <p>
          Player's <span class="x-o playerX">{player}</span> turn
        </p>
      </div>
      <div class="container">
        <div className="position" onClick={() => handleClick(0)}>
          {columns[0]}
        </div>
        <div className="position" onClick={() => handleClick(1)}>
          {columns[1]}
        </div>
        <div className="position" onClick={() => handleClick(2)}>
          {columns[2]}
        </div>
        <div className="position" onClick={() => handleClick(3)}>
          {columns[3]}
        </div>
        <div className="position" onClick={() => handleClick(4)}>
          {columns[4]}
        </div>
        <div className="position" onClick={() => handleClick(5)}>
          {columns[5]}
        </div>
        <div className="position" onClick={() => handleClick(6)}>
          {columns[6]}
        </div>
        <div className="position" onClick={() => handleClick(7)}>
          {columns[7]}
        </div>
        <div className="position" onClick={() => handleClick(8)}>
          {columns[8]}
        </div>
      </div>
      <div class="reset">
        <button class="reset-btn" onClick={handleReset}>
          reset
        </button>
      </div>
    </div>
  );
}

export default App;
