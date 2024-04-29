import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  function handleAddtoCart() {
    setInCart((inCart) => !inCart);
  }
  const itemName = inCart ? "in-Cart" : ""
  return (
    <li className={itemName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddtoCart}>{inCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
