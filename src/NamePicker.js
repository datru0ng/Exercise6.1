import { useState } from "react";

function NamePicker(props){
    const [editName, setEditName] = useState(false);
    const [name, setName] = useState("");

    function displayName() {
        setEditName(!editName);
    }

    return (
        <div className="NameInput">            
            <input 
            className="UserName"
            placeholder="Type username:"
            value={name}
            onChange={(e)=> setName(e.target.value)}
            //editName={editName}
            />
            <button 
            className="submit" 
            onClick={displayName}
            >
            ⬆
            </button>
        </div>
    );
}

export default NamePicker;