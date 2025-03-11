import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchCompanyData } from '../redux/reducers/companyDataReducer';
import RenderCompanyData from '../components/companyDetails';
import { selectCompanyData, selectLoading } from '../redux/selectors/companyDataSelector';

export default function CompanyDetails() {
    const {ticker} =useParams();
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(fetchCompanyData(ticker))
    },[dispatch,ticker])
    const companyData = useSelector(selectCompanyData)
    const isLoading = useSelector(selectLoading)
    console.log("loading:",isLoading)
  return (
    <div>
      {!isLoading ? <RenderCompanyData companyData={companyData}/>:"Loading...."}
    </div>
  )
}
