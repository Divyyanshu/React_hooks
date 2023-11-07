import React, { Fragment }  from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import Backgroundclicker from "./Backgroundclicker";
import App from "./App";
import Form from "./form";

ReactDOM.render(
  <Fragment>
  <Backgroundclicker/>
  <App/>
  <Form/>
  </Fragment>,document.getElementById("root")
);