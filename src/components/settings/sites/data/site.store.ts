import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface SiteStore {
  isStorageEditMode: boolean;
  isShowStorageAddForm: boolean;
}

const initialState: SiteStore = {
  isStorageEditMode: false,
  isShowStorageAddForm: false,
};

export const siteSlice = createSlice({
  name: 'sites',
  initialState,
  reducers: {
    setIsStorageEditMode: (state, action: PayloadAction<boolean>) => {
      state.isStorageEditMode = !action.payload;
    },
    setIsShowStorageAddForm: (state, action: PayloadAction<boolean>) => {
      state.isShowStorageAddForm = !action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setIsStorageEditMode, setIsShowStorageAddForm } = siteSlice.actions;

export default siteSlice;
