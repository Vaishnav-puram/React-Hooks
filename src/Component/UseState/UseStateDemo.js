import React ,{useState}from 'react'

function UseStateDemo() {
    let [name ,setName]=useState("Vaishnav") ;
  function change(){
    (name==="Vaishnav")?setName("Vaishnav Puram"):setName("Vaishnav")
  }
  function clear(){
    setName("");
  }
  function reset(){
    setName("Vaishnav")
  }
  return (
    <>
    <h1>UseStateDemo</h1>
    <div>{name}</div>
    <button onClick={change}>Change</button>
    <button onClick={clear}>Clear</button>
    <button onClick={reset}>Reset</button>
    </>
  )
}

export default UseStateDemo