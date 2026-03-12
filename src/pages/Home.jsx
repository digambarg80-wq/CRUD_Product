//Home.jsx

import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
function Home() {
    const [data, setData] = useState([]);

    const handleData =()=>{
        axios.get("http://localhost:3000/product")
        .then(res =>{
            console.log("Data fetch Successfully:",res.data)
            setData(res.data)
        })
        .catch(err =>{
            console.log("Error occcur ",err)
        })
      
    };
    useEffect(()=>{
        handleData()
    },[])

    function pDelete (id){
        axios.delete(`http://localhost:3000/product/${id}`)
        .then(()=>{
            handleData();
        })

    }

  return (
    <div>
      <h1>List of Products</h1>

<Link to="/create">Add Product +</Link>
        <table border="1">
            <thead>
                <tr>
                    <th>Sr.No.</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>quantity</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
data.map((d,index)=>(
    <tr key={d.id}>
        <td>{index+1}</td>
        <td>{d.product}</td>
        <td>{d.price}</td>
        <td>{d.description}</td>
        <td>{d.quantity}</td>
        <td>
            <Link to={`/read/${d.id}`}>Read</Link>
            {"|"}
           <Link to={`/update/${d.id}`}>edit</Link>
            {"|"}
            <button onClick={()=>pDelete(d.id)}>Delete</button>
        </td>
    </tr>
))
                }
            </tbody>
        </table>
    </div>
  )
}

export default Home;
