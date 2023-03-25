import { useEffect, useState } from "react"

export const useScrollById = (id:string) => {
    
    const [scrollposition, setScrollposition] = useState<number>(0);
    
    useEffect(() => {
        const elementRef = document.getElementById( id );
        
        const onScroll = () => {
            setScrollposition(() => elementRef?.scrollTop ?? 0 );
        }
        
        if(elementRef){
            elementRef.addEventListener( 'scroll', onScroll);
        }
        
        return () => {
            elementRef?.removeEventListener( 'scroll', onScroll);
        }
    }, [scrollposition])

    return {
        scrollposition
    }

}