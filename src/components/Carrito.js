import React from 'react';
import SumaTotal from './SumaTotal';

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

  const handleFinalizarCompra = () => {
    // Aquí deberías integrar MercadoPago
    const total = pedido.reduce((acc, bebida) => acc + bebida.precio * (bebida.cantidad || 1), 0);
    alert(`Tu compra total es de $${total}. Redirigiendo a MercadoPago...`);

    // Simulación de la integración con MercadoPago
    window.location.href = `https://link.mercadopago.com.ar/emacaceres25`;
  };

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
                onChange={(e) =>
                  handleModificarCantidad(bebida.id, parseInt(e.target.value))
                }
              />
              <button onClick={() => handleEliminar(bebida.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}

      <SumaTotal pedido={pedido} />

      <button onClick={handleFinalizarCompra}>Finalizar Compra</button>
    </div>
  );
}

export default Carrito;
