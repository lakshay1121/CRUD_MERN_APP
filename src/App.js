import "./App.css";
import AddUser from "./components/AddUser";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AllUser from "./components/AllUsers";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import EditUser from "./components/EditUser";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all" element={<AllUser />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/edit/:id" element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
