// src/App.js
import React, { useState } from 'react';
import './App.css';
import ListaBebidas from './components/ListaBebidas';
import Ofertas from './components/Ofertas';
import FormularioPedido from './components/FormularioPedido';
import Carrito from './components/Carrito';

function App() {
  const [pedido, setPedido] = useState([]);

  const handleAgregarAlPedido = (bebida) => {
    const bebidaExistente = pedido.find((item) => item.id === bebida.id);
    if (bebidaExistente) {
      setPedido(
        pedido.map((item) =>
          item.id === bebida.id
            ? { ...item, cantidad: (item.cantidad || 1) + 1 }
            : item
        )
      );
    } else {
      setPedido([...pedido, { ...bebida, cantidad: 1 }]);
    }
  };

  return (
    <div>
      <h1> Bebidas Ema Caceres</h1>
      <Ofertas onSelect={handleAgregarAlPedido} />
      <ListaBebidas onSelect={handleAgregarAlPedido} />
      <Carrito pedido={pedido} setPedido={setPedido} />
      <FormularioPedido pedido={pedido} />
    </div>
  );
}

export default App;
