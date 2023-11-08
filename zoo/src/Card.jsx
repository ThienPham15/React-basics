function Card({name, likes, close, addlike, removelike}) {
    let icon; 
    return (
        <div className="card">
            <img src={`https://source.unsplash.com/400x400/?${name}`} 
            alt="unsplash random image" />
            <h2>{name}</h2>
            <button className="closebtn" onClick={close}>close</button>    
            <button onClick={removelike}>-</button>
            <button onClick={addlike}>+</button>
            <span
            className="material-symbols-outlined">{
                likes < 0 ? icon = 'heart_broken' : icon = 'favorite'
            }</span>
            <h2>{likes}</h2>
        </div>
    )
}

export default Card;