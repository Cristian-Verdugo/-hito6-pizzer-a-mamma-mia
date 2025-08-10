

# Pizzería Mamma Mía - Hito 6

**Este proyecto es referente a estudios y fue desarrollado como parte de la formación en Desafío Latam.**

Este proyecto es una aplicación web desarrollada en React y Vite para la gestión de una pizzería. En el Hito 6 se implementa el manejo de estado global usando Context API para el carrito de compras y la lista de pizzas.

## Hito 6 - Context API

### 🚀 Funcionalidades implementadas:

#### Estado global con Context API
- ✅ **CartContext**: Maneja el estado global del carrito de compras, permitiendo agregar, eliminar y calcular el total de productos.
- ✅ **PizzaContext**: (Opcional) Centraliza la lista de pizzas disponibles en la aplicación.

#### Integración en componentes
- ✅ El **Navbar** consume el CartContext para mostrar el precio total del carrito en tiempo real.
- ✅ Desde la página **Home**, el usuario puede agregar productos al carrito usando el botón "Añadir" de cada tarjeta.
- ✅ En la página **Cart** se muestran los productos agregados, permitiendo sumar, restar y eliminar productos del carrito.
- ✅ El total de la compra se calcula y se muestra tanto en la página Cart como en el Navbar, siempre sincronizado.

### 🛠️ Tecnologías utilizadas:
- **React 19** con hooks (useState, useEffect, useContext)
- **Context API** para manejo de estado global
- **React Router DOM** para enrutamiento
- **Vite** como bundler y servidor de desarrollo
- **Bootstrap 5** para estilos y responsividad

### 📋 Pasos para ejecutar el proyecto:
1. Instala las dependencias:
	 ```sh
	 npm install
	 ```
2. Inicia el servidor de desarrollo:
	 ```sh
	 npm run dev
	 ```
3. Abre tu navegador en [http://localhost:5173/](http://localhost:5173/) y navega por las distintas rutas usando el menú.

### 📦 Estructura principal:

```
src/
	context/
		CartContext.js
		CartProvider.jsx
		PizzaContext.js
		PizzaProvider.jsx
		useCart.js
		usePizzas.js
	pages/
		Home.jsx
		Register.jsx
		Login.jsx
		Cart.jsx
		Pizza.jsx
		Profile.jsx
		NotFound.jsx
	components/
		Navbar.jsx
		Footer.jsx
		Header.jsx
		CardPizza.jsx
	utils/
		format.js
		pizzas.js
```

### ✅ Requerimientos del Hito 6:
1. Implementar un Context para manejar el carrito de compras.
2. Consumir el CartContext en el Navbar para mostrar el total.
3. Permitir agregar productos al carrito desde Home.
4. Mostrar y gestionar productos del carrito en la página Cart.
5. Calcular y mostrar el total de la compra en Cart y Navbar.
6. (Opcional) Centralizar la lista de pizzas en un contexto.

---
Desarrollado por Cristian Verdugo para Desafío Latam.
# -hito6-pizzer-a-mamma-mia
