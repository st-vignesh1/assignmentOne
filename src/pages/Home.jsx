
import StockTable from '../components/stockTable';
import { useStockData } from '../utils/hooks/useStockData';


export default function Home() {
const {headers,topGainers,topLosers}=useStockData()

    return (
        <div className='w-full min-h-screen p-8 flex gap-4 '>
            <StockTable title={"Top Gainers"} headers={headers} data={topGainers} titleColor={"text-green-600"}/>
            <StockTable title={"Top Losers"} headers={headers} data={topLosers} titleColor={"text-red-600"}/>
        </div>
    )
}
