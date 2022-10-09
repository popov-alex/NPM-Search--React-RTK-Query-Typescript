import axios from 'axios';
import { Dispatch } from 'redux';

import { ActionType } from '../actionTypes';
import { Action } from '../actions';

export const search = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.LOADING,
    });
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

      dispatch({
        type: ActionType.LOADING_SUCCESS,
        payload: names,
      });
    } catch (err: any) {
      dispatch({
        type: ActionType.LOADING_ERROR,
        payload: err.message,
      });
    }
  };
};
