import { combineReducers } from 'redux';
import { reducer } from './repositoriesReducer';

export const reducers = combineReducers({ repositories: reducer });

export type RootState = ReturnType<typeof reducers>;
