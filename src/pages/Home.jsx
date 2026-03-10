//Home.jsx
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Product List Page</h1>
      <h4>Home Page</h4>

      <Link >Add Product</Link>
      <table>
        <tr>
          <thhead>Product</thhead>
          <thhead>Description</thhead>
          <thhead>price</thhead>
          <thhead>Sr.No.</thhead>
          <thhead>Quantity</thhead>
          <thhead>Actions</thhead>
        </tr>
        <tr></tr>
      </table>
    </div>
  );
}

export default Home;
