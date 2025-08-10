
import React from "react";
import "../App.css";
import { useCart } from "../context/useCart";


const Cart = () => {
  const { cart, addToCart, removeFromCart, deleteFromCart, getTotal } = useCart();

  return (
    <div className="cart-container" style={{ maxWidth: 600, margin: '40px auto', background: '#fff', borderRadius: 10, boxShadow: '0 2px 12px #0001', padding: 32 }}>
      <h3 style={{ fontWeight: 500, marginBottom: 24 }}>Detalles del pedido:</h3>
      <ul className="cart-list" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {cart.length === 0 ? (
          <li style={{ textAlign: 'center', color: '#888', fontSize: 18 }}>No hay productos en el carrito.</li>
        ) : (
          cart.map((pizza) => (
            <li key={pizza.id} className="cart-item" style={{ display: 'flex', alignItems: 'center', marginBottom: 18, borderBottom: '1px solid #eee', paddingBottom: 12 }}>
              <img src={pizza.img} alt={pizza.name} className="cart-img" style={{ width: 60, height: 60, objectFit: 'cover', borderRadius: 8, marginRight: 16 }} />
              <span className="cart-name" style={{ flex: 1, fontWeight: 500 }}>{pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1)}</span>
              <span className="cart-price" style={{ width: 90, textAlign: 'right', fontWeight: 500, marginRight: 16 }}>${pizza.price.toLocaleString("es-CL")}</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
                <button className="cart-btn" style={{ border: '1.5px solid #e74c3c', color: '#e74c3c', background: '#fff', borderRadius: 6, width: 36, height: 36, fontSize: 20, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => removeFromCart(pizza.id)}>-</button>
                <span className="cart-count" style={{ minWidth: 32, textAlign: 'center', fontWeight: 500, fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{pizza.quantity}</span>
                <button className="cart-btn" style={{ border: '1.5px solid #3498db', color: '#3498db', background: '#fff', borderRadius: 6, width: 36, height: 36, fontSize: 20, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => addToCart(pizza)}>
                  +
                </button>
                <button className="cart-btn" style={{ border: '1.5px solid #aaa', color: '#aaa', background: '#fff', borderRadius: 6, width: 36, height: 36, fontSize: 16, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: 8 }} onClick={() => deleteFromCart(pizza.id)}>
                  x
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
      <h2 style={{ marginTop: 32, fontWeight: 700, fontSize: 28 }}>Total: ${getTotal().toLocaleString("es-CL")}</h2>
      <button className="pay-btn" style={{ marginTop: 16, background: '#222', color: '#fff', border: 'none', borderRadius: 8, padding: '10px 32px', fontSize: 18, fontWeight: 500, cursor: 'pointer' }}>Pagar</button>
    </div>
  );
};

export default Cart;
