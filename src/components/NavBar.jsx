const NavBar = () => {
    return(
        <div className="navbar">
            <span className="logo">RubenMkda</span>
            <div className="user">
                <img src="https://images.goodsmile.info/cgm/images/product/20110404/3129/13443/large/2bc250e2a68eb4a8630993877ed492f8.jpg" className="icon" alt="" />
                <span>Ruben</span>
                <button className="logout">Logout</button>
            </div>
        </div>
    )
}

export default NavBar