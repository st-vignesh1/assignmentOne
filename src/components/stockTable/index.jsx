import React from 'react'
import PropTypes from 'prop-types'
import RenderTable from "../core/table/RenderTable"
export default function StockTable({title,headers,data,titleColor,linkColumn}) {
  return (
    <div className='w-full min-h-screen'>
      <h3 className={`${titleColor} text-center font-bold  text-green-600 uppercase`} >{title}</h3>
        <div className="box-border w-full h-fit pt-10 ">
      <RenderTable
        headers={headers}
        data={data}
        dataRowStyle="odd:bg-gray-300 even:bg-white"
        linkColumn={linkColumn}
      />
    </div>
    </div>
  )
}

StockTable.propTypes={
title:PropTypes.string.isRequired,
headers:PropTypes.arrayOf(PropTypes.string).isRequired,
data:PropTypes.arrayOf([PropTypes.string,PropTypes.number]).isRequired,
titleColor:PropTypes.string,
linkColumn:PropTypes.string
}