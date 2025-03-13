import React from 'react'

export default function Modal({children}) {

  return (
    <>
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-black/50 z-1000"></div>
    <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-8 z-1000 rounded-lg min-w-lg min-h-96'>{children}</div>
    </>
  )
}
 