import React ,{useState,useRef}from 'react'

function UseRef() {
    let name=useRef(null); //it is like useState,it preserves the value but it won't be re-rendered
    let [data,setData]=useState(false);
    function submit(e){
        e.preventDefault();
        console.log(name.current.value)
        const record=name.current.value;
        record===""?alert("plese fill the form"):setData(true)
    }
  return (
    <div>
        <h1>UseRef</h1>
        <form onSubmit={submit}>
            <input type="text" placeholder='enter your name' ref={name}/>
            <button>Submit</button>
        </form>
        <p>{data?`Your name is ${name.current.value}`:""}</p>
    </div>
  )
}

export default UseRef