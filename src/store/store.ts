import { configureStore } from '@reduxjs/toolkit';

import { authSlice, playerSlice } from './slices';

export const store = configureStore({
  reducer: {
    player: playerSlice.reducer,
    auth: authSlice.reducer,
  },
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;