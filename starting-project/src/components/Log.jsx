export default function Log ( {turns} ){
    
    for (const turn of turns){
        const { square, player } = turn;
        const { row, col } = square;

        gameBoard[row][col] = player;
    }

    return (
        <div>hi</div>
    );
}