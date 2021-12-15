import React from 'react';
import './main.global.css'
import { hot } from 'react-hot-loader/root';
import { CardsList } from "./CardsList";
import { Content } from "./Content";
import { Header } from "./Header/Header";
import { Layout } from "./Layout";

//generateId
//(item) => ({...item, id: generateRandomString()})
function AppComponent(): JSX.Element {
  return (
    <Layout>
      <Header />
      <Content>
        <CardsList />
      </Content>
    </Layout>
  );
}

export const App = hot(() => <AppComponent/>);
