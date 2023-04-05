import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Playlist, Track } from "../../utils/types";

export interface IRgbColor {
    red: Number;
    green: Number;
    blue: Number;
};

export type PlayerState  = {
    currentTrack: Track | null;
    currentTrackIndex: number | null;
    currentQueue: Track[] ;
    currentColor: IRgbColor;
}

const initialState: PlayerState = {
    currentTrack: null,
    currentTrackIndex: null,
    currentQueue: [],
    currentColor: {
        red: 0,
        green: 0,
        blue: 0,
    },
}

interface ISetQueueObject {
    tracks: Track[];
    initialIndex?: number;
}

const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        setPlayerColor(state, { payload }:PayloadAction<IRgbColor>):void {
            state.currentColor = payload;
        },
        setPlayerQueue( state, { payload }:PayloadAction<ISetQueueObject> ):void {
            const { tracks, initialIndex = 0 } = payload;

            if( tracks.length > 0 ){
                state.currentQueue = tracks;
                state.currentTrackIndex = initialIndex;
            }
            
            state.currentTrack = tracks[initialIndex]; 
        },
    },
});

const { setPlayerColor, setPlayerQueue } = playerSlice.actions;

export {
    playerSlice,
    setPlayerColor,
    setPlayerQueue,
}
