import React, { useState } from 'react'

const Numero5 = () => {
//hook useState: Cambia el valor del estado o componente
const[valorContador, setvalorcontador]=useState<number>(0);//valor inicial del estado 
//funcion de manipular del valor del contador 
const cambiarContador=(numero:number)=>{
    //Llamar funcion del hook useState
    setvalorcontador(valorContador + numero);
}
return (
<div>
  <h3>UseStateContador: <small>{valorContador}</small></h3>
  <button className='btn btn-primay'
  onClick={()=>cambiarContador(5)}> +5</button>
  &nbsp;
  <button className='btn btn-primay'
  onClick={()=>cambiarContador(-5)} >-5</button>
</div>
)
}

export default Numero5
