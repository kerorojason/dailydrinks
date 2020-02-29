import React from 'react';
import { Route } from 'react-router';
import { HashRouter } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header/Header';
import Order from './components/Order/Order';
import Modal from './components/Modal/Modal';

import ordersContext from './contexts/ordersContext';

function App() {
  return (
    <HashRouter>
      <ordersContext.OrdersProvider>
        <AppContainer>
          <Header />
          <Order />
          <Route exact path='/order/:id' component={Modal} />
        </AppContainer>
      </ordersContext.OrdersProvider>
    </HashRouter>
  );
}

const AppContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f9fc;
  min-height: 100vh;
  @media (min-width: 768px) {
    padding: 0 10%;
  }
  @media (min-width: 922px) {
    padding: 0 20%;
  }
`;

export default App;
