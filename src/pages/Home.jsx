import React, { useEffect } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { selectStockHeaders, selectTopGainers, selectTopLosers } from '../redux/selectors/stockSelector';
import { fetchStockData } from '../redux/reducers/stockReducer';
import StockTable from '../components/stockTable';


export default function Home() {
    const headers = useSelector(selectStockHeaders);
    const topGainers = useSelector(selectTopGainers);
    const topLosers = useSelector(selectTopLosers)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchStockData())
    }, []);
    return (
        <div className='w-full min-h-screen p-8 flex gap-4 '>
            <StockTable title={"Top Gainers"} headers={headers} data={topGainers} titleColor={"text-green-600"}/>
            <StockTable title={"Top Losers"} headers={headers} data={topLosers} titleColor={"text-red-600"}/>
        </div>
    )
}
