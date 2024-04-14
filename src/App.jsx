import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./assets/components/Home";
import Register from "./assets/components/Register";
import Login from "./assets/components/Login";
import AddBlog from "./assets/components/AddBlog";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addblog" element={<AddBlog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
