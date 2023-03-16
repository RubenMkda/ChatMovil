import Attach from '../assets/attach.svg'
import Img from '../assets/Img.svg'

const Input = () => {
    return(
        <div className="sendmessage">
            <input type="text" placeholder="Write message here" />
            <div className="send">
                <img src={Attach} alt=""/>
                <input type="file" id="file" />
                <label htmlFor="file">
                    <img src={Img} alt="" />
                </label>
                <button>Send</button>
            </div>
        </div>
    )
}

export default Input