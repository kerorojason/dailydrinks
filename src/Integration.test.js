import React from 'react';
import { HashRouter } from 'react-router-dom';
import { mount } from 'enzyme';

import ordersContext from './contexts/ordersContext';
import Order from './components/Order/Order';
import Modal from './components/Modal/Modal';

function editInputValue(wrapper, displayName, name, value) {
  const component = wrapper.findWhere(n => n.name() === displayName && n.prop('name') === name);
  const mockEvent = { target: { value }, preventDefault() {} };
  component.simulate('change', mockEvent);
}

const setup = (addName, addPrice, addNotes) => {
  const wrapper = mount(
    <HashRouter>
      <ordersContext.OrdersProvider>
        <Order />
        <Modal match={{ params: { id: 'testId' } }} />
      </ordersContext.OrdersProvider>
    </HashRouter>
  );
  editInputValue(wrapper, 'Input', 'name', '紅茶拿鐵');
  editInputValue(wrapper, 'Input', 'price', 70);
  editInputValue(wrapper, 'TextArea', 'notes', '去冰半糖');
  const confirmButton = wrapper.findWhere(
    n => n.name() === 'StyledLink' && n.prop('name') === 'confirm'
  );
  confirmButton.simulate('click');
  return wrapper;
};

describe('Adding, editting and cancelling order', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });

  test('Order length add 1 after adding new order', () => {
    const components = wrapper.find('Card');
    expect(components.length).toBe(3);
  });

  test('Update order after editting order price', () => {
    const component = wrapper
      .findWhere(n => n.name() === 'Card' && n.prop('id') === 'testId')
      .find('EditButton');
    component.simulate('click');
    editInputValue(wrapper, 'Input', 'price', 15);

    const confirmButton = wrapper.findWhere(
      n => n.name() === 'StyledLink' && n.prop('name') === 'confirm'
    );
    confirmButton.simulate('click');

    expect(
      wrapper
        .findWhere(n => n.name() === 'Card' && n.prop('id') === 'testId')
        .findWhere(n => n.name() === 'Item' && n.prop('name') === 'price')
        .text()
    ).toBe('15');
  });

  test('Cancel order', () => {
    const component = wrapper
      .findWhere(n => n.name() === 'Card' && n.prop('id') === 'testId')
      .find('CancelButton');
    component.simulate('click');

    expect(wrapper.findWhere(n => n.name() === 'Card' && n.prop('id') === 'testId').length).toBe(0);
  });
});
