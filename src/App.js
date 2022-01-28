import './App.css';
import TextInput from './TextInput.js';
import {useState} from "react";
import Message from './Message';

//Everything on the interest is arrays of objects!!

function App() {
  const [messages, setMessages] = useState([]);
  function sendMessage(text){
    const newMessage = {
      text, 
      time: Date.now(), 
      user: "Danny",
    };
    setMessages([newMessage, ...messages]);
  }
  return (
    <div className="App">
      <header className="header">
        <div className="logo"/>
        <span className="title">LetsChat!</span>
      </header>
      <div className="messages">
        {messages.map((msg)=>{
          return <Message {...msg} />
        })}
        </div>
      <TextInput sendMessage={sendMessage}/>
    </div>
  );
}

export default App;
