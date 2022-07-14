import { ActionCreator, Reducer } from "redux";
import { MeRequestAction, MeRequestErrorAction, MeRequestSuccessAction, ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS } from "./me/actions";
import { meReducer, MeState } from "./me/reducer";
import { setTokenAction, SET_TOKEN } from "./token/actions";
import { tokenReducer, TokenState } from "./token/reducer";

export type RootState = {
  commentText: string;
  token: TokenState;
  me: MeState;
};

const initialState: RootState = {
  commentText: "Привет, Skillbox!",
  token: {
    token: '',
  },
  me: {
    loading: false,
    error: '',
    data: {},
  },
};

const UPDATE_COMMENT = "UPDATE_COMMENT";


type updateCommentAction = {
  type: typeof UPDATE_COMMENT;
  text: string,
}

export const updateComment: ActionCreator<updateCommentAction> = (text) => ({
  type: UPDATE_COMMENT,
  text,
});

type MyAction = updateCommentAction | setTokenAction | MeRequestAction | MeRequestSuccessAction | MeRequestErrorAction | setTokenAction;
type NewType = Reducer<RootState, MyAction>;

export const rootReducer: NewType = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return {
        ...state,
        commentText: action.text,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: tokenReducer(state.token, action) ,
      };
    case ME_REQUEST:
    case ME_REQUEST_SUCCESS:
    case ME_REQUEST_ERROR:
      //Композиция редьюсеров
      return {
        ...state,
        me: meReducer(state.me, action),
      }
    default:
      return state;
  }
};
