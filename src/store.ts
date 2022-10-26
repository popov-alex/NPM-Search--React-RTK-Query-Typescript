import { configureStore } from '@reduxjs/toolkit';

import { repositoriesApi } from '../src/services/npmRepositories';

export const store = configureStore({
  reducer: {
    [repositoriesApi.reducerPath]: repositoriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(repositoriesApi.middleware),
});
