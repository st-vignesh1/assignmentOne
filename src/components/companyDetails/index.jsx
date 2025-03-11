import React from 'react'

export default function RenderCompanyData({companyData}) {
  return (
    <div className='w-full h-screen  p-9'>
    <div className='w-7xl bg-amber-800-500 h-screen bg-blue-950 text-white mt-0 mb-0 ml-auto mr-auto' >
    <h1>{companyData.Name}</h1>
    </div>
    </div>
  )
}
