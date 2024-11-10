// src/components/Carrito.js
import React from 'react';

function Carrito({ pedido, setPedido }) {
  const handleEliminar = (id) => {
    setPedido(pedido.filter((bebida) => bebida.id !== id));
  };

  const handleModificarCantidad = (id, nuevaCantidad) => {
    setPedido(
      pedido.map((bebida) =>
        bebida.id === id ? { ...bebida, cantidad: nuevaCantidad } : bebida
      )
    );
  };

  const total = pedido.reduce((acc, bebida) => acc + bebida.precio * (bebida.cantidad || 1), 0);

  return (
    <div className="carrito">
      <h2>Carrito de Compras</h2>
      {pedido.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <ul>
          {pedido.map((bebida) => (
            <li key={bebida.id}>
              {bebida.nombre} - ${bebida.precio} x{' '}
              <input
                type="number"
                min="1"
                value={bebida.cantidad || 1}
                onChange={(e) => handleModificarCantidad(bebida.id, parseInt(e.target.value))}
              />
              <button onClick={() => handleEliminar(bebida.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${total}</h3>
    </div>
  );
}

export default Carrito;
