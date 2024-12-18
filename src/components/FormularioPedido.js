import React, { useState } from 'react';
import './FormularioPedido.css'; 

function FormularioPedido({ pedido }) {
  const [cliente, setCliente] = useState({
    nombre: '',
    direccion: '',
    telefono: '',
  });

  const [comprobante, setComprobante] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    setCliente({ ...cliente, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setComprobante(file);

      // Generar la vista previa del archivo
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result); // Guardar la URL de la imagen para vista previa
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEnviarPedido = () => {
    const productos = pedido
      .map((bebida) => `${bebida.nombre} - $${bebida.precio}`)
      .join(', ');
    const mensaje = `Hola! Soy ${cliente.nombre}. Quisiera pedir: ${productos}. Dirección: ${cliente.direccion}. Teléfono: ${cliente.telefono}.`;

    if (!comprobante) {
      alert('Por favor, adjunta el comprobante de pago antes de enviar.');
      return;
    }

    // Enlace de WhatsApp
    const url = `https://api.whatsapp.com/send?phone=5491169696440&text=${encodeURIComponent(
      mensaje
    )}`;
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
        <label className="form-label">
          Comprobante de pago:
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="form-input"
          />
        </label>

        {preview && (
          <div className="preview-container">
            <h3>Vista previa del comprobante:</h3>
            <img src={preview} alt="Comprobante de pago" className="preview-image" />
          </div>
        )}

        <button
          type="button"
          onClick={handleEnviarPedido}
          className="form-button"
        >
          Enviar Pedido
        </button>
      </form>
    </div>
  );
}

export default FormularioPedido;

