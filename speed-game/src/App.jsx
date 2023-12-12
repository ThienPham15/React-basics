import { useState, useRef } from 'react'
import NewGame from './components/NewGame'
import { levels } from './levels'
import Game from './components/Game'
import GameOver from './components/GameOver'

function getRandomInt(min,max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function App() {
  const [player, setPlayer] = useState();
  const [circles, setCircles] = useState([]);
  const [score, setScore] = useState(0)
  const [gameLaunch, setGameLaunch] = useState(true)
  const [gameOn, setGameOn] = useState(false)
  const [gameEnd, setGameEnd] = useState(false)
  const [current, setCurrent] = useState(-1);

  const timeoutIdRef = useRef(null);
  const rounds = useRef(0);
  const currentInst = useRef(0);

  let pace = 2000;
  let levelCircles;

  function gameSetHandler(level, name) {
    //based on levels, find the matching object
    //then make an array for cirlces, with the amount given in the object

    //Method 1: return the index
    const levelIndex = levels.findIndex(el => el.name === level);
    levelCircles = levels[levelIndex].amount;

/*     //Method 2: return directly the level
    const { amount } = levels.find((el) => el.name === name);
    const levelCircles = amount  */

    //create an array, put inside each element with i (index)
    const circlesArr = Array.from({ length: levelCircles }, (_,i) => i);  

    setCircles(circlesArr);
    setPlayer(
      {
        level: level,
        name: name
      }
    )

    //check first the lastest state and change it - as a safer way 
    setGameLaunch((prevLaunch) => !prevLaunch); 
    setGameOn(!gameOn);
    randomNumb();
  }


  function stopHandler() {
    clearTimeout(timeoutIdRef.current);
    timeoutIdRef.current = null;

    setGameOn((prevOn) => !prevOn);
    setGameEnd((prevEnd) => !prevEnd);
    pace = 2000;
    rounds.current = null;
  }

/*   function playAgainHandler() {
    setGameEnd((preEnd) => !preEnd);
    setGameOn((preOn) => !preOn);
    setScore(0);
  } */

  function backHandler() {
    setGameEnd((preEnd) => !preEnd);
    setGameLaunch((prevLaunch) => !prevLaunch);
    setScore(0);
  }

  const circleClickHandler = (id) => {
    if (current !== id) {
      stopHandler();
      return;
    }
    setScore((prevScore) => prevScore + 1);
    rounds.current --;
  }

  function randomNumb() {
    //check if the rounds more than 3 => stop the game
    if (rounds.current >= 3) {
      stopHandler();
      return;
    }

    let nextActive;

    do {
      nextActive = getRandomInt(0, levelCircles)
    } while (nextActive === currentInst.current);

    setCurrent(nextActive);
    currentInst.current = nextActive;

    rounds.current += 1; 
    pace *= 0.95;
    timeoutIdRef.current = setTimeout(randomNumb, pace);

    console.log(nextActive);
    console.log(rounds)
  }

  return (
    <>
      {gameLaunch && <NewGame 
      onclick={gameSetHandler}/>}

      {gameOn && <Game 
      score={score}
      circles={circles}
      stopHandler={stopHandler} 
      circleClickHandler={circleClickHandler} 
      current = {current}/>}

      {gameEnd && <GameOver
      //playAgainHandler={playAgainHandler}
      backHandler={backHandler}
      name={player.name}
      level={player.level}/>}
    </>
  )
}

export default App; 
