import Circle from "../UIcomponents/Circle";

function Game({score, circles, stopHandler, circleClickHandler}) {

    return (
    <div>
        <h1>Catch the snow!</h1>
        <div>{circles.map((el, i) => <Circle key={i} id={i} circleClickHandler={circleClickHandler}/>)}</div>
        <button onClick={stopHandler}>End game</button>
        <h2>Score: {score} </h2>
    </div>
    )
}

export default Game;