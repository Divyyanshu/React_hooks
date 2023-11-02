import React, { Fragment, useState } from "react";
import "../src/index.css";


const App = () => {
  const state = useState();
  const [count, setCount] = useState(0);

  const IncNum = () => setCount(count + 1);
  const DecNum = () => setCount(count - 1);

  return (
    <Fragment>
      <h1 className="heading">{count}</h1>
      <button onClick={IncNum}>Click me for IncrementS</button>
      <hr/>
      <button onClick={DecNum}>Click me for Decrements</button>
    </Fragment>
  );
};

export default App;
