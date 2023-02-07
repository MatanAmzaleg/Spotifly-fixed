import { configureStore } from '@reduxjs/toolkit';
import { youTubeCoreApi } from '../services/youtubeApi.service';
import playerReducer from './features/playerSlice';

export const store = configureStore({
  reducer: {
    [youTubeCoreApi.reducerPath] : youTubeCoreApi.reducer,
    player: playerReducer,
  },
  middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(youTubeCoreApi.middleware),
});
