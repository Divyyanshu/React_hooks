import React, { Fragment, useState } from "react";
import "../src/index.css";

const Backgroundclicker = () => {
  let purple = "#62E150";
  let MainColor = "#2C3E50"
  const [bg, setBg] = useState(purple);
  const [names ,setNames] = useState("click me ❤️");
  const [bgbtn , setbgbtn] = useState(MainColor)
  

//   EVENT PR KAAM HORA HAI
  const bgChange = () => {
    let Newbg = "#50A5AC";
    let Newbtncolor = "#626567"
    setBg(Newbg);
    setNames('send me 🎏')
    setbgbtn(Newbtncolor)
  };

  const bgBack = () =>{
    setBg(purple);
    setNames(`let's back 🐺`)
    setbgbtn(MainColor)
  }

  return (
    <Fragment>
      <div style={{ backgroundColor: bg }}>
        <button onMouseEnter={bgChange} onMouseLeave={bgBack} style={{
            backgroundColor : bgbtn
        }}>{names}</button>
      </div>
    </Fragment>
  );
};

export default Backgroundclicker;
