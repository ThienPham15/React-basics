import { useState } from 'react'
import NewGame from './components/NewGame'
import { levels } from './levels'
import Circle from './UIcomponents/Circle'
import Game from './components/Game'
import GameOver from './components/GameOver'

function getRandomInt(min,max) {
  return Math.floor(Math.random() * (max - min +1)) + min;
}

function App() {
  const [player, setPlayer] = useState();
  const [circles, setCircles] = useState([]);
  const [score, setScore] = useState(0)
  const [gameLaunch, setGameLaunch] = useState(true)
  const [gameOn, setGameOn] = useState(false)
  const [gameEnd, setGameEnd] = useState(false)
  const [current, setCurrent] = useState(-1);

  let timer;
  let pace = 1000;

  function gameSetHandler(level, name) {
    //based on levels, find the matching object
    //then make an array for cirlces, with the amount given in the object
    const levelIndex = levels.findIndex(el => el.name === level);
    const levelCircles = levels[levelIndex].amount;

    const circlesArr = Array.from({ length: levelCircles }, (x, i) => i);

    setCircles(circlesArr);

    console.log('circles array',circlesArr)
    console.log('amount of circles', levelCircles)

    setPlayer(
      {
        level: level,
        name: name
      }
    )
    
    setGameOn(!gameOn);
    setGameLaunch(!gameLaunch);
    randomNumb();

  }

  function stopHandler() {
    setGameOn(!gameOn);
    setGameEnd(!gameEnd);
    clearTimeout(timer);
  }

  function playAgainHandler() {
    setGameEnd(!gameEnd);
    setGameOn(!gameOn);
  }

  function backHandler() {
    setGameEnd(!gameEnd);
    setGameLaunch(!gameLaunch);
  }

  const circleClickHandler = (id) => {
    setScore(score + 1)
  }

  function randomNumb() {
    let nextActive;
    do {
      nextActive = getRandomInt(0, circles.length)
    } while (nextActive === current);

    setCurrent(nextActive);

    timer = setTimeout(randomNumb,pace)
  }

  return (
    <>
      {gameLaunch && <NewGame 
      onclick={gameSetHandler}/>}

      {gameOn && <Game 
      score={score}
      circles={circles}
      stopHandler={stopHandler} 
      circleClickHandler={circleClickHandler} />}

      {gameEnd && <GameOver
      playAgainHandler={playAgainHandler}
      backHandler={backHandler}
      name={player.name}
      level={player.level}/>}
    </>
  )
}

export default App; 
