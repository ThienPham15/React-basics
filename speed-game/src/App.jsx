import { useState } from 'react'
import NewGame from './components/NewGame'
import { levels } from './levels'
import Circle from './UIcomponents/Circle'
import Game from './components/Game'
import GameOver from './components/GameOver'

function App() {
  const [player, setPlayer] = useState();
  const [circles, setCircles] = useState([]);
  const [score, setScore] = useState(0)
  const [gameOn, setGameOn] = useState(false)
  const [gameLaunch, setGameLaunch] = useState(true)
  const [gameEnd, setGameEnd] = useState(false) 



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
    setGameLaunch(!gameLaunch)
  }

  function stopHandler() {
    setGameOn(!gameOn);
    setGameEnd(!gameEnd);
  }

  function backHandler() {
    setGameEnd(!gameEnd);
    setGameOn(!gameOn)
  }

  return (
    <>
      <h1>Catch the snow!</h1>

      {gameLaunch && <NewGame onclick={gameSetHandler} />}

      {gameOn && <Game 
      score={score}
      circles={circles}
      stopHandler={stopHandler} />}

      {gameEnd && <GameOver
      backHandler={backHandler} />}
      
    </>
  )
}

export default App; 
