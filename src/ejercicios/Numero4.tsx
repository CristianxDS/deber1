import React from 'react'
interface Alumno {
    nombre: string;
    edad: number;
    calificacion: number;
}

const Numero4 = () => {
    const alumnos: Alumno[] = [
        {
            nombre: 'Viviana',
            edad: 19,
            calificacion: 10,
        },
        {
            nombre: 'Wendy',
            edad: 20,
            calificacion: 8,
        },
        {
            nombre: 'Gerson',
            edad: 18,
            calificacion: 9,
        }
    ];


    const calcularPromedio = (alumnos: Alumno[]): number => {
        const suma = alumnos.reduce((calculo, alumno) => calculo + alumno.calificacion, 0);
        return suma / alumnos.length;
    };

    const promedio = calcularPromedio(alumnos);

    return (
        <div>
            <h3>Promedio de califaciones</h3>
            <span>El promedio de las calificaciones es: {promedio.toFixed(2)}</span>
        </div>
    )
}

export default Numero4
