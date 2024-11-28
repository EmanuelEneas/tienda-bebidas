# Proyecto: Bebidas Ema Cáceres

Este proyecto es una aplicación web de gestión de pedidos de bebidas, desarrollada en React. Permite a los usuarios agregar bebidas a un carrito de compras, ver las ofertas disponibles y gestionar su pedido en tiempo real.

## Descripción

La aplicación permite a los usuarios realizar pedidos de bebidas, con las siguientes funcionalidades principales:

- **Ver las Ofertas:** Se muestran bebidas en oferta que los usuarios pueden seleccionar.
- **Lista de Bebidas:** Los usuarios pueden ver todas las bebidas disponibles y agregarlas al carrito.
- **Carrito de Compras:** Se actualiza en tiempo real con las bebidas seleccionadas y su cantidad.
- **Formulario de Pedido:** Los usuarios pueden ver los detalles de su pedido y proceder con la compra.

## Características

- Los usuarios pueden agregar una bebida al carrito, y si la bebida ya está en el carrito, se actualiza su cantidad.
- El carrito de compras muestra la lista de bebidas y permite agregar o eliminar bebidas.
- La cantidad de cada bebida en el carrito se actualiza dinámicamente.

## Instalación

Para ejecutar este proyecto en tu máquina local, sigue estos pasos:

1. **Clona el repositorio**:

   ```bash
   git clone https://github.com/tu_usuario/nombre-del-repositorio.git
   cd nombre-del-repositorio
Instala las dependencias:

Asegúrate de tener Node.js y npm instalados. Luego, ejecuta el siguiente comando para instalar las dependencias necesarias:

bash
Copiar código
npm install
Inicia la aplicación:

Para ejecutar el servidor de desarrollo, usa:

bash
Copiar código
npm start
Esto abrirá la aplicación en tu navegador en http://localhost:3000.

Uso
Agregar bebidas al carrito: Los usuarios pueden seleccionar bebidas desde la lista o desde las ofertas. Si una bebida ya está en el carrito, la cantidad se incrementa automáticamente.
Ver el carrito: El carrito de compras se muestra en tiempo real con las bebidas seleccionadas y su cantidad.
Formulario de Pedido: El usuario puede ver el resumen del pedido antes de confirmarlo.
Estructura del Proyecto
La aplicación está construida con React y tiene la siguiente estructura principal:

Ofertas.js: Componente que muestra las bebidas en oferta.
ListaBebidas.js: Componente que muestra la lista de bebidas disponibles.
Carrito.js: Componente que muestra el carrito de compras.
FormularioPedido.js: Componente que muestra el formulario para finalizar el pedido.
App.js: Componente principal que integra todos los componentes y maneja el estado del pedido.
Tecnologías utilizadas
React: Biblioteca de JavaScript para construir interfaces de usuario.
useState: Hook de React para manejar el estado local de las bebidas en el carrito.
Contribución
Si deseas contribuir a este proyecto, sigue estos pasos:

Haz un fork del repositorio.
Crea una rama para tu característica (git checkout -b feature-nueva).
Haz tus cambios y asegúrate de que todo funcione correctamente.
Realiza un commit de tus cambios (git commit -am 'Añadir nueva característica').
Haz un push a tu rama (git push origin feature-nueva).
Crea un pull request para que tus cambios sean revisados.
