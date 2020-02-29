import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const setup = () => {
  return shallow(<App />);
};
test('App renders without error', () => {
  const wrapper = setup();
  const component = wrapper.find('AppContainer');
  expect(component.length).toBe(1);
});
