import React from 'react'

const TrueEnCondicionales = () => {
    const numeroPositivoYPar = 2;
    const isPositiveAndEven = (num: number) => {
        return num > 0 && num % 2 === 0;
    }
  return (
    <div>
        { isPositiveAndEven(numeroPositivoYPar) && 
            <span>Hacer return del condicional devuelve true o false directamente</span>
        }
    </div>
  )
}

export default TrueEnCondicionales