import React from 'react'
import {useLocation,useNavigate} from "react-router-dom";
function About() {
    let location=useLocation();
    let navigate=useNavigate();
  return (
    <>
    <span>This is {location.pathname.replace("/","") } Page</span>
    <button onClick={()=>navigate("/")}>Go to Home</button>
    </>
  )
}

export default About