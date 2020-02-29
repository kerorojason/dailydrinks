import React from 'react';
import { shallow, mount } from 'enzyme';

import ordersContext from './ordersContext';

// a functional component that calls useSuccess for our tests
const FunctionalComponent = () => {
  ordersContext.useOrders();
  return <div />;
};

test('useOrders throws error when not wrapped in OrdersProvider', () => {
  expect(() => {
    shallow(<FunctionalComponent />);
  }).toThrow('useOrders must be used within a OrdersProvider');
});

test('useOrders does not throw error when wrapped in OrdersProvider', () => {
  expect(() => {
    mount(
      <ordersContext.OrdersProvider>
        <FunctionalComponent />
      </ordersContext.OrdersProvider>
    );
  }).not.toThrow();
});
