import React from "react";
import "../../styles/components/cards/dish-card.css";
import img from "../../images/pictures/restaurants/ThaiPhai.png"

const DishCard = ({ dish }) => {
  return (
    <div className="dish">
      <div className="dish_description">
        <p>{dish.name}</p>
        <p>{dish.price} lei</p>
        <p>{dish.ingredients}</p>
      </div>
      <div className="dish_img">
        <img src={img} alt={dish.name} />
      </div>
    </div>
  );
};

export default DishCard;