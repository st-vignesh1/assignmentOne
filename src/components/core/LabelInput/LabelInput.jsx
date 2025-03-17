import React from 'react'

export default function LabelInput({label}) {
  return (
    <div className='flex items-center gap-4 mb-4'>
     <label htmlFor={label} className='capitalize w-16 text-[1.1rem]'>{label}:</label>
    <input type="text" id={label} className='border-1 rounded-sm'/>
    </div>
  )
}
