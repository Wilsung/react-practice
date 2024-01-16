
import Player from './components/Player';
import GameBoard from './components/GameBoard';
import Log from './components/Log';
import Gameover from './components/Gameover.jsx'
import { WINNING_COMBINATIONS } from './winning_combinations.js';
import { useState } from 'react';

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2'
}

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function deriveActivePlayer(prevTurns){
  let activecurrentPlayer = 'X';

  if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
    activecurrentPlayer = 'O';
  }

  return activecurrentPlayer;
}

function deriveWinner(gameBoard, players){
  let winner;
  for (const combination of WINNING_COMBINATIONS){
    let firstSquare = gameBoard[combination[0].row][combination[0].column];
    let secondSquare = gameBoard[combination[1].row][combination[1].column];
    let thirdSquare = gameBoard[combination[2].row][combination[2].column];

    if (firstSquare &&
      firstSquare === secondSquare &&
      firstSquare === thirdSquare){
        winner = players[firstSquare];
      }
  }
  return winner;
}

function deriveGameBoard(gameTurns){
  //Need to do this so gameBoard doesn't reference INITIAL_GAME_BOARD.
  let gameBoard = [...INITIAL_GAME_BOARD.map(innerArray => [...innerArray])];
  
  for (const turn of gameTurns){
      const { square, player } = turn;
      const { row, col } = square;
  
      gameBoard[row][col] = player;
  }

  return gameBoard;
}

function App() {
  const [ players, setPlayers ] = useState(PLAYERS);
  const [ gameTurns, setGameTurns ] = useState([]);
  //We Derive this.
  // const [ activePlayer, setActivePlayer ] = useState("X");
  
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);
  const activePlayer = deriveActivePlayer(gameTurns);
  const drawGame = gameTurns.length===9 && !winner;

  function handleActivePlayer (rowIndex, colIndex){
    // setActivePlayer( (currentActivePlayer) => currentActivePlayer === "X" ? "O" : "X");
    setGameTurns(prevTurns => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updatedTurns = [
        //we don't do player: activePlayer to avoid using another state when updating this state.
        { square: 
          { row: rowIndex, col: colIndex }, 
          player: currentPlayer 
        },
        ...prevTurns
      ];

      return updatedTurns;
    })
  }

  function handleRematch(){
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName){
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        //JS syntax to dynamically overwrite the object property with parameter.
        [symbol]: newName
      };
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
          <Player initialName={PLAYERS.X} symbol="X" isActive={activePlayer === "X"} onNameChange={handlePlayerNameChange}/>
          <Player initialName={PLAYERS.O} symbol="O" isActive={activePlayer === "O"} onNameChange={handlePlayerNameChange}/>
        </ol>
        {(winner || drawGame) && <Gameover winner={winner} onSelectRematch={handleRematch}/>}
        <GameBoard onSelectSquare={handleActivePlayer} board={gameBoard}/>
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App
