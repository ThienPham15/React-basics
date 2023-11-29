function GameOver({backHandler}) {
    return (
        <div>
        <div>Game over is here</div>
        <button onClick={backHandler}>Back to start</button>
        </div>
    )
}

export default GameOver;