import PropTypes from 'prop-types'
import React from 'react'
import ReactDom from 'react-dom'
export default function Modal({children,setIsModalOpen}) {

  return ReactDom.createPortal(
    <>
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-black/50 z-1000" onClick={()=>setIsModalOpen(false)}></div>
    <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-8 z-1000 rounded-lg min-w-96 min-h-72'>{children}</div>
    </>,
    document.getElementById("portal")
  )
}
 
Modal.propTypes={
  setIsModalOpen:PropTypes.func
}