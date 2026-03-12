//Update.jsx

import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
function Update() {

  const {id}= useParams()
const navigate = useNavigate()
  const [value, setValue] = useState({
    product:"",
    price:"",
    description:"",
    quantity:""
  })

function getUpdate(){
 
  axios.get(`http://localhost:3000/product/${id}`)
  .then(res =>{
    setValue(res.data)
  })
  .catch(err=>{
    console.log("err",err)
  })
};

function handleChange(e){
  setValue({
    ...value,
    [e.target.name]:e.target.value
  })
}

function handleSubmit(e){
  e.preventDefault()
  axios.put(`http://localhost:3000/product/${id}`,value)
  navigate("/")

}
useEffect(()=>{
  getUpdate()
},[])



 
  return (
    <div>
      <h1>Update List </h1>

      <Link to="/">back to home</Link>
    <form onSubmit={handleSubmit} >
    <input type="text" required name='product' 
    value={value.product}
    onChange={handleChange}
    /><br/>

    <input type="number" required name='price' 
    value={value.price}
    onChange={handleChange}
    /><br/>

    <input type="text" required name='description' 
    value={value.description}
    onChange={handleChange}
    /><br/>

    <input type="number" min="1" required name='quantity' 
    value={value.quantity}
    onChange={handleChange}
    /><br/>

    </form>
<button type='submit'>Updated Product</button>
    </div>
  )
}

export default Update;
