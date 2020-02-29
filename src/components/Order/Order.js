import React from 'react';
import styled from 'styled-components';

import ordersContext from '../../contexts/ordersContext';
import Card from './Card';

const Order = () => {
  const [orders, setOrders] = ordersContext.useOrders();

  return (
    <OrderContainer>
      <ListWrapper>
        {orders.map(order => (
          <Card key={order.id} {...order} />
        ))}
      </ListWrapper>
    </OrderContainer>
  );
};

const OrderContainer = styled.div`
  width: 100%;
`;

const ListWrapper = styled.ul`
  width: 100%;
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

export default Order;
