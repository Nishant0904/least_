import React from "react";
import Box from "@mui/material/Box";
import Sidenav from "../components/Sidenav";
import Navbar from "../components/Navbar";
function Track() {
  return (
    <>
      <Navbar />
      <Box height={30} />
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Track</h1>
        </Box>
      </Box>
    </>
  );
}
export default Track;
