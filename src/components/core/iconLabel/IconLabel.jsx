import PropTypes from 'prop-types'
import React from 'react'

export default function IconLabel({Icon,text,textColor}) {
  return (
    <div className='flex gap-3 items-center mb-3'>
      {Icon} <span className={`${textColor} text-xs`}>{text}</span>
    </div>
  )
}
IconLabel.propTypes={
    text:PropTypes.string.isRequired,

}