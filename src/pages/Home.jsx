
import StockTable from '../components/stockTable';
import { useDispatch, useSelector } from "react-redux";
import { selectLoading, selectStockHeaders, selectTopGainers, selectTopLosers } from "../redux/selectors/stockSelector";
import { useEffect } from "react";
import { fetchStockData } from "../redux/reducers/stockReducer";
import LoadingSpinner from '../components/core/loadingSpinner/LoadingSpinner';
export default function Home() {
    const headers = useSelector(selectStockHeaders);
    const topGainers = useSelector(selectTopGainers);
    const topLosers = useSelector(selectTopLosers);
    const isLoading = useSelector(selectLoading);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchStockData())
    }, [dispatch]);

    if((!headers || !topGainers || !topLosers) || isLoading ) return <div className='w-full h-screen flex justify-center items-center'><LoadingSpinner/></div>

    return (
        <div className='w-full min-h-screen p-8 flex gap-4 '>
            <StockTable title={"Top Gainers"} headers={headers} data={topGainers} titleColor={"text-green-600"} linkColumn="ticker"/>
            <StockTable title={"Top Losers"} headers={headers} data={topLosers} titleColor={"text-red-600"} linkColumn="ticker"/>
        </div>
    )
}
