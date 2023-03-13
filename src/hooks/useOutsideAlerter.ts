import React, { useEffect } from "react";

export const useOutsideAlerter = (ref: React.RefObject<HTMLElement>, clickOutFunction: ( event: Event) => void ) => {
  useEffect(() => {
    function handleClickOutside(event: Event) {
      const target = event.target as Node;

      if (ref.current && !ref.current.contains(target)) {
        clickOutFunction( event );
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}



