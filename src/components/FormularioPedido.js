import React, { useState } from 'react';
import './FormularioPedido.css'; // Asegúrate de incluir el archivo CSS

function FormularioPedido({ pedido }) {
  const [cliente, setCliente] = useState({
    nombre: '',
    direccion: '',
    telefono: ''
  });

  const handleChange = (e) => {
    setCliente({ ...cliente, [e.target.name]: e.target.value });
  };

  const handleEnviarPedido = () => {
    const productos = pedido.map(bebida => `${bebida.nombre} - $${bebida.precio}`).join(', ');
    const mensaje = `Hola! Soy ${cliente.nombre}. Quisiera pedir: ${productos}. Dirección: ${cliente.direccion}. Teléfono: ${cliente.telefono}`;
    const url = `https://api.whatsapp.com/send?phone=5491169696440&text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="formulario-container">
      <h2 className="formulario-title">Completa tu Pedido</h2>
      <form className="formulario">
        <label className="form-label">
          Nombre:
          <input 
            type="text" 
            name="nombre" 
            value={cliente.nombre} 
            onChange={handleChange} 
            className="form-input"
          />
        </label>
        <label className="form-label">
          Dirección:
          <input 
            type="text" 
            name="direccion" 
            value={cliente.direccion} 
            onChange={handleChange} 
            className="form-input"
          />
        </label>
        <label className="form-label">
          Teléfono:
          <input 
            type="text" 
            name="telefono" 
            value={cliente.telefono} 
            onChange={handleChange} 
            className="form-input"
          />
        </label>
        <button type="button" onClick={handleEnviarPedido} className="form-button">
          Enviar Pedido
        </button>
      </form>
    </div>
  );
}

export default FormularioPedido;
