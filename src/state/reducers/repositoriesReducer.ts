import { ActionType } from '../actionTypes';
import { Action } from '../actions';

interface State {
  loading: Boolean;
  error: string | null;
  data: string[];
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

export const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.LOADING:
      return { loading: true, error: null, data: [] };
    case ActionType.LOADING_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.LOADING_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};
