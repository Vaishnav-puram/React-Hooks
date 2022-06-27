import React from "react";
import UseStateDemo from "./Component/UseState/UseStateDemo";
import UseStateObject from "./Component/UseState/UseStateObject";
import UseStateArray from "./Component/UseState/UseStateArray";
import UseEffectDemo from "./Component/UseEffect/UseEffectDemo";
import UseEffectCleanUp from "./Component/UseEffect/UseEffectCleanUp";
import UseRef from "./Component/UseRef/UseRef";
import UseReducer from "./Component/UseReducer/UseReducer";
import Home from "./Component/UseLocation/home";
function App() {
  return (
    <div>
      <UseStateDemo/>
      <UseStateObject/>
      <UseStateArray/>
      <UseEffectDemo/>
      <UseEffectCleanUp/>
      <UseRef/>
      <UseReducer/>
      <Home/>
    </div>
  );
}

export default App;
