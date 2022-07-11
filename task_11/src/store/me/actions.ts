import axios from "axios";
import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";

export const ME_REQUEST = 'ME_REQUEST';

export type MeRequestAction = {
  type: typeof ME_REQUEST,
}

export const meRequest: ActionCreator<MeRequestAction> = () => ({
  type: ME_REQUEST,
})

export interface IUserData {
  name?: string;
  iconImg?: string;
}


export const ME_REQUEST_SUCCESS = 'ME_REQUEST_SUCCESS';

export type MeRequestSuccessAction = {
  type: typeof ME_REQUEST_SUCCESS;
  data: IUserData;
}

export const meRequestSuccess: ActionCreator<MeRequestSuccessAction> = (data: IUserData) => ({
  type: ME_REQUEST_SUCCESS,
  data,
})

export const ME_REQUEST_ERROR = 'ME_REQUEST_ERROR';

export type MeRequestErrorAction = {
  type: typeof ME_REQUEST_ERROR;
  error: string;
}

export const meRequestError: ActionCreator<MeRequestErrorAction> = (error: string) => ({
  type: ME_REQUEST_ERROR,
  error,
})

export const meRequestAsync = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
  dispatch(meRequest());
  if (getState().token.token && getState().token.token.length > 0 && getState().token.token != 'undefined') {
    axios.get('https://oauth.reddit.com/api/v1/me.json?sr_detail=true', {
      headers: {
        Authorization: `bearer ${getState().token.token}`,
      }
    })
      .then((response) => {
        const userData = response.data;
        dispatch(meRequestSuccess({ name: userData.name, iconImg: userData.snoovatar_img }));
      })
      .catch((err) => {
        console.log(err);
        dispatch(meRequestError(String(err)));
      })
  }
}
