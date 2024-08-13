import React from "react";

function OrderTable({ items }) {
  return (
    <div className="order-table">
      <h2>Order Summary</h2>
      {items.length === 0 ? (
        <p>No items added.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Item ID</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{item.itemName}</td>
                <td>{item.itemId}</td>
                <td>{item.price.toFixed(2)}</td>
                <td>{item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default OrderTable;
