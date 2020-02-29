import React from 'react';
import { shallow } from 'enzyme';

import ordersContext from '../../contexts/ordersContext';
import Order from './Order';

const setup = () => {
  return shallow(
    <ordersContext.OrdersProvider>
      <Order />
    </ordersContext.OrdersProvider>
  );
};

test('renders without error', () => {
  const wrapper = setup([]);
  const components = wrapper.find('Order');
  expect(components.length).toBe(1);
});
