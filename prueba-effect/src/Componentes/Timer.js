import React, { useState, useEffect } from "react";

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    
    
    useEffect(() => {
        setTimeout(() => {
            setSeconds((seconds) => seconds + 1);
        }, 1000);
    } );
    
    return <div> TIMER : {seconds}</div>;
    }


export { Timer }