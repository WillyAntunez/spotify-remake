import { useEffect, useMemo, useRef, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";


interface HistoryNavigation  {
    prevPageExists: boolean;
    nextPageExists: boolean;
    navigateBackward: () => void;
    navigateForward: () => void;
    currentPageIdx: number;
    initialPageIdx: number;
    lastPageIdx: number;
}

export const useHistoryNavigation = ():HistoryNavigation => {

    const location = useLocation();
    const navigate = useNavigate();

    const initialPageIdx = useRef<number>( history.state.idx );
    const [currentPageIdx, setCurrentPageIdx] = useState<number>( history.state.idx );
    const [lastPageIdx, setLastPageIdx] = useState<number>( history.length - 1 );

    const prevPageExists:boolean = useMemo<boolean>(() => (currentPageIdx > initialPageIdx.current), [ currentPageIdx ] ); 
    const nextPageExists:boolean = useMemo<boolean>(() => (currentPageIdx < lastPageIdx ), [ currentPageIdx ]);
    
    const navigateBackward = ():void => {
        if(prevPageExists) {
            navigate(-1);
        }
    }
    
    const navigateForward = ():void => {
        if(nextPageExists) {
            navigate(1);
        }
    }

    useEffect(() => {
        setCurrentPageIdx( history.state.idx );
        setLastPageIdx( history.length - 1 );
    }, [location]);
  
    return {
        prevPageExists,
        nextPageExists,
        navigateBackward,
        navigateForward,
        currentPageIdx,
        initialPageIdx: initialPageIdx.current,
        lastPageIdx,
    }
}
