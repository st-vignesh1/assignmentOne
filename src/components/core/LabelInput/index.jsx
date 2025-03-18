import PropTypes from 'prop-types'
import React from 'react'

export default function LabelInput({label,value,setValue}) {
  return (
    <div className='flex items-center gap-4 mb-4'>
     <label htmlFor={label} className='capitalize w-16 text-[1.1rem]'>{label}:</label>
    <input type="text" id={label} className='border-1 rounded-sm p-4' value={value} onChange={(e)=>setValue(e.target.value)}/>
    </div>
  )
}
LabelInput.propTypes={
  label:PropTypes.string,
  value:PropTypes.string,
  setValue:PropTypes.func
}