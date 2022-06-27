import React ,{useReducer}from 'react'

function UseReducer() {
    let initialState=0;
    const reducer=(state,action)=>{
        console.log(state,action) //{type: 'INCREMENT'} /{type: 'DECREMENT'}
        if(action.type==="INCREMENT"){
            return state+1;
        }
        if(action.type==="DECREMENT"){
            return state-1;
        }
        return state;

    }
    let[state,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
        <h1>UseReducer</h1>
        <p>{state}</p>
        <button onClick={()=>dispatch({type:"INCREMENT"})}>Increase</button>
        <button onClick={()=>dispatch({type:"DECREMENT"})}>Decrease</button>
    </div>
  )
}

export default UseReducer