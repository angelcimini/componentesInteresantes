import React from 'react'
import './Galeria.css'

const Galeria = () => {
  return (
    <div>
        <section className='galeria'>
            <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="1" />
            <img src="https://rickandmortyapi.com/api/character/avatar/61.jpeg" alt="61" />
            <img src="https://rickandmortyapi.com/api/character/avatar/65.jpeg" alt="65" />
            <img src="https://rickandmortyapi.com/api/character/avatar/157.jpeg" alt="157" />
            <img src="https://rickandmortyapi.com/api/character/avatar/254.jpeg" alt="254" />
        </section>
    </div>
  )
}

export default Galeria