import axios from "axios"
import { useEffect } from "react"

function Test(){

useEffect(()=>{

axios.get("http://localhost:3000/product")
.then(res => console.log(res.data))
},[])
return (
    <div>
    <h1>check console adsfjlaj </h1>
    </div>
)
}

export default Test;