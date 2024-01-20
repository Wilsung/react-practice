import { useState, useRef } from 'react';

export default function Player() {
  const [ enteredPlayerName, setEnteredPlayerName ] = useState(null);
  const playerName = useRef();

  // Before useRef. 
  // const [ submitted, setSubmitted ] = useState(false);
  // function handleChange(e){
  //   setSubmitted(false);
  //   setEnteredPlayerName(e.target.value);
  // }
  
  // function handleSubmit(){
  //   setSubmitted(true);
  // }
  // return (
  //   <section id="player">
  //     <h2>Welcome {submitted ? enteredPlayerName : "(enter name)"}</h2>
  //     <p>
  //       <input type="text" onChange={handleChange} />
  //       <button onClick={handleSubmit}>Set Name</button>
  //     </p>
  //   </section>
  // );

  
  function handleSubmit(){
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value='';
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "(enter name)"}</h2>
      <p>
        <input ref={playerName} type="text"/>
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
