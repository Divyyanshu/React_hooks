import React, { useState } from "react";


const Otimer =()=>{
    let time = new Date().toLocaleTimeString();
    const [ctime,setCtime] = useState(time);

const UpdateTime = () =>{
    time = new Date().toLocaleTimeString();
    setCtime(time)
}

    setInterval(UpdateTime,1000);
return(
      <h1 className="Time-Heading">{ctime}</h1>
)
};

export default Otimer;