import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

import ordersContext from '../../contexts/ordersContext';
import editImage from './img/edit.svg';
import cancelImage from './img/cancel.svg';

const Card = ({ name, price, notes, id }) => {
  const [orders, setOrders] = ordersContext.useOrders();

  const handleCancel = id => {
    setOrders(orders => orders.filter(order => order.id !== id));
  };

  return (
    <>
      <ItemWrapper>
        <Item bold width='40%'>
          {name}
        </Item>
        <Item width='10%'>{price}</Item>
        <Item width='30%' wrap='true'>
          {notes}
        </Item>
        <ButtonWrapper>
          <EditButton url={editImage} to={`/order/${id}`} />
          <CancelButton url={cancelImage} onClick={() => handleCancel(id)} />
        </ButtonWrapper>
      </ItemWrapper>
    </>
  );
};

const ItemWrapper = styled.li`
  position: relative;
  width: 100%;
  min-height: 5em;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  color: rgb(21, 37, 67);
  background-color: white;
  border-radius: 0.25rem;
  padding: 1.25rem;
  box-shadow: 0 0 0.875rem 0 rgba(53, 64, 82, 0.05);
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const Item = styled.span`
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  width: ${props => props.width};
  padding: 0.5rem;
  ${props =>
    props.wrap &&
    css`
      white-space: pre-wrap;
    `}
`;

const ButtonWrapper = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const EditButton = styled(NavLink)`
  width: 1.75rem;
  height: 1.75rem;
  background: url(${props => props.url}) no-repeat;
  cursor: pointer;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
`;
const CancelButton = styled.span`
  width: 1.75rem;
  height: 1.75rem;
  background: url(${props => props.url}) no-repeat;
  cursor: pointer;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
`;

export default Card;
