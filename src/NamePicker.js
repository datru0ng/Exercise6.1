import { useState } from "react";
import { FiEdit } from "react-icons/fi";

function NamePicker(props){
    // this is a toggle between showing and hiding the input
    const [editName, setEditName] = useState(false);
    // this is the state of the name itself
    const [name, setName] = useState("");

    // Toggles the ability to input username and keeps track of the current username the user put in
    function ok() {
        props.setUsername(name);
        setEditName(false);
    }
    
    if (editName) {
        return (
            <div className="nameInput">
                <input className = "UserName"
                value={name}
                onChange={(e)=> setName(e.target.value)}/>
                <button className = "submit" onClick={ok}> Confirm </button>
            </div>
        );
    }
    return (
        <div className="nameInput">            
            <span className="nameInputName">{ name || "Set Username:"}</span>
            <FiEdit size="24" onClick={() => setEditName(true)}/>
        </div>
    );
}

export default NamePicker;