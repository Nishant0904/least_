import React, { useState, useEffect } from "react";
import dummySvg from "../assets/dummy.svg";
import data from "./data.json";
import Sidenav from "../components/Sidenav";
import Navbar from "../components/Navbar";
import { Box } from "@mui/material";

function Inventory() {
  const [searchTerm, setSearchTerm] = useState("");
  // const [data,setData]  = useState([]);

  // useEffect((() => {
  //   const fetchData = async() => {
  //     try {
  //       const response = await fetch('http://192.168.60.90:8080/items');
  //       const currData = await response.json();
  //       console.log(currData);
  //       console.log("successful");

  //       setData(currData);
  //     }
  //     catch (error) {
  //       console.error('Error fetching the data', error);
  //     }
  //   };

  //   fetchData();
  // }),[])

  const filteredItems = data.filter((item) => {
    console.log(item.name);
    const name = item.name || ""; // Default to empty string if name is undefined
    return name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <>
      <Navbar />
      <Box height={30} />
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-xl font-bold">Inventory</h1>
              <input
                type="text"
                placeholder="Search by product name"
                className="border p-2 rounded-md w-1/3"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap">
              {filteredItems.map((product, index) => (
                <div
                  key={index}
                  className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2"
                >
                  <div className="bg-gray-200 p-4 rounded-md shadow-md text-center cursor-pointer hover:bg-gray-300">
                    <div className="flex justify-center items-center mb-4">
                      <img
                        src={dummySvg}
                        alt="Dummy"
                        className="w-full h-[100px]"
                      />
                    </div>
                    <h2 className="text-lg font-semibold">{product.name}</h2>
                    <p>Product ID: {product.productId}</p>
                    <p>Price: ${product.price}</p>
                    <p>Quantity: {product.quantity}</p>
                    <p>Manufacturing Date: {product.mfgDate}</p>
                    <p>Expiry Date: {product.expiryDate}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
}

export default Inventory;
