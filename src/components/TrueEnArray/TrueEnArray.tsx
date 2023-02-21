import React from 'react'

const TrueEnArray = () => {
    const miArray = [
        {name: 'Este es true', age: 33},
        {name: 'patata', age: 17},
        {name: 'boniato', age: 15}
    ]
    const verificarEdad = miArray.some((elementoDelArray) => {
        return elementoDelArray.age > 18;
    })

    return (
    <div>
        {verificarEdad &&
            <span>Si al menos uno de los elementos de un array cumple una condición, devuelve true</span>
        }
    </div>
  )
}

export default TrueEnArray