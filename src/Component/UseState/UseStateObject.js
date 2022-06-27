import React from 'react'

function UseStateObject() {
    let [obj,setObj]=React.useState({
        name:"vaishnav",
        age:23
    })
    function change(){
        setObj({...obj,name:"Vaishnav Puram"})   
    }
  return (
    <>
    <h1>UseStateObject</h1>
    <div>My name is {obj.name} and my age is {obj.age}</div>
    <button onClick={change}>Change</button>
    </>
  )
}

export default UseStateObject