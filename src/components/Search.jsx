import React, { useContext, useState } from "react";
import { collection, query, where, getDocs, setDoc, doc, updateDoc, serverTimestamp, getDoc, } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const Search = () => {
    const [userName, setUserName] = useState("")
    const [user, setUser] = useState(null)
    const [err, setErr] = useState(false)

    const {currentUser} = useContext(AuthContext)

    const handleSearch = async () => {
        
        const q = query(
            collection(db, "users"),
            where("displayName", "==", userName)
        );

        try{
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                setUser(doc.data())
            });
        }catch(error){
            setErr(true)
        }
        setUser(null)
        setUserName("")
    };

    const handleKey = (e) => {
        e.code === "Enter" && handleSearch();
    }

    const handleSelect = async () => {
        const combinedId = currentUser.uid > user.uid
            ? currentUser.uid + user.uid
            : user.uid + currentUser.uid;
        
        try{
            
            const res = await getDoc(doc(db, "chats", combinedId));

            if (!res.exists()) {
                
                await setDoc(doc(db, "chats", combinedId), { messages: [] });
                
                await updateDoc(doc(db, "userChats", currentUser.uid), {
                    [combinedId + ".userInfo"]: {
                        uid: user.uid,
                        displayName: user.displayName,
                        photoURL: user.photoURL,
                    },
                    [combinedId + ".date"]: serverTimestamp(),
                });

                await updateDoc(doc(db, "userChats", user.uid), {
                    [combinedId + ".userInfo"]: {
                        uid: currentUser.uid,
                        displayName: currentUser.displayName,
                        photoURL: currentUser.photoURL,
                    },
                    [combinedId + ".date"]: serverTimestamp(),
                });
            }
        }catch(error){
            console.log(error)
        }
    }

    return(
        <div className="search">
            <div className="searchform">
                <input type="text" className="inputsearch" placeholder="find a user" onKeyDown={handleKey} onChange={e=>setUserName(e.target.value)}/>
            </div>
            {err && <span>User not found</span>}
            {user && <div className="userchat" onClick={handleSelect}>
                <img src={user.photoURL} alt="" className="icon"/>
                <div className="userchatinfo">
                    <span>{user.displayName}</span>
                </div>
            </div>}
        </div>
    )
}

export default Search