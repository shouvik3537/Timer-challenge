import {useState} from "react";
export default function Player() {
  const [userName, setUserName] = useState("champ");
  const [save, setSave] = useState(false);
  let name = "";
  let newHeader,oldHeader;
  function handleSave(){
    if(save == false){
      setSave = true;
    }
  }
  function handleUserName (event){
     name = event.target.value;
  }
  if(save){
     newHeader = <h2>Welcome {name}</h2>
  }
  else{
      oldHeader = <h2>Welcome champ</h2>
  }
  return (
    <section id="player">
     {save? newHeader : oldHeader}
      <p>
        <input type="text"  onChange={handleUserName} />
        <button onClick={() =>handleSave()} >Set Name</button>
      </p>
    </section>
  );
}
