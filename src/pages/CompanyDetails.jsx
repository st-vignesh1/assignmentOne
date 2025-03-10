import React from 'react'
import { useParams } from 'react-router-dom'

export default function CompanyDetails() {
    const {ticker} =useParams();
    console.log(ticker);
  return (
    <div>
      Details
    </div>
  )
}
