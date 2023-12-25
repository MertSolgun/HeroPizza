import React from "react";
import { MenuList } from "../helper/data";
import { useNavigate, useParams } from "react-router-dom";

const PizzaDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const pizza = MenuList.find((item) => item.id === parseInt(id));

  return (
    <>
      <div className="pizzaDetails">
        <img src={pizza.image} alt="" width={"300px"} />
        <div className="nameanding">
          <h3>{pizza.name}</h3>
          <p>ingredients:{pizza.ingredients}</p>
          <div>
            <button onClick={() => navigate("/Menu")}>Back</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PizzaDetails;
