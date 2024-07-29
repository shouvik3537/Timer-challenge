import {useState} from "react";
export default function Player() {
  const [userName, setUserName] = useState("champ");
  const [save, setSave] = useState(false);
  function handleSave(){
    setSave(!save);
  }
  function handleUserName (event){
     setUserName(event.target.value);
  }
  let player = <h2>Welcome champ</h2>
  if(save){
     player = <h2>Welcome {userName}</h2>
  }
  return (
    <section id="player">
     {player}
      <p>
        <input type="text"  onChange={handleUserName} />
        <button onClick={handleSave} >Set Name</button>
      </p>
    </section>
  );
}
