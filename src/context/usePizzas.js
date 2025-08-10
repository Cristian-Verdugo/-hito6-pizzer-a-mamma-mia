import { useContext } from 'react';
import { PizzaContext } from './PizzaContext.js';

export const usePizzas = () => useContext(PizzaContext);
