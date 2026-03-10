// //Home.jsx
// import React, { useEffect, useState } from 'react';

// function Home() {

//   const [data, setData] = useState([]);


//   useEffect(()=>{
//     axios.get("http://localhost:300")
//   })

//   return (
//     <div>
//       <h1>Lists of Product </h1>
// <button onClick={()=> navigate('/create')}>Add Product  +</button>
// <br />
// <hr />
//       <table>
//         <tr>
//           <th>Sr. No.</th>
//           <th>Product</th>
//           <th>Description</th>
//           <th>Price</th>
//           <th>Quantity</th>
//           <th>Actions</th>
//         </tr>
//         <tbody>
//           {
//             data.map((d,index)=>{
//               <tr key={d.id}>
//                 <td>{index+1}</td>
//                 <td>{d.product}</td>
//                 <td>{d.description}</td>
//                 <td>{d.price}</td>
//                 <td>{d.quantity}</td>

//                 <td>
//                   <button>Edit</button>
//                   {"|"}
//                   <button>Updatat</button>
//                   {"|"}
//                   <button>Delete</button>
//                 </td>
//               </tr>
//             })
//           }
//         </tbody>
//       </table>
//     </div>
//   )
// }

// export default Home
