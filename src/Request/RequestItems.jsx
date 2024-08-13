import React from "react";
import Box from "@mui/material/Box";
import Sidenav from "../components/Sidenav";
import Navbar from "../components/Navbar";
import { useState } from "react";
import OrderForm from "./Orderform";
import OrderTable from "./OrderTable";
import orderData from "./data3.json";
import "./Req.css";

function Track() {
  const [items, setItems] = useState([]);

  // Function to add a new item to the list
  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  // Function to save items to the JSON file
  const handleEnter = () => {
    if (items.length === 0) {
      alert("No items to save!");
      return;
    }

    // Update the data.json content by appending new items
    const updatedData = orderData.map((item) => item).concat(items);

    // Update the local data.json file (in the code)
    // Note: Direct file updates in a client-side app require server-side logic
    // For demonstration, we'll simulate this action
    const jsonData = JSON.stringify(updatedData, null, 2);

    // Simulating writing to the data.json file
    // In real apps, use server-side code or local storage to persist data
    console.log("Updated JSON Data:", jsonData);

    // Reset the items state
    setItems([]);
    alert("Items have been added to the JSON file!");
  };
  return (
    <>
      <Navbar />
      <Box height={30} />
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <div className="App">
            <div className="req-heading">
              <h1>Request Items</h1>
            </div>
            <OrderForm addItem={addItem} />
            <OrderTable items={items} />
            <button onClick={handleEnter} className="enter-button">
              Request
            </button>
          </div>
        </Box>
      </Box>
    </>
  );
}
export default Track;
