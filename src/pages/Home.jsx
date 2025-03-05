import React, { useEffect } from 'react'
import TablePage from './TablePage'
import { useDispatch, useSelector } from 'react-redux'

import { selectStockHeaders, selectTopGainers, selectTopLosers } from '../redux/selectors/stockSelector';
import { fetchStockData } from '../redux/reducers/stockReducer';

export default function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchStockData())
    }, []);
    const headers = useSelector(selectStockHeaders);
    console.log("headers", headers)
    const topGainers = useSelector(selectTopGainers);
    const topLosers = useSelector(selectTopLosers)

    return (
        <div className='w-full min-h-screen p-8 flex gap-4 '>
            <div className='w-full min-h-screen'>
                <h3 className='text-center font-bold  text-green-600'>TOP GAINERS</h3>
                <TablePage headers={headers && headers} data={topGainers} />
            </div>
            <div className='w-full min-h-screen '>
                <h3 className='text-center font-bold text-red-600'>TOP LOSERS</h3>
                <TablePage headers={headers} data={topLosers} />
            </div>
        </div>
    )
}
