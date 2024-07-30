import {useState, useRef} from "react";
export default function Player() {
  const playerName = useRef();
  const [userName, setUserName] = useState(null);;
  function handleSave(){
      setUserName(playerName.current.value);
  }
  return (
    <section id="player">
     <h2>welcome {userName ?? 'unknown Entity'} </h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleSave} >Set Name</button>
      </p>
    </section>
  );
}
