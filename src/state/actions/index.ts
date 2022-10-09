import { ActionType } from '../actionTypes';

interface Loading {
  type: ActionType.LOADING;
}

interface LoadingSuccess {
  type: ActionType.LOADING_SUCCESS;
  payload: string[];
}

interface LoadingError {
  type: ActionType.LOADING_ERROR;
  payload: string;
}

export type Action = Loading | LoadingSuccess | LoadingError;
