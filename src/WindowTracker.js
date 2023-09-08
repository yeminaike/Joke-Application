import React from 'react';
import { useEffect, useState } from 'react';



function WindowTracker() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    useEffect(()=>{
        function watchWidth(){
            console.log("setting up")
            setWindowWidth(window.innerWidth)
        }

        return () =>{
            console.log("cleaning up")
            window.removeEventListener("resize", watchWidth)
        }
    }, [])
    return (
        
        <h1>Window width: {windowWidth}</h1>
      );
}

export default WindowTracker;