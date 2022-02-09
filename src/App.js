import './App.css';
import TextInput from './TextInput.js';
import {useState} from "react";
import Message from './Message';
import Camera from 'react-snap-pic'
import NamePicker from './NamePicker';

//Everything on the interest is arrays of objects!!

function App() {
  let [messages, setMessages] = useState([]); //The variable messages is the current state, and setMessages is the function that keeps track of what is going in?
  const [showCamera, setShowCamera] = useState(false)

  // our username
  let [username, setUsername] = useState('');

  function sendMessage(text){
    const newMessage = {
      text, 
      time: Date.now(), 
      user: username,
    };
    setMessages([newMessage, ...messages]); //In the function setMessages, all the newMessage will come before all the previous messages
  }

    let takePicture = (img) => {
      console.log(img)
      setShowCamera(false)
    }
  return (
    <div className="App">
      <header className="header">
        <div className="logo"/>
        <span className="title">LetsChat!</span>
        <NamePicker setUsername={setUsername}/>
      </header>

      <div className="messages">
        {messages.map((msg, i)=>{
          return <Message {...msg} key={i} fromMe={msg.user === username} />; {/*...=spread operator*/}
        })}
        {showCamera && <Camera takePicture={takePicture} />}
        </div>
        
        {/* everything we type will go through the function sendMessage that will add the words we type in to the array messages */}
        <TextInput sendMessage={sendMessage}
        showCamera={()=>setShowCamera(true)}/>
    </div>
  );
}

export default App;
