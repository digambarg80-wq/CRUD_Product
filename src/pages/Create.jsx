//Create.jsx
import React, {  useState } from 'react'
import axios from 'axios';
function Create() {

  const [value, setValue]=useState({
    product:"",
    description:"",
    price:"",
    quantity:""

  });

  function handleChange(e){
    setValue({
      ...value,[e.target.name]:e.target.value
    });
  }
axios.post("http://localhost:3000/product",value)
.then(res =>{
  console.log("Product added ",res.data);
})
.catch(err => console.log(err));
  return (
    <div>
        <h1>Add Prdouct</h1>

        <form onSubmit={handleSubmit}>
            
            <input type="text"  placeholder='ProductName' required
            
           
            /><br />

            <input type="text" placeholder='Enter description ' required 
            
           
            /><br />

            <input type="number" placeholder='enter Price of Product'  required
           
            
            /><br />

            <input type="text" placeholder='Enter Quantity of Product' required
            
            
            /><br />



            <button >Submit</button>
        
        </form>


    </div>
  )
}

export default Create;

