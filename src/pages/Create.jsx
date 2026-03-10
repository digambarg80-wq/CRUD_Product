//Create.jsx

import{ useState } from 'react'
import axios from "axios";
function Create() {
    const[value, setValue] = useState("");
    
    const 
   

  return (
    <div>
      
    <form onSubmit={handleSubmit}>
        <label htmlFor="prodname">Proudct</label>
        <input type="text" name="prodname" id="prodname" required placeholder='Enter product name'
        onChange={(e)=> setpName(e.target.value)}
        /><br />



        <label htmlFor="description">Description</label>
        <input type="text" name="description" id="description" placeholder='description' required
         onChange={(e)=>{}  (e.target.value)}
        /><br />


        <label htmlFor="quantity">Quantity</label>
        <input type="number" name="quantity" id="quantity" placeholder='quantity of product' required
        onChange={(e)=>{}  (e.target.value)}
        /><br />


        <label htmlFor="price">Price</label>
        <input type="number" name="price" id="price" required
         onChange={(e)=>{}  (e.target.value)}
        /><br />



        <button type='submit'>Add Product </button>
    
    </form>

    </div>
  )
}

export default Create;
