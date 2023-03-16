const Message = () => {
    return(
        <div className="message">
            <div className="messageinfo">
                <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSAN0j6rMWinaEoUZRjc-1rYDAtKa09Jc6UJbyMHCy07KuKM7sJ" alt="" className="icon"/>
                <span>Just Now</span>
            </div>
            <div className="messagecontent">
                <p>Hello</p>
                {/*<img src="https://i.blogs.es/755972/berserk-manga-2/840_560.jpeg" alt="" />*/}
            </div>
        </div>
    )
}

export default Message