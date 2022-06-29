import React, { useEffect, useState } from 'react';
import './main.global.css'
import { hot } from 'react-hot-loader/root';
import { CardsList } from "./CardsList";
import { Content } from "./Content";
import { Header } from "./Header/Header";
import { Layout } from "./Layout";
import { Text } from '../shared/Text';

function AppComponent(): JSX.Element {
  return (
    <Layout>
      <Header />
      <Content>
        <CardsList />
        <br/>
        <Text size={20} mobileSize={28}>Label 1</Text>
        <Text size={20} As='h1'>Label 2</Text>
        <Text size={20} mobileSize={16}>Label 3</Text>
      </Content>
    </Layout>
  );
}

export const App = hot(() => <AppComponent />);
