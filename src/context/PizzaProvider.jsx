import React, { useEffect, useState } from 'react';
import { PizzaContext } from './PizzaContext';
import { pizzas } from '../utils/pizzas';

export const PizzaProvider = ({ children }) => {
  const [pizzaList, setPizzaList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
