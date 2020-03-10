import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import ordersContext from '../../contexts/ordersContext';

function reducer(state, action) {
  switch (action.type) {
    case 'setName':
      return { ...state, name: action.payload };
    case 'setPrice':
      return { ...state, price: action.payload };
    case 'setNotes':
      return { ...state, notes: action.payload };
    default:
      throw new Error(`Invalid action type: ${action.type}`);
  }
}

const Modal = props => {
  const id = props.location.id;
  const [orders, setOrders] = ordersContext.useOrders();

  const currentOrder = orders.find(order => order.id === id);
  const initialState = currentOrder
    ? { name: currentOrder.name, price: currentOrder.price, notes: currentOrder.notes }
    : { name: '', price: '', notes: '' };
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const handleConfirm = () => {
    if (orders.some(order => order.id === id)) {
      // replace existing order
      setOrders(orders => orders.map(order => (order.id === id ? { id, ...state } : order)));
    } else {
      // add new order
      setOrders(orders => [...orders, { id, ...state }]);
    }
  };

  return (
    <Overlay>
      <FormWrapper>
        <Form>
          <Label>
            Name:
            <Input
              value={state.name}
              placeholder='百香多多綠茶'
              onChange={e => dispatch({ type: 'setName', payload: e.target.value })}
              name='name'
            />
          </Label>
          <Label>
            Price:
            <Input
              value={state.price}
              placeholder='35'
              onChange={e => dispatch({ type: 'setPrice', payload: e.target.value })}
              name='price'
            />
          </Label>
          <Label>
            Notes:
            <TextArea
              value={state.notes}
              placeholder='半糖去冰'
              onChange={e => dispatch({ type: 'setNotes', payload: e.target.value })}
              name='notes'
            />
          </Label>
        </Form>

        <ButtonsWrapper>
          <StyledLink to='/'>Cancel</StyledLink>
          <StyledLink primary='true' to='/' onClick={handleConfirm} name='confirm'>
            Confirm
          </StyledLink>
        </ButtonsWrapper>
      </FormWrapper>
    </Overlay>
  );
};

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1;
  top: 0;
`;
Overlay.displayName = 'Overlay';

const FormWrapper = styled.div`
  max-width: 400px;
  min-width: 320px;
  width: 80%;
  min-height: 320px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  border-radius: 0.3rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const Label = styled.label`
  width: 100%;
  margin: 0.5rem 0;
  font-weight: bold;
`;
Label.displayName = 'Label';

const Input = styled.input`
  margin: 6px 0;
  max-width: 100%;
  width: 100%;
  flex: 1 0 auto;
  outline: 0;
  padding: 10px 16px;
  background: rgb(238, 240, 243);
  border: 0;
  color: rgb(21, 37, 67);
  border-radius: 0.25rem;
  transition: box-shadow 0.1s ease, border-color 0.1s ease, -webkit-box-shadow 0.1s ease;
  box-shadow: none;
`;
Input.displayName = 'Input';

const TextArea = styled.textarea`
  margin: 6px 0;
  max-width: 100%;
  width: 100%;
  flex: 1 0 auto;
  outline: 0;
  padding: 10px 16px;
  background: rgb(238, 240, 243);
  border: 0;
  color: rgb(21, 37, 67);
  border-radius: 0.28571429rem;
  transition: box-shadow 0.1s ease, border-color 0.1s ease, -webkit-box-shadow 0.1s ease;
  box-shadow: none;
`;
TextArea.displayName = 'TextArea';

const ButtonsWrapper = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  border-top: 2px solid #e8e8e8;
  align-self: flex-end;
`;

const StyledLink = styled(NavLink)`
  flex: 1;
  padding: 1rem;
  color: ${props => (props.primary ? '#fff' : 'rgb(21,37,67)')};
  background: ${props => (props.primary ? 'rgb(21,37,67)' : '#fff')};
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.1s;
  &:first-child {
    border-bottom-left-radius: 0.3rem;
  }
  &:last-child {
    border-bottom-right-radius: 0.3rem;
  }
  &:not(:last-child) {
    border-right: 2px solid #e8e8e8;
  }
  &:hover {
    background: ${props => (props.primary ? 'rgb(12, 29, 62)' : '#f3f3f3')};
  }

  // remove styles of <NavLink>
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
StyledLink.displayName = 'StyledLink';

export default Modal;
