import PropTypes from 'prop-types'
import React from 'react'

export default function Button({onClick,content,selectedCategory,id}) {

  return (
    <button onClick={(e)=>onClick(e,{content,id})} className={`bg-gray-300 p-2 rounded-sm cursor-pointer hover:bg-violet-500 hover:text-white ${selectedCategory && selectedCategory===content?"bg-violet-600 text-white":"" }`}>{content}</button>
  )
}

Button.propTypes={
  onClick:PropTypes.func,
  content:PropTypes.string,
  selectedCategory:PropTypes.string,
  id:PropTypes.number
}