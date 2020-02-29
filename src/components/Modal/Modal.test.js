import React from 'react';
import { HashRouter } from 'react-router-dom';
import { mount } from 'enzyme';

import Modal from './Modal';
import ordersContext from '../../contexts/ordersContext';

let mockDispatch;
let mockUseReducer;
let orders = {};
const setup = () => {
  mockDispatch = jest.fn();
  mockUseReducer = jest.fn().mockReturnValue([orders, mockDispatch]);
  React.useReducer = mockUseReducer;

  return mount(
    <HashRouter>
      <ordersContext.OrdersProvider>
        <Modal match={{ params: { id: 123 } }} />
      </ordersContext.OrdersProvider>
    </HashRouter>
  );
};

test('Renders Modal without error', () => {
  const wrapper = setup();
  const component = wrapper.find('Modal');
  expect(component.exists()).toBe(true);
});

describe('state controlled input field', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });

  test('state updates with value of name Input upon change', () => {
    const component = wrapper.findWhere(n => n.name() === 'Input' && n.prop('name') === 'name');
    const mockEvent = { target: { value: '紅茶拿鐵' }, preventDefault() {} };
    component.simulate('change', mockEvent);
    expect(mockDispatch).toHaveBeenCalledWith({ payload: '紅茶拿鐵', type: 'setName' });
  });

  test('state updates with value of price Input upon change', () => {
    const component = wrapper.findWhere(n => n.name() === 'Input' && n.prop('name') === 'price');
    const mockEvent = { target: { value: 70 }, preventDefault() {} };
    component.simulate('change', mockEvent);
    expect(mockDispatch).toHaveBeenCalledWith({ payload: 70, type: 'setPrice' });
  });

  test('state updates with value of notes TextArea upon change', () => {
    const component = wrapper.findWhere(n => n.name() === 'TextArea' && n.prop('name') === 'notes');
    const mockEvent = { target: { value: '去冰半糖' }, preventDefault() {} };
    component.simulate('change', mockEvent);
    expect(mockDispatch).toHaveBeenCalledWith({ payload: '去冰半糖', type: 'setNotes' });
  });
});
