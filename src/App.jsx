//App.jsx
import React from 'react'
import Create from './pages/Create';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Delete from './pages/Delete';
import Read from './pages.Read.jsx';
import Update from './pages/Update.jsx';
 import Test from '/Test';
function App() {

  return (
    <div>

   <BrowserRouter>
      <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/read" element={<Read/>} />
     <Route path="/create" element={<Create />} />
     <Route path="/delete" element={<Delete />} />
     <Route path="/update" element={<Update/>}/>
      </Routes>
      </BrowserRouter> 
 </div>
  )
}

export default App; 
