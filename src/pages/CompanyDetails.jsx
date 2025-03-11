import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchCompanyData } from '../redux/reducers/companyDataReducer';
import RenderCompanyData from '../components/companyDetails';
import { selectCompanyData, selectLoading } from '../redux/selectors/companyDataSelector';
import LoadingSpinner from '../components/core/loadingSpinner/LoadingSpinner';

export default function CompanyDetails() {
    const {ticker} =useParams();
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(fetchCompanyData(ticker))
    },[dispatch,ticker])
    const companyData = useSelector(selectCompanyData)
    const isLoading = useSelector(selectLoading)
    console.log("companyData:",companyData)
  return (
    <div className='w-full min-h-screen bg-[#090b1c] p-9'>
      {!isLoading ? <RenderCompanyData companyData={companyData}/>:
      <div className='w-full h-screen flex items-center justify-center'>
      <LoadingSpinner/>
      </div>
      }
    </div>
  )
}
