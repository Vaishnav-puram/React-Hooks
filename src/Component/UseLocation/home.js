import React from 'react'
import About from './about';
import Contact from './contact';
import {BrowserRouter,Route, Routes} from "react-router-dom";
import Head from './head';
function Home() {
  return (
    <BrowserRouter>
    <Head/>
    <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Home