import { configureStore } from '@reduxjs/toolkit';
import { UISlice } from './features';

export const store = configureStore({
 reducer: {
  ui: UISlice.reducer,
 },
});

export type StoreState = ReturnType<typeof store.getState>;
export type ActionState = typeof store.dispatch;
