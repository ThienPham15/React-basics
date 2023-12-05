import Circle from "../UIcomponents/Circle";

function Game({score, circles, stopHandler, circleClickHandler, current}) {

    return (
    <div>
        <h1>Catch the snow!</h1>
        <div>
            {circles.map((el, i) => 
            <Circle key={i} id={i} 
            circleClickHandler={circleClickHandler}
            current = {current === i}/>)}
        </div>
        <button onClick={stopHandler}>End game</button>
        <h2>Score: {score} </h2>
    </div>
    )
}

export default Game;