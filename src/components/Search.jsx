const Search = () => {
    return(
        <div className="search">
            <div className="searchform">
                <input type="text" className="inputsearch" placeholder="find a user"/>
            </div>
            <div className="userchat">
                <img src="https://pbs.twimg.com/media/E1ZKLaNXEAUWd0E.jpg" alt="" />
                <div className="userchatinfo">
                    <span>Jane</span>
                </div>
            </div>
        </div>
    )
}

export default Search