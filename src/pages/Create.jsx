//Create.jsx
import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import  {useNavigate}from "react-router-dom"
function Create() {
 
const navigate = useNavigate();

  const [value, setValue] = useState({
    product:"",
    price:"",
    description:"",
    quantity:""
  });

  function handleChange(e){
    setValue({
      ...value,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e){
    e.preventDefault();
console.log(value);
    axios.post("http://localhost:3000/product", value)
    .then(res=>{
      console.log("Resolved data:", res.data)
      navigate("/")
      
    })
    .catch(err=>{
      console.log("Error:", err)
    })
  };

  return (
    <div>
      <h1>Add Product</h1>
<Link to="/">Back to home</Link>
      <form onSubmit={handleSubmit}>
    
        <input
          type="text"
          name="product"
          required
          onChange={handleChange}
          placeholder="Product Name"
        /><br/>

        <input
          type="number"
          name="price"
          min="1"
          required
          onChange={handleChange}
          placeholder="Product Price"
        /><br/>

        <input
          type="text"
          name="description"
          required
          onChange={handleChange}
          placeholder="Product Description"
        /><br/>

        <input
          type="number"
          name="quantity"
          min="1"
          required
          onChange={handleChange}
          placeholder="Product Quantity"
        /><br/>

        <button type="submit">Add Product</button>

      </form>
    </div>
  )
}


export default Create;

