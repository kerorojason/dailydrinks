import React from 'react';

const ordersContext = React.createContext();

function useOrders() {
  const context = React.useContext(ordersContext);

  if (!context) {
    throw new Error('useOrders must be used within a OrdersProvider');
  }

  return context;
}

function OrdersProvider(props) {
  const [orders, setOrders] = React.useState([
    { name: '百香多多綠茶', id: '1', price: 35, notes: '少冰' },
    { name: '四季春青茶', id: '2', price: 25, notes: '去冰\n微糖' }
  ]);

  const value = React.useMemo(() => [orders, setOrders], [orders]);

  return <ordersContext.Provider value={value} {...props} />;
}

export default { OrdersProvider, useOrders };
