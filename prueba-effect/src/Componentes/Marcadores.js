import React, { useEffect, useState } from 'react';


const Marcardores = () => {
    const [constadorA, setContadorA] = useState(0);
    const [constadorB, setContadorB] = useState(0);

    useEffect(() => {
        console.log('montando componente []');
    }, []);

    useEffect(() => {
        console.log('montando componente');
    });

    useEffect(() => {
        console.log('montando componente[contadorA]');
    }, [constadorA]);

    useEffect(() => {
        console.log('montando componente[contadorB]');
    }, [constadorB]);

    useEffect(() => {
        console.log('montando componente[contadorA, contadorB]');
    }, [constadorA, constadorB]);
    
    return (
        <div>
            <h1>Contador A: {constadorA}</h1>
            <button onClick={() => setContadorA(constadorA + 1)}>Aumentar</button>
            <h1>Contador B: {constadorB}</h1>
            <button onClick={() => setContadorB(constadorB + 1)}>Aumentar</button>
        </div>
    );
}

export { Marcardores }