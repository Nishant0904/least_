import React from "react";

function OrderItem({
  itemName,
  setItemName,
  itemId,
  setItemId,
  price,
  setPrice,
  quantity,
  setQuantity,
}) {
  return (
    <div className="order-item flex-row">
      <div>
        <input
          type="text"
          placeholder="Item Name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Item ID"
          value={itemId}
          onChange={(e) => setItemId(e.target.value)}
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>
    </div>
  );
}

export default OrderItem;
