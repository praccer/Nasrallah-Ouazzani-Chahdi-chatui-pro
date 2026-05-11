import { createSlice } from '@reduxjs/toolkit';

const settingsSlice = createSlice({
  name: 'settings',
  initialState: { darkMode: false },
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
    }
  }
});

export const { toggleTheme } = settingsSlice.actions;
export default settingsSlice.reducer;