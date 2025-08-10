
import React from "react";
import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import { usePizzas } from "../context/usePizzas";


const Home = () => {
  const { pizzaList, loading } = usePizzas();

  return (
    <main className="container mt-4">
      <Header />
      <div className="row justify-content-center">
        {loading ? (
          <div className="text-center">Cargando pizzas...</div>
        ) : (
          pizzaList.map((pizza) => (
            <div className="col-md-4 d-flex" key={pizza.id}>
              <CardPizza
                id={pizza.id}
                name={pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1)}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
              />
            </div>
          ))
        )}
      </div>
    </main>
  );
};

export default Home;
