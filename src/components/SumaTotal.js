import React from 'react';

function SumaTotal({ pedido }) {
  const total = pedido.reduce((acc, bebida) => acc + bebida.precio * (bebida.cantidad || 1), 0);

  return <h3>Total: ${total}</h3>;
}

export default SumaTotal;
