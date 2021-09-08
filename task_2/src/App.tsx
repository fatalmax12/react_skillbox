import React from "react";
import { hot } from "react-hot-loader/root";
import { Layout } from "./Layout";
import '../main.global.css'
import { Header } from "./Header/Header";
import { Content } from "./Content";
import { CardsList } from "./CardsList";


function AppComponent() {
  return (
    <Layout>
      <Header />
      <Content>
        <CardsList />
      </Content>
    </Layout>
  );
}

export const App = hot(AppComponent);
