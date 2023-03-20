import { signOut } from "firebase/auth"
import { useContext } from "react"
import { auth } from "../firebase"
import { AuthContext } from "../context/AuthContext"

const NavBar = () => {

    const {currentUser} = useContext(AuthContext)

    return(
        <div className="navbar">
            <span className="logo">RubenMkda</span>
            <div className="user">
                <img src={currentUser.photoURL} className="icon" alt="" />
                <span>{currentUser.displayName}</span>
                <button onClick={() => signOut(auth)} className="logout">Logout</button>
            </div>
        </div>
    )
}

export default NavBar