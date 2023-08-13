import React, { useState } from "react";


const App=()=>{

  let newTime= new Date().toLocaleTimeString();
  const [ctime,setctime] = useState(newTime);

  const UpdateTime=()=>{
    let newTime= new Date().toLocaleTimeString();
    setctime(newTime);
  }

  return(
    <>
      <h1> {newTime}</h1>
      <button onClick={UpdateTime}>Get Time</button>
    </>
  );
}

export default App;