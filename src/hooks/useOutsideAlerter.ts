import React, { useEffect } from "react";

export const useOutsideAlerter = (ref: React.RefObject<HTMLElement>, clickOutFunction: VoidFunction ) => {
  useEffect(() => {
    function handleClickOutside(event: Event) {
      const target = event.target as Node;

      if (ref.current && !ref.current.contains(target)) {
        clickOutFunction();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}



