function Circle({id, circleClickHandler, current}) {
    return (
        <div 
        className={`circle ${current ? 'active': ''}`}
        onClick={()=>{circleClickHandler(id)}}>
            <p>{id}</p>
        </div>
    )
}

export default Circle;