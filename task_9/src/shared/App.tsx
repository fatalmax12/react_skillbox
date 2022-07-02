import React, { useEffect, useState } from "react";
import "./main.global.css";
import { hot } from "react-hot-loader/root";
import { CardsList } from "./CardsList";
import { Content } from "./Content";
import { Header } from "./Header/Header";
import { Layout } from "./Layout";
import { useToken } from "../hooks/useToken";
import { tokenContext } from "./context/tokenContext";
import { UserContextProvider } from "../shared/context/userContext";
import { PostContextProvider } from "./context/PostsContext";
import { commentContext } from "./context/commentContext";

function AppComponent(): JSX.Element {
  const [token] = useToken();
  const [commentValue, setCommentValue] = useState('');

  // const { Provider } = tokenContext;

  const CommentProvider = commentContext.Provider;

  return (
    <CommentProvider value={{
      value: commentValue,
      onChange: setCommentValue,
    }}>
      <tokenContext.Provider value={token}>
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
      </tokenContext.Provider>
    </CommentProvider>
  );
}

export const App = hot(() => <AppComponent />);
