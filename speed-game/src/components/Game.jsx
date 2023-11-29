import Circle from "../UIcomponents/Circle";
function Game({score, circles, stopHandler}) {

    return (
    <div>
        <div>{circles.map((el, i) => <Circle key={i}/>)}</div>
        <button onClick={stopHandler}>End game</button>
        <h2>Score: {score} </h2>
    </div>
    )
}

export default Game;