import { Reducer } from "react";
import { setTokenAction, SET_TOKEN } from "./actions";

export type TokenState = {
  token: string;
}

type TokenActions = setTokenAction;

export const tokenReducer: Reducer<TokenState, TokenActions> = (state, action) => {
  switch(action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      }
    default:
      return state;
  }
}
