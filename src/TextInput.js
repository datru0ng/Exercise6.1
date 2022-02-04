import "./TextInput.css";
import {useState} from "react";
import {FiSend, FiCamera} from 'react-icons/fi';

function TextInput(props) {
    const [text, setText] = useState("");

    /*send makes it so that the messages disappear after you click send*/
    function send() {
        props.sendMessage(text);
        setText("");
    }

    /*onKeyPress makes it so that the event (e) sees that when we press the enter key, it will make the message disappear*/
    function onKeyPress(e){
        if (e.key==='Enter') {
            send()
        }
    }

    return (
    <footer className = "footer" >
        <button onClick={props.showCamera}
            style={{left:10, right:'auto'}}>
            <FiCamera style={{height:15, width:15}} />
        </button>
        <input 
            className ="text-input" 
            value={text} 
            onChange={(e)=> setText(e.target.value)} //dont know what happens here, i forgot
            onKeyPress={onKeyPress} // whatever we submit (enter), it will keep it in the variable onKeyPress
            
        />
        <button className ="send" onClick={send}>
            ➤
        </button>
    </footer>
  );
}

export default TextInput;