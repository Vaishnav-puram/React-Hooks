import React from 'react'
import {useLocation,useNavigate} from "react-router-dom";
function Contact () {
    let location=useLocation();
    let navigate=useNavigate();
  return (
    <>
    <span>This is {location.pathname.replace("/","") } Page</span>
    <button onClick={()=>navigate("/about")}>Go Back</button>
    </>
  )
}

export default Contact 