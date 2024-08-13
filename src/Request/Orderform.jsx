import React, { useState } from "react";
import OrderItem from "./OrderItem";

function OrderForm({ addItem }) {
  const [itemName, setItemName] = useState("");
  const [itemId, setItemId] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleAddItem = () => {
    // Validate input fields
    if (!itemName || !itemId || !price || !quantity) {
      alert("Please fill out all fields");
      return;
    }

    const newItem = {
      itemName,
      itemId,
      price: parseFloat(price),
      quantity: parseInt(quantity, 10),
    };

    // Add new item to the list
    addItem(newItem);

    // Clear the input fields
    setItemName("");
    setItemId("");
    setPrice("");
    setQuantity("");
  };

  return (
    <div className="order-form">
      <OrderItem
        itemName={itemName}
        setItemName={setItemName}
        itemId={itemId}
        setItemId={setItemId}
        price={price}
        setPrice={setPrice}
        quantity={quantity}
        setQuantity={setQuantity}
      />
      <button onClick={handleAddItem} className="add-item-button">
        +
      </button>
    </div>
  );
}

export default OrderForm;
