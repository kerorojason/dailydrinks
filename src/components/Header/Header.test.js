import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

const setup = () => {
  return shallow(<Header />);
};

describe('Renders components without error', () => {
  test('Renders Title', () => {
    const wrapper = setup();
    const component = wrapper.find('Title');
    expect(component.exists()).toBe(true);
  });

  test('Renders CreateButton', () => {
    const wrapper = setup();
    const component = wrapper.find('CreateButton');
    expect(component.exists()).toBe(true);
  });
});
