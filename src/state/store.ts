import { configureStore } from '@reduxjs/toolkit';

import reducer from './slice/repositoriesSlice';

export const store = configureStore({
  reducer: {
    repositories: reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
