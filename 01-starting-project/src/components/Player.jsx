import {useState} from "react";
export default function Player() {
  const [userName, setUserName] = useState("champ");
  // const [save, setSave] = useState(false);
  // function handleSave(){
  //   if(save == false){
  //     setSave = true;
  //   }
  // }
  function handleUserName (event){
    setUserName(event.target.value);
  }
  return (
    <section id="player">
      <h2>Welcome {userName}</h2>
      <p>
        <input type="text" value="Enter name" onChange={handleUserName} />
        <button>Set Name</button>
      </p>
    </section>
  );
}
