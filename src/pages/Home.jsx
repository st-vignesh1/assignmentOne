
import StockTable from '../components/stockTable';
import { useDispatch, useSelector } from "react-redux";
import {  selectLoadingSelector,  selectStockHeadersSelector,  selectTopGainersSelector, selectTopLosersSelector } from "../redux/selectors/stock";
import { useEffect } from "react";
import { fetchStockData } from "../redux/reducers/stockReducer";
import LoadingSpinner from '../components/core/loadingSpinner/LoadingSpinner';
import { Link } from 'react-router-dom';

export default function Home() {
    const headers = useSelector(selectStockHeadersSelector);
    const topGainers = useSelector(selectTopGainersSelector);
    const topLosers = useSelector(selectTopLosersSelector);
    const isLoading = useSelector(selectLoadingSelector);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchStockData())
    }, [dispatch]);

    if((!headers || !topGainers || !topLosers) || isLoading ) return <div className='w-full h-screen flex justify-center items-center'><LoadingSpinner/></div>

    return (<>
    <Link to="/products" className='text-center block mt-5 text-blue-500'>Explore Products</Link>
        <div className='w-full min-h-screen p-8 flex gap-4 '>
            <StockTable title={"Top Gainers"} headers={headers} data={topGainers} titleColor={"text-green-600"} linkColumn="ticker"/>
            <StockTable title={"Top Losers"} headers={headers} data={topLosers} titleColor={"text-red-600"} linkColumn="ticker"/>
        </div>
    </>
    )
}
