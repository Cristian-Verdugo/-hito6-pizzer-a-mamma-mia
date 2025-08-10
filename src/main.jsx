import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.jsx'

import { CartProvider } from './context/CartProvider';
import { PizzaProvider } from './context/PizzaProvider';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PizzaProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </PizzaProvider>
  </StrictMode>,
)
