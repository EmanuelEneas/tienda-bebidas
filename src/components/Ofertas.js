import React from 'react';
import bebidasData from '../data/bebidas.json';
import './Ofertas.css'; // Asegúrate de incluir el archivo CSS

function Ofertas({ onSelect }) {
  const bebidasEnOferta = bebidasData.bebidas.filter(bebida => bebida.oferta);

  return (
    <div className="ofertas-container">
      <h2 className="ofertas-title">Ofertas Especiales</h2>
      <div className="ofertas-list">
        {bebidasEnOferta.map(bebida => (
          <div key={bebida.id} className="oferta-card">
            <img src={bebida.imagen} alt={bebida.nombre} className="oferta-img" />
            <h3 className="oferta-name">{bebida.nombre}</h3>
            <p className="oferta-description">{bebida.descripcion}</p>
            <p className="oferta-price">Precio en Oferta: <span className="price">${bebida.precio}</span></p>
            <button className="add-to-order-btn" onClick={() => onSelect(bebida)}>
              Añadir al pedido
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ofertas;
