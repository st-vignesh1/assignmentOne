import PropTypes from 'prop-types'
import React from 'react'

export default function LoadingSpinner({height}) {
  return (
    <div className={`w-full flex items-center justify-center ${height}`}>
      <img src="/DoubleRingLoadingSpinner.svg" alt="Loading spinner"/>
      </div>
  )
}
LoadingSpinner.prototype={
    height:PropTypes.string
}