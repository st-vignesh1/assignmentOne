import React, { useEffect } from 'react'
import TablePage from './TablePage'
import { useDispatch, useSelector } from 'react-redux'
import { fetchStockData } from '../features/slices/StockSlice'

export default function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        console.log("hello")
        dispatch(fetchStockData())
    }, []);
    const data = useSelector(state => state.stock.stockData)
    return (
        <div className='bg-amber-200 w-full min-h-screen p-8 flex gap-4'>
            <TablePage />
            <TablePage />
        </div>
    )
}
