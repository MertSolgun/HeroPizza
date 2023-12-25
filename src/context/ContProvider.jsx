import React, { createContext, useState, useEffect } from "react";

export const ContContext = createContext();

export const ContProvider = (props) => {
  const localBasket = JSON.parse(localStorage.getItem("basket")) || [];
  const [basket, setBasket] = useState(localBasket);

  const [total, setTotal] = useState(0);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const totally = () => {
    const totalProductPrice = basket.reduce(
      (acc, item) => acc + item.quantiy * item.price,
      0
    );
    setTotal(totalProductPrice);
  };

  useEffect(() => {
    totally();

    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  return (
    <ContContext.Provider
      value={{
        basket,
        setBasket,
        total,
        show,
        setShow,
        handleClose,
        handleShow,
      }}
    >
      {props.children}
    </ContContext.Provider>
  );
};
