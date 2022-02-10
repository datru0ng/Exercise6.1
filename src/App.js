import './App.css';
import TextInput from './TextInput.js';
import {useState} from "react";
import Message from './Message';
import Camera from 'react-snap-pic'
import NamePicker from './NamePicker';
import { useDB, db } from './db';

//Everything on the interest is arrays of objects!!

function App() {
  const messages = useDB();
  const [showCamera, setShowCamera] = useState(false)

  // our username
  let [username, setUsername] = useState('');

  function sendMessage(text){
    const newMessage = {
      text, 
      time: Date.now(), 
      user: username,
    };
    db.send(newMessage);
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
