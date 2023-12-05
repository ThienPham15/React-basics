function Header({logo, onchange}) {
    return (
        <header>
            <h1>{logo}</h1>
            <input type="text" onChange={onchange}></input>
        </header>
    )
}

export default Header;
