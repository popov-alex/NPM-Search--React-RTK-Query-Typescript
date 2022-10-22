import axios from 'axios';
import { Dispatch } from 'redux';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
  loading: boolean;
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
    loading(state) {
      state.loading = true;
      state.error = null;
      state.data = [];
    },
    loading_success(state, action: PayloadAction<string[]>) {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    },
    loading_error(state, action: PayloadAction<string | null>) {
      state.loading = false;
      state.error = action.payload;
      state.data = [];
    },
  },
});

const { loading, loading_success, loading_error } = loadingSlice.actions;

export default loadingSlice.reducer;

// action creators

export const search = (term: string) => {
  return async (dispatch: Dispatch<any>) => {
    dispatch(loading());

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

      dispatch(loading_success(names));
    } catch (err: any) {
      loading_error(err.message);
    }
  };
};
