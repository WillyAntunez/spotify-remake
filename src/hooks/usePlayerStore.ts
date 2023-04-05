import { useDispatch, useSelector } from "react-redux";

import { RootState, PlayerState, AppDispatch, IRgbColor, setPlayerColor, setPlayerQueue } from "../store";
import { Track } from "../utils/types";

export const usePlayerStore = () => { 
    
    const { currentColor, currentQueue, currentTrack }:PlayerState = useSelector( (state: RootState) => state.player);
    const dispatch:AppDispatch = useDispatch();

    const setCurrentColor = (rgbColors:IRgbColor) => {
        dispatch( setPlayerColor(rgbColors) );
    };

    const setQueue = ( tracks:Track[], initialIndex:number = 0 ) => {
        dispatch( setPlayerQueue({ tracks, initialIndex }) )
    };

    return {
        // * properties
        currentColor,
        currentQueue,
        currentTrack,
        // * methods
        setCurrentColor,
        setQueue,
    }

}