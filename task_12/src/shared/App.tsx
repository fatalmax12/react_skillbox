import React from "react";
import "./main.global.css";
import { hot } from "react-hot-loader/root";
import { CardsList } from "./CardsList";
import { Content } from "./Content";
import { Header } from "./Header/Header";
import { Layout } from "./Layout";
import { UserContextProvider } from "../shared/context/userContext";
import { PostContextProvider } from "./context/PostsContext";
import { Action, applyMiddleware, createStore, Middleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer, RootState } from "../store/store";
import thunk, { ThunkAction } from "redux-thunk";

// const logger: Middleware = (store) => (next) => (action) => {
//   console.log(action);
//   const returnValue = next(action);
//   console.log(returnValue);
// }

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
));

// export const timeout = (ms: number): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, _getState) => {
//   dispatch({ type: 'START' });
//   setTimeout(() => {
//     dispatch({ type: 'FINISH' });
//   }, ms);
// }

function AppComponent(): JSX.Element {
  return (
    <Provider store={store}>
        <UserContextProvider>
          <PostContextProvider>
            <Layout>
              <Header />
              <Content>
                <CardsList />
              </Content>
            </Layout>
          </PostContextProvider>
        </UserContextProvider>
    </Provider>
  );
}

export const App = hot(() => <AppComponent />);

