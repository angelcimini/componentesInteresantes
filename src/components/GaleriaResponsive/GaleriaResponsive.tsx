import React from 'react'
import './GaleriaResponsive.css'

const GaleriaResponsive = () => {
  return (
    <div className='galeriaResponsive'>
        <ul className='movies'>
            <li className='movie'><img src="https://rickandmortyapi.com/api/character/avatar/50.jpeg" alt="50" /></li>
            <li className='movie'><img src="https://rickandmortyapi.com/api/character/avatar/80.jpeg" alt="80" /></li>
            <li className='movie'><img src="https://rickandmortyapi.com/api/character/avatar/76.jpeg" alt="76" /></li>
            <li className='movie'><img src="https://rickandmortyapi.com/api/character/avatar/30.jpeg" alt="30" /></li>
        </ul>
    </div>
  )
}

export default GaleriaResponsive