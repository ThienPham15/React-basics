import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Card from './Card'
import { animals } from './animalsList'
import './App.css'

function App() {
  const [animalArr, setAnimal] = useState(animals);

  //function to close card by animal name
  function closeHandler(name) {
    const filteredAnimalArr = animalArr.filter((animal) => 
    animal.name !== name)
    setAnimal(filteredAnimalArr);
  }

/*   //function to add like to animal by animal name
  function addlikeHandler(animalName) {
    const newAnimalArr = animalArr.map((animal) => {
      if (animal.name == animalName) {
        return {name: animal.name, likes: animal.likes + 1}
      } else {
        return {name: animal.name, likes: animal.likes}
      }
    })
    setAnimal(newAnimalArr)
  }


  //function to remove like to animal by animal name 
  function removeLikeHandler(animalName) {
    const newAnimalArr = animalArr.map((animal) => {
      if (animal.name == animalName) {
        return {name: animal.name, likes: animal.likes-1}
      } else {
        return {name: animal.name, likes: animal.likes}
      }
    })
    setAnimal(newAnimalArr)
  } */

  //function to add/remove like to animal by animal name
  function likeHandler(animalName,action) {
    console.log(action)
    const newAnimalArr = animalArr.map((animal) => {
      if (animal.name == animalName && action === 'add') 
      {
        return {name: animal.name, likes: animal.likes+1}
      } else if (animal.name == animalName && action === 'remove') {
        return {name: animal.name, likes: animal.likes-1}
      }
      return {name: animal.name, likes: animal.likes}
    })
    
    setAnimal(newAnimalArr);
    }

  return (
  <>
    <Header logo="animal"/>
    <main>
      <div className="cards">
        {animalArr.map((animal) => 
          <Card key={animal.name} 
          {...animal}
          close={() => closeHandler(animal.name)}
          removelike={() => likeHandler(animal.name, 'remove')}
          addlike={() => likeHandler(animal.name, 'add')} />
          )} 
      </div>
    </main>
    <Footer year="2023"/>
  </>
  )
}

export default App; 
