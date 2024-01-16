import { useState } from 'react';

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard( {onSelectSquare, turns} ){
    let gameBoard = initialGameBoard;

    for (const turn of turns){
        const { square, player } = turn;
        const { row, col } = square;

        gameBoard[row][col] = player;
    }


    //Managing this state in APP sinces it's used in Log.
    // const [ gameBoard, setGameBoard ] = useState(initialGameBoard);
    // function handleSquareSelect(rowIndex, colIndex){
    //     setGameBoard((prevGameBoard) => {
    //         const updateBoard = [...prevGameBoard.map (prevRow => [...prevRow])];
    //         updateBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updateBoard;
    //     });

    //     onSelectSquare();
    // }
    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
            <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => (
                        <li key={colIndex}>
                            <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button>
                        </li>
                    ))}
                </ol>
            </li>))}
        </ol>
    );
}