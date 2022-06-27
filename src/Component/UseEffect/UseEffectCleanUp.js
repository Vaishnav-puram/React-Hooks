import React, { useState, useEffect } from 'react'

function UseEffectCleanUp() {
    let [size, setSize] = useState(window.screen.width)
    function change() {
        setSize(window.innerWidth)
    }
    useEffect(() => {
        console.log("add event")
        console.log(size)
        window.addEventListener("resize", change);
        return () => { //cleanup function
            console.log("remove event")
            window.removeEventListener("resize", change);

        }
    })
    return (
        <>
        <h1>UseEffectCleanUp</h1>
        <div>The window size is {size}</div>
        </>
    )
}

export default UseEffectCleanUp