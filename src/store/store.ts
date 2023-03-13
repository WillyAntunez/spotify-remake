import { configureStore } from '@reduxjs/toolkit';
import { playerSlice } from './';

export const store = configureStore({
  reducer: {
    player: playerSlice.reducer,
  },
})