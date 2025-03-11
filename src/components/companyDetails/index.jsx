import PropTypes from 'prop-types'
import React from 'react'
import { CiLocationOn } from 'react-icons/ci'
import IconLabel from '../core/iconLabel/IconLabel'
import { HiOutlineBuildingOffice } from "react-icons/hi2";

export default function RenderCompanyData({companyData}) {
  return (
   
    <div className='w-7xl bg-amber-800-500 min-h-screen  mt-8 mb-0 ml-auto mr-auto' >
    <h1 className='text-2xl mb-8 text-gray-200 font-bold'>{companyData.Name}</h1>
    <p className='text-gray-400 mb-8'>{companyData.Description}</p>
    <IconLabel Icon={ <CiLocationOn  stroke="#99a1af" fill ="white" strokeWidth="1"/>} text={companyData.Country} textColor="text-gray-400"/>
    <IconLabel Icon={ <HiOutlineBuildingOffice  stroke="#99a1af" fill ="white" strokeWidth="1"/>} text={companyData.Industry} textColor="text-gray-400"/>
    </div>

  )
}

RenderCompanyData.propTypes={
    companyData:PropTypes.arrayOf([PropTypes.string,PropTypes.number]).isRequired
}