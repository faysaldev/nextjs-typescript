import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: [],
  currentFile: null,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addNav: (state, action) => {
      const findIndex = state.page.find(
        (item) => item.id === action.payload.id
      );

      if (!findIndex) {
        state.page = [...state.page, action.payload];
        state.currentFile = action.payload;
      } else {
        state.currentFile = action.payload;
      }
    },
    removeSingleNav: (state, action) => {
      const findIndex = state.page.findIndex(
        (item) => item.id === action.payload
      );
      const newPage = [...state.page];
      if (findIndex >= 0) {
        newPage.splice(findIndex, 1);
        state.page = newPage;
        state.currentFile = null;
      } else {
        alert("This id was not found with the id", action.payload);
      }
    },

    currentTab: (state, action) => {
      state.currentFile = action.payload;
    },

    closeTab: (state, action) => {
      state.currentFile = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNav, removeSingleNav, currentTab, closeTab } =
  appSlice.actions;

export const selectPage = (state) => state.app.page;
export const setlectCurrentFile = (state) => state.app.currentFile;

export default appSlice.reducer;
