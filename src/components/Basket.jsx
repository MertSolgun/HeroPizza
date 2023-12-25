import React, { useContext, useState } from "react";
import { ContContext } from "../context/ContProvider";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

const Basket = () => {
  const { basket, setBasket } = useContext(ContContext);

  const handlePlus = (id, beforequan) => {
    const selectedItem = basket.map((item) =>
      item.id === id ? { ...item, quantiy: beforequan + 1 } : item
    );
    setBasket(selectedItem);
  };

  const handleMinus = (id, beforequan) => {
    if (beforequan > 1) {
      const selectedItem = basket.map((item) =>
        item.id === id ? { ...item, quantiy: beforequan - 1 } : item
      );
      setBasket(selectedItem);
    } else {
      const removedProduct = basket.filter((item) => item.id !== id);
      setBasket(removedProduct);
    }
  };

  return (
    <div>
      {basket.map((item) => (
        <div key={item.id}>
          <div className="basketCard">
            <img src={item.image} alt="" />
            <div className="gridMain">
              <h6 className="font fs-2">{item.name}</h6>
              <p className="fs-2">{item.price}$</p>
            </div>

            <div className="buttonDiv">
              <CiCirclePlus
                className="plus"
                onClick={() => handlePlus(item.id, item.quantiy)}
              />
              <p className="font fs-3 text-center justify-content-center mx-auto quanty">
                {item.quantiy}
              </p>
              <CiCircleMinus
                className="minus"
                onClick={() => handleMinus(item.id, item.quantiy)}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Basket;
