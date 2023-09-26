import { createSlice } from '@reduxjs/toolkit';
import type { UISliceModel } from '@/src/core/models';

const initialState: UISliceModel = {
 theme: true,
 loading: false,
};

const UISlice = createSlice({
 name: 'UI',
 initialState,
 reducers: {},
});

export { UISlice };
