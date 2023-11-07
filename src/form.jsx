import { Fragment, useState } from "react";

const Form = () => {
const [name,setName] = useState();
const [fullName ,setfullName] = useState()
    
const inputEvent =(event)=>{
    setName(event.target.value)
}
const onShow =()=>{
    setfullName(name);
}
  return (
    <Fragment>
      <h1>HELLO ..!{fullName}</h1>
      <input type="text" placeholder="Enter your Name" onChange={inputEvent}></input>
      <button onClick={onShow}> CLICK ME </button>
    </Fragment>
  );
};

export default Form;
