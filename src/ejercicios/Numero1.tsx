import React from 'react'
const Numero1 = () => {

    const area = (lado: number, lado1: number) => {
        return lado * lado1;
    }
    return (
        <div>
            <h3>AREA DE UN CUADRADO</h3>
            <span>El el area de cuadrado es :{area(4, 4)}</span>
        </div>
    )
}

export default Numero1
