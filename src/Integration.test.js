import React from 'react';
import { HashRouter } from 'react-router-dom';
import { mount } from 'enzyme';

import ordersContext from './contexts/ordersContext';
import Order from './components/Order/Order';
import Modal from './components/Modal/Modal';

const setup = (addName, addPrice, addNotes) => {
  const wrapper = mount(
    <HashRouter>
      <ordersContext.OrdersProvider>
        <Order />
        <Modal match={{ params: { id: 3 } }} />
      </ordersContext.OrdersProvider>
    </HashRouter>
  );
  inputValue(wrapper, 'Input', 'name', '紅茶拿鐵');
  inputValue(wrapper, 'Input', 'price', '70');
  inputValue(wrapper, 'TextArea', 'notes', '去冰半糖');
  const confirmButton = wrapper.findWhere(
    n => n.name() === 'StyledLink' && n.prop('name') === 'confirm'
  );
  confirmButton.simulate('click');
  return wrapper;
};

test('Order length add 1 after adding new order', () => {
  const wrapper = setup();
  const components = wrapper.find('Card');
  expect(components.length).toBe(3);
});

function inputValue(wrapper, displayName, name, value) {
  const component = wrapper.findWhere(n => n.name() === displayName && n.prop('name') === name);
  const mockEvent = { target: { value }, preventDefault() {} };
  component.simulate('change', mockEvent);
}
