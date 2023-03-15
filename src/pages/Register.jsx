import avatar from '../assets/avatar-default.png'

const Register = () => {
    return(
        <div className="form-container">
            <div className="form-wrapper">
                <span className="logo">Ruben Mkda</span>
                <span className="title">Register</span>
                <form>
                    <input type="text" placeholder="Name"/>
                    <input type="email"placeholder="Email" />
                    <input type="password" placeholder="Password"/>
                    <input type="file" id="file"/>
                    <label htmlFor="file">
                        <img src={avatar} alt="" className='imgAvatar'/>
                        <span>Add an avatar</span>
                    </label>
                    <button>Sign up</button>
                </form>
                <p>You do have an account? Login</p>
            </div>
        </div>
    )
}

export default Register