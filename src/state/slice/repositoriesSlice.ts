import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import axios from 'axios';
import { Dispatch } from 'redux';

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
  return async (dispatch: Dispatch<any>) => {
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
