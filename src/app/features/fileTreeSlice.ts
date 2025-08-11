import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IFile, IIntialState } from "../../Interfaces";
const intialState: IIntialState = {
  openedFiles: [],
  clickedFile: {
    fileName: "",
    fileContent: "",
  },
};
export const fileTreeSlice = createSlice({
  name: "fileTree",
  initialState: intialState,
  reducers: {
    setOpenedFiles: (state, action: PayloadAction<IFile[]>) => {
      state.openedFiles = action.payload;
    },
  },
});
export const { setOpenedFiles } = fileTreeSlice.actions;
export default fileTreeSlice.reducer;
