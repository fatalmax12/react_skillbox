import React from "react";
import "./main.global.css";
import { hot } from "react-hot-loader/root";
import { CardsList } from "./CardsList";
import { Content } from "./Content";
import { Header } from "./Header/Header";
import { Layout } from "./Layout";
import { UserContextProvider } from "../shared/context/userContext";
import { PostContextProvider } from "./context/PostsContext";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "../store";

const store = createStore(rootReducer, composeWithDevTools());

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

