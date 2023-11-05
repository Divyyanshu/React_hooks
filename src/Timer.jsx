import React, { Fragment, useState } from "react";


const Timer = () =>{
    let originalTime = new Date().toLocaleTimeString();
    const [ctime , setCtime] = useState(originalTime);

    let UpdateTime = () =>{
        let originalTimed = new Date().toLocaleTimeString();
        setCtime(originalTimed);
    };
    return(
        <Fragment>
        <h1> {ctime} </h1>
        <button onClick={UpdateTime}>GET TIME</button>
        </Fragment>
    )
}

export default Timer;