function Circle({id, circleClickHandler}) {
    return (
        <div className="circle" 
        onClick={()=>{circleClickHandler(id)}}>
            <p>{id}</p>
        </div>
    )
}

export default Circle;