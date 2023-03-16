import Cam from '../assets/Cam.svg'
import Add from '../assets/Add.svg'
import More from '../assets/more.svg'
import Messages from './Messages'
import Input from './Input'

const Chat = () => {
    return(
        <div className="chat">
            <div className="chatinfo">
                <span>Jane</span>
                <div className="chaticons">
                    <img src={Cam} alt="" className='iconadds'/>
                    <img src={Add} alt=""  className='iconadds'/>
                    <img src={More} alt=""  className='iconadds'/>
                </div>
            </div>
            <Messages />
            <Input />
        </div>
    )
}

export default Chat