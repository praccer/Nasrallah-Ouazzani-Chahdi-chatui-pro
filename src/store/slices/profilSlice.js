import { createSlice } from '@reduxjs/toolkit';

const profilSlice = createSlice({
  name: 'profil',
  initialState: { 
    name: 'Agent ARIA', 
    avatar: 'default.png' 
  },
  reducers: {
    updateProfil: (state, action) => {
      state.name = action.payload.name;
    }
  }
});

export const { updateProfil } = profilSlice.actions;
export default profilSlice.reducer;