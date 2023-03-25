import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Track } from "../../utils/types";

export interface IRgbColor {
    red: Number;
    green: Number;
    blue: Number;
};

export type PlayerState  = {
    currentTrack: Track | null;
    currentPlayList: Track[] ;
    playerMode: 'PREVIEW';
    currentColor: IRgbColor;
}

const initialState: PlayerState = {
    currentTrack: null,
    currentPlayList: [],
    playerMode: 'PREVIEW',
    currentColor: {
        red: 0,
        green: 0,
        blue: 0,
    },
}

const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        setPlayerColor(state, { payload }:PayloadAction<IRgbColor>) {
            state.currentColor = payload;
        },
    },
});

const { setPlayerColor } = playerSlice.actions;

export {
    playerSlice,
    setPlayerColor,
}
