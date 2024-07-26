import React from 'react'

const Numero2 = () => {
    const numeros:number[]=[1,2,3,4,5,6,7,8,9,10];
    let suma: number = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
      }
    return (
    <div>
      <h3>Suma de elementos</h3>
      <span>La suma de los elementos es: {suma}</span>
    </div>
  )
}

export default Numero2
