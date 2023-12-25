import React, { useContext, useState } from "react";
import { MenuList } from "../helper/data";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { ContContext } from "../context/ContProvider";
import { useNavigate } from "react-router-dom";

export const Menu = () => {
  const { show, setShow, handleClose, handleShow } = useContext(ContContext);
  const navigate = useNavigate();

  const { basket, setBasket } = useContext(ContContext);

  const addBasket = (id, beforequan) => {
    handleShow();
    const proAdd = MenuList.find((item) => item.id === id);

    const basketCheck = basket.some((item) => item.id === id);

    const sameProduct = basket.find((item) => item.id === id);

    if (sameProduct) {
      setBasket(
        basket.map((item) =>
          item.id === id
            ? { ...item, quantiy: item.quantiy + beforequan }
            : item
        )
      );
    }

    if (!basketCheck) {
      setBasket((prevBasket) => [...prevBasket, proAdd]);
    }
  };

  return (
    <div>
      <h1 className="text-center font mt-5">Our Menu</h1>
      <div className="text-center font mt-5 fw-bold ourMenu">
        {MenuList.map((item) => (
          <Card style={{ width: "18rem" }} key={item.id}>
            <Card.Img
              variant="top"
              src={item.image}
              onClick={() => navigate(`/Menu/${item.id}`)}
            />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text className="item-price">{item.price}$</Card.Text>
              <Button onClick={() => addBasket(item.id, item.quantiy)}>
                Add To Basket
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};
