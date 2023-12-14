import React, { useState } from 'react'
import './switchbutton.css'
import BasicAccordion from '../accordion/BasicAccordion'

const SwitchButton = ({ position }) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleToggle = () => {
    setIsChecked(!isChecked)
  }

  return (
    <div className='main-button'>
      <label className='switch'>
        <input type='checkbox' checked={isChecked} onChange={handleToggle} />
        <div className='indicator left'></div>
        <div className='indicator right'></div>
        <div className='button'></div>

        {isChecked && (
          <div
            className={`accordion ${
              position === 'left' ? 'accordion-left' : 'accordion-right'
            }`}
          >
            <BasicAccordion />
          </div>
        )}
      </label>
    </div>
  )
}

export default SwitchButton
