//we can use n no.of useEffects 
import React,{useState,useEffect} from 'react'
function UseEffectDemo() {
    let[count,setCount]=useState(0);
    useEffect(()=>{
        console.log(" First one!!!")
        if(count>=1){
        document.title=`Messages (${count})`
        }else{
            document.title=`Messages`
        }
    },[count]) //this is a dependency list where , whenever this value changes then only it will re-render otherwhise it will render only once 
    useEffect(()=>{
        console.log("Second one!!!")
    },[]) //this useEffect will render only once
    return (
    <>
    <h1>UseEffectDemo</h1>
    <div>{count}</div>
    <button onClick={()=>setCount(count+1)}>Click</button>
    <button onClick={()=>setCount(0)}>Reset</button>
    </>
  )
}

export default UseEffectDemo