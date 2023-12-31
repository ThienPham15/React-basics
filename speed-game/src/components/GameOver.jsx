function GameOver({backHandler, playAgainHandler, name, level, score}) {
    return (
        <div className="gameOverModal">
            <h1>GAME OVER</h1>
            <div>Player: {name} </div>
            <div>Level: {level}</div>
            <div>Score: {score} </div>
{/*             <button onClick={playAgainHandler}>Play again</button> */}
            <button onClick={backHandler}>Back</button>
        </div>
    )
}

export default GameOver;