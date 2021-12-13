import React from 'react';
import '../main.global.css'
import { hot } from 'react-hot-loader/root';
import { CardsList } from "./shared/CardsList";
import { Content } from "./shared/Content";
import { Header } from "./shared/Header/Header";
import { Layout } from "./shared/Layout";

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
