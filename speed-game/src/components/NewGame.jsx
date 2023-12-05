import { useState } from "react";

function NewGame({onclick}) {
    const [name, setName] = useState('')

    const inputHandler = (e) => {
        setName(e.target.value)
    }
 
    return (
    <div>
        <h1>Catch the snow!</h1>
        <h2>Start a game by choosing difficulty level and enter your name</h2>
        <input type="text" onChange={inputHandler}></input>
        <div>
            <button onClick={()=> onclick('easy', name)}>Easy</button>
            <button onClick={()=> onclick('medium', name)}>Medium</button>
            <button onClick={()=> onclick('hard', name)}>Hard</button>
        </div>
    </div>
    );
}

export default NewGame;