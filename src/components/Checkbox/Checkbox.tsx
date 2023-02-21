import React from 'react';
import './Checkbox.css';

const Checkbox = () => {
  return (
    <div>
        <label className='etiqueta'>
            <input className='miInput' type="checkbox" />
            <span className='elSpan'/>
        </label>
    </div>
  )
}

export default Checkbox