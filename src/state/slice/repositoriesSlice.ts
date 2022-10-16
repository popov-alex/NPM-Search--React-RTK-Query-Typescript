import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import axios from 'axios';
import { Dispatch } from 'redux';

// получается, я вообще потерял связь с типами Actions импорты которых ниже. или это норм? тк в createSlice мы в name пишем как раз я так понимаю, action type для будущих actions, а само название actions берется из названия reducers. То есть можно вообще удалить папки actionTypes and actions???

import { ActionType } from '../actionTypes';
import { Action } from '../actions';

interface State {
  loading: Boolean;
  error: string | null;
  data: string[];
}

const initialState: State = {
  loading: false,
  error: null,
  data: [],
};

// reducers

const loadingSlice = createSlice({
  name: 'ActionType',
  initialState,
  reducers: {
    LOADING(state) {
      state.loading = true;
      state.error = null;
      state.data = [];
    },
    LOADING_SUCCESS(state, action: PayloadAction<string[]>) {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    },
    LOADING_ERROR(state, action: PayloadAction<string | null>) {
      state.loading = false;
      state.error = action.payload;
      state.data = [];
    },
  },
});

export const { LOADING, LOADING_ERROR, LOADING_SUCCESS } = loadingSlice.actions;

export default loadingSlice.reducer;

// action creators

export const search = (term: string) => {
  // тут вообще должен быть dispatch или тот кастом хук что я создал в hooks folder? я так понимаю кастом хук лучше знает про стейт?

  return async (dispatch: Dispatch<any>) => {
    // тут в первоначальной версии проекта было Dispatch<Action> - я поменял на <any> тк иначе следующая строка, где код dispatch(LOADING()) Тайпскрипт ругался.

    dispatch(LOADING());

    try {
      const { data } = await axios.get(
        'https://registry.npmjs.org/-/v1/search',
        {
          params: {
            text: term,
          },
        }
      );

      const names = data.objects.map((result: any) => result.package.name);

      console.log(names);

      dispatch(LOADING_SUCCESS(names));
    } catch (err: any) {
      LOADING_ERROR(err.message);
    }
  };
};
