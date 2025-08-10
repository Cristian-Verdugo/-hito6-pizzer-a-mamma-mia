
import React from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils/format";
import { useCart } from "../context/useCart";


const Navbar = () => {
  const { getTotal } = useCart();
  const total = getTotal();
  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <span className="navbar-brand mb-0 h1">Pizzería Mamma Mia!</span>
      <div className="d-flex align-items-center gap-2">
        <Link to="/" className="btn btn-outline-warning btn-sm">🍕 Home</Link>
        <Link to="/register" className="btn btn-outline-secondary btn-sm">� Register</Link>
        <Link to="/login" className="btn btn-outline-secondary btn-sm">🔐 Login</Link>
        <Link to="/profile" className="btn btn-outline-secondary btn-sm">👤 Profile</Link>
        <Link to="/cart" className="btn btn-info btn-sm ms-2">
          🛒 Total: ${formatPrice(total)}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
