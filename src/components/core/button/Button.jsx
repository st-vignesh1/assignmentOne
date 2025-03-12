import React from 'react'

export default function Button({onClick,content}) {
  return (
    <button onClick={(e)=>onClick(e,content)} className='bg-gray-300 p-2 rounded-sm cursor-pointer hover:bg-violet-500 hover:text-white'>{content}</button>
  )
}
