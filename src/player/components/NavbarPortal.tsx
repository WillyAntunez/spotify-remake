import { ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface IProps {
    children: ReactNode;
}

export const NavbarPortal = ({ children }:IProps) =>  {

    const [portalElement, setPortalElement] = useState<HTMLElement | null>(null)

    useEffect(() => {
        setPortalElement( document.getElementById('navbarPortal') )
    }, [])
    
    if(portalElement){
        return createPortal( children, portalElement);
    }else{
        return null
    }
}