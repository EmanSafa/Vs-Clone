import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IClickedFile, IFile, IIntialState } from "../../Interfaces";
const intialState: IIntialState = {
  openedFiles: [],
  clickedFile: {
    fileName: "",
    fileContent: "",
    activeTabId: null,
  },
  tabIdToDelete: null,
};
export const fileTreeSlice = createSlice({
  name: "fileTree",
  initialState: intialState,
  reducers: {
    setOpenedFiles: (state, action: PayloadAction<IFile[]>) => {
      state.openedFiles = action.payload;
    },
    setClickedFile: (state, action: PayloadAction<IClickedFile>) => {
      state.clickedFile = action.payload;
    },
    setTabIdToRemove: (state, action: PayloadAction<string | null>) => {
      state.tabIdToDelete = action.payload;
    },
  },
});
export const { setOpenedFiles, setClickedFile , setTabIdToRemove} = fileTreeSlice.actions;
export default fileTreeSlice.reducer;
