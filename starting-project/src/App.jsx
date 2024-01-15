
import Player from './components/Player';
import GameBoard from './components/GameBoard';
import Log from './components/Log'
import { useState } from 'react';
//testing push
function App() {
  const [ gameTurns, setGameTurns ] = useState([]);
  const [ activePlayer, setActivePlayer ] = useState("X");

  function handleActivePlayer (rowIndex, colIndex){
    setActivePlayer( (currentActivePlayer) => currentActivePlayer === "X" ? "O" : "X");

    setGameTurns(prevTurns => {
      let currentPlayer = 'X';

      if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = 'O';
      }

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

  return (
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === "X"}/>
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === "O"}/>
        </ol>
        <GameBoard onSelectSquare={handleActivePlayer} turns={gameTurns}/>
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App
