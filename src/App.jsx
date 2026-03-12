import Create from './pages/Create';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Read from "./pages/Read";
import Update from './pages/Update';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/create" element={<Create />} />
        <Route path="/" element={<Home />} />
        <Route path='/read/:id' element={<Read/>}/>
        <Route path='/update/:id' element={<Update/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App;