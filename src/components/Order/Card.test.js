import React from 'react';
import { shallow } from 'enzyme';

import ordersContext from '../../contexts/ordersContext';
import Card from './Card';

const setup = () => {
  return shallow(
    <ordersContext.OrdersProvider>
      <Card />
    </ordersContext.OrdersProvider>
  );
};

test('renders without error', () => {
  const wrapper = setup([]);
  const components = wrapper.find('Card');
  expect(components.length).toBe(1);
});
