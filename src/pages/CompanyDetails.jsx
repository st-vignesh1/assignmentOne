import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchCompanyData } from '../redux/reducers/companyDataReducer';
import RenderCompanyData from '../components/companyDetails';
import {  selectCompanyDataSelector, selectLoadingSelector } from '../redux/selectors/companyData';
import LoadingSpinner from '../components/core/LoadingSpinner';
import BarGraph from '../components/core/BarChart';
import { fetchCompanyIncomeData } from '../redux/reducers/incomeStatementReducer';
import {  selectAnnualIncomeReportSelector } from '../redux/selectors/companyIncome';

export default function CompanyDetails() {
    const {ticker} =useParams();
    const dispatch = useDispatch();


    useEffect(()=>{
      if(ticker){
        dispatch(fetchCompanyData(ticker))
        dispatch(fetchCompanyIncomeData(ticker))
      }
    },[dispatch,ticker])
   
    const companyData = useSelector(selectCompanyDataSelector)
    const isLoading = useSelector(selectLoadingSelector)
    const companyIncomeData = useSelector(selectAnnualIncomeReportSelector);
    const formattedData = companyIncomeData.map(item => ({
      ...item,
      totalRevenue: Number(item.totalRevenue),

  }));
  if(!ticker) return <div>INVALID TICKER</div>
  return (
    <div className='w-full min-h-screen bg-[#090b1c] p-9'>
      {!isLoading ?
      <>
       {companyData ? (
            <RenderCompanyData companyData={companyData} />
          ) : (
            <div className="text-white">Company data not available.</div>
          )}
      <section className='w-7xl bg-amber-800-500 h-fit  mt-8  ml-auto mr-auto mb-16'>
      {companyIncomeData?.length>0 ? (
        <BarGraph data={formattedData} />
      ) : (
        <LoadingSpinner />
      )}
      </section>
      </>
      :
      <LoadingSpinner height="h-screen"/>
      }
    </div>
  )
}
