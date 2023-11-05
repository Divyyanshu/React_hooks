import React, { Fragment, useState } from "react";
import "../src/index.css";

const Backgroundclicker = () => {
  let purple = "#62E150";
  const [bg, setBg] = useState(purple);
  const [names ,setNames] = useState("click me")
  

//   EVENT PR KAAM HORA HAI
  const bgChange = () => {
    let Newbg = "#50A5AC";
    setBg(Newbg);
    setNames('send me 🦈')
  };

  return (
    <Fragment>
      <div style={{ backgroundColor: bg }}>
        <button onDoubleClick={bgChange}>{names}</button>
      </div>
    </Fragment>
  );
};

export default Backgroundclicker;
