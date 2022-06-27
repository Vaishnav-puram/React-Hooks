//useLocaition returns location object that represents the current URL
import React from 'react'
import {Link,useLocation} from "react-router-dom"

function Head() {
    let location=useLocation();
    console.log(location) // {pathname: '/about', search: '', hash: '', state: null, key: 'gv37hvph'} / {pathname: '/contact', search: '', hash: '', state: null, key: '0s6ofj6i''}
  return (
    <div>
        <h1>UseLocation</h1>
        {/* <span>This is {location.pathname.replace("/","") } Page</span><br/> */}
        {
            location.pathname==='/vaishnav'?(<span>Welcome back Vaishnav!!!</span>):(<span>Welcom to Home Page</span>)
        }
        <br/>
        <Link to="/about">About    </Link>
        <Link to="/contact">Contact</Link>
    </div>
  )
}

export default Head