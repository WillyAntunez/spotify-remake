import { useDispatch, useSelector } from "react-redux";

import { RootState, PlayerState, AppDispatch, IRgbColor, setPlayerColor } from "../store";

export const usePlayerStore = () => { 
    
    const { currentColor }:PlayerState = useSelector( (state: RootState) => state.player);
    const dispatch:AppDispatch = useDispatch();

    const setCurrentColor = (rgbColors:IRgbColor) => {
        dispatch( setPlayerColor(rgbColors) );
    };

    return {
        // * properties
        currentColor,
        // * methods
        setCurrentColor,
    }

}