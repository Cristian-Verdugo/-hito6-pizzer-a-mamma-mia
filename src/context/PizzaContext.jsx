import React, { useEffect, useState } from 'react';
import { pizzas } from '../utils/pizzas';
import { PizzaContext } from './PizzaContext';

export const PizzaProvider = ({ children }) => {
  const [pizzaList, setPizzaList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulación de fetch, puedes reemplazar por fetch real si lo necesitas
    setTimeout(() => {
      setPizzaList(pizzas);
      setLoading(false);
    }, 500);
  }, []);

  return (
    <PizzaContext.Provider value={{ pizzaList, loading }}>
      {children}
    </PizzaContext.Provider>
  );
};
