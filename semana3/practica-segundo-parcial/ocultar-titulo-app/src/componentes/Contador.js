import React from 'react';


function Contador({  mostrar }) {
    return (
        mostrar ? <h1>Welcome to React Challenges</h1>: null
    );
}

export default Contador;