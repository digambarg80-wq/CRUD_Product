//Read.jsx
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
function Read() {
const {id} = useParams()
  const [data, setData] = useState({})
 
function readData(){
  axios.get(`http://localhost:3000/product/${id}`)
  .then(res =>{
    console.log("suceess get",res.data)
    setData(res.data)
  })
  .catch(err=>{
    console.log("err",err)
  })
}


  useEffect(()=>{
    readData()
  },[])


  return (
    <div>
      
      <h1>Read the Data</h1>
   
    <h1>Product : {data.product}</h1>
    <h1>Price : {data.price}</h1>
    <h1>Description : {data.description}</h1>
    <h1>Quantity : {data.quantity}</h1>

    
    <Link to="/" >Back to Home</Link>
    </div>
  )
}

export default Read
