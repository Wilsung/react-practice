import { useState } from 'react';

export default function Player ( {initialName, symbol, isActive } ) {
    const [ playerName, setPlayerName ] = useState(initialName);
    const [ isEditing, setIsEditing ] = useState(false);

    function handleEditClick (){
        // We should not be coding this way, schedules for React
        // to update state at a later time.
        // setIsEditing(!isEditing);

        //do this. this gets latest state value.
        setIsEditing((editing) => !(editing));
    }

    //event is used from onChange (built-in process) -recording user keystrokes.
    function handleNameChange (event){
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>

    

    if (isEditing){
        //onChange listens to every keystroke entered by the user. 
        //this is a two way binding - input leaves and enters.
        editablePlayerName = <input type="text" required value={playerName} onChange={handleNameChange}/>
    }

    return (
        <li className={isActive ? "active" : undefined}>
        <span className="player">
            {editablePlayerName}
            <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}