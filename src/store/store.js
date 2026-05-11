import { configureStore } from '@reduxjs/toolkit';
import messagesReducer from './slices/messagesSlice';
import profilReducer from './slices/profilSlice';
import settingsReducer from './slices/settingsSlice';

export const store = configureStore({
  reducer: {
    messages: messagesReducer,
    profil: profilReducer,
    settings: settingsReducer
  }
});