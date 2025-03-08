import { useEffect } from "react";
import { fetchStockData } from "../../redux/reducers/stockReducer";
import { useDispatch, useSelector } from "react-redux";
import { selectStockHeaders, selectTopGainers, selectTopLosers } from "../../redux/selectors/stockSelector";

 export const useStockData=()=>{
    const headers = useSelector(selectStockHeaders);
    const topGainers = useSelector(selectTopGainers);
    const topLosers = useSelector(selectTopLosers)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchStockData())
    }, [dispatch]);
    return {headers,topGainers,topLosers}
 }
