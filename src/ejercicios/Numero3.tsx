import React from 'react'

const Numero3 = () => {
    const numeros: number[] = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
    const resultado: number[] = [];
    for (let i = 0; i < numeros.length; i++) {
        resultado.push(numeros[i] / 5);
    }
    const elementos = [];
    for (let i = 0; i < resultado.length; i++) {
        elementos.push(<span>{resultado[i]} </span>);
    }
    return (
        <div>
            <h3>Valores Divididos</h3>
            {elementos}
        </div>
    )
}

export default Numero3
