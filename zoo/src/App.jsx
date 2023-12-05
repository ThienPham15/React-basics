import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Card from './Card'
import { animals } from './animalsList'
import './App.css'

function App() {
  const [animalArr, setAnimal] = useState(animals);
  const [search, setSearch] = useState('');

  //function to close card by animal name
  function closeHandler(name) {
    const filteredAnimalArr = animalArr.filter((animal) => 
    animal.name !== name)
    setAnimal(filteredAnimalArr);
  };

  //function to add/remove like to animal by animal name
  //? try use spread operation (...)
  function likeHandler(animalName,action) {
    const newAnimalArr = animalArr.map((animal) => {
      if (animal.name == animalName && action === 'add') 
      {
   /*      return {name: animal.name, likes: animal.likes+1} */
        return {...animal, likes: animal.likes + 1}
      } else if (animal.name == animalName && action === 'remove') {
        return {name: animal.name, likes: animal.likes - 1}
      }
      return {name: animal.name, likes: animal.likes}
    })
    
    setAnimal(newAnimalArr);
  };

  //function to check changes from search input and set the new state of search based on changes
  function searchHandler(event) {
      setSearch(event.target.value.toLowerCase())
  };

  function checkArray(array) {
    if (array.length === 0){
      return <p>Please enter!</p>
    }
  }

  return (
  <>
    <Header logo="animal"
    onchange={searchHandler}/>
    <main>
      <input type="text" onChange = {searchHandler}></input>
      <div className="cards">
        {animalArr
        .filter((animal) => animal.name.includes(search))
        .map((animal) => (
          <Card 
          key={animal.name} 
          {...animal}
          close={() => closeHandler(animal.name)}
          removelike={() => likeHandler(animal.name, 'remove')}
          addlike={() => likeHandler(animal.name, 'add')} />
          )
        )
        }
        {checkArray(animalArr.filter((animal) => animal.name.includes(search)))
        }
      </div>
    </main>
    <Footer year="2023"/>
  </>
  )
}
export default App; 


//search = '' a

