import React from 'react';
import { shallow } from 'enzyme';
import CreateButton from './CreateButton';

const setup = () => {
  return shallow(<CreateButton />);
};

test('Renders Button without error', () => {
  const wrapper = setup();
  const component = wrapper.find('Button');
  expect(component.exists()).toBe(true);
});

test('Update id state after button clicked', () => {
  let mockSetNewId = jest.fn();
  React.useState = jest.fn(() => ['', mockSetNewId]);
  const wrapper = setup();
  const component = wrapper.find('Button');
  component.simulate('click');
  component.simulate('click');
  expect(mockSetNewId.mock.calls[0][0]).not.toEqual(mockSetNewId.mock.calls[1][0]);
});
