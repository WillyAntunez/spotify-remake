import { createSlice } from "@reduxjs/toolkit";

import { Track } from "../../interfaces/Track";

type PlayerState  = {
    currentTrack: Track | null;
    currentPlayList: Track[] ;
    playerMode: 'PREVIEW';
}

const initialState: PlayerState = {
    currentTrack: null,
    currentPlayList: [],
    playerMode: 'PREVIEW'
}

export const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {

    }
});

export const {} = playerSlice.actions;
