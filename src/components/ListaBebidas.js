import React from 'react';
import bebidasData from '../data/bebidas.json';
import './ListaBebidas.css'; // Asegúrate de incluir el archivo CSS

function ListaBebidas({ onSelect }) {
  return (
    <div className="bebidas-container">
      <h2 className="bebidas-title">Nuestro Catálogo de Bebidas</h2>
      <div className="bebidas-list">
        {bebidasData.bebidas.map(bebida => (
          <div key={bebida.id} className="bebida-card">
            <img src={bebida.imagen} alt={bebida.nombre} className="bebida-img" />
            <div className="bebida-info">
              <h3 className="bebida-name">{bebida.nombre}</h3>
              <p className="bebida-description">{bebida.descripcion}</p>
              <p className="bebida-price">Precio: <span className="price">${bebida.precio}</span></p>
              <button className="add-to-order-btn" onClick={() => onSelect(bebida)}>
                Añadir al pedido
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListaBebidas;
