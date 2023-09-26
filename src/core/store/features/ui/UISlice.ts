import { createSlice } from '@reduxjs/toolkit';
import type { UISliceModel } from '@/src/core/models';

const initialState: UISliceModel = {
 theme: true,
 loading: false,
};

const UISlice = createSlice({
 name: 'UI',
 initialState,
 reducers: {
  onToggleTheme: (state: UISliceModel, { payload }: { payload: boolean }) => {
   state.theme = payload;
  },
 },
});
const { onToggleTheme } = UISlice.actions;

export { UISlice, onToggleTheme };
