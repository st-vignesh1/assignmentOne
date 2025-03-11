import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchCompanyData } from '../redux/reducers/companyDataReducer';
import RenderCompanyData from '../components/companyDetails';
import { selectCompanyData, selectLoading } from '../redux/selectors/companyDataSelector';
import LoadingSpinner from '../components/core/loadingSpinner/LoadingSpinner';
import BarGraph from '../components/core/barchart/BarGraph';
import { fetchCompanyIncomeData } from '../redux/reducers/incomeStatementReducer';
import { selectAnnualIncomeReport } from '../redux/selectors/companyIncomeSelector';

export default function CompanyDetails() {
    const {ticker} =useParams();
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(fetchCompanyData(ticker))
      dispatch(fetchCompanyIncomeData(ticker))
    },[dispatch,ticker])
    const companyData = useSelector(selectCompanyData)
    const isLoading = useSelector(selectLoading)
    const companyIncomeData = useSelector(selectAnnualIncomeReport);
    const formattedData = companyIncomeData.map(item => ({
      ...item,
      totalRevenue: Number(item.totalRevenue),

  }));
  return (
    <div className='w-full min-h-screen bg-[#090b1c] p-9'>
      {!isLoading ?
      <>
      <RenderCompanyData companyData={companyData}/>
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
