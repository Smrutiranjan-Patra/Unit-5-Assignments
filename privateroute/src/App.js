import "./styles.css";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Product } from "./components/Product";
import { Users } from "./components/Users";
import { Login } from "./components/Login";
import { Dashboard } from "./components/Dashboard";
import { Setting } from "./components/Settings";
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} className="route"></Route>
        <Route path="/about" element={<About />} className="route"></Route>
        <Route path="/contact" element={<Contact />} className="route"></Route>
        <Route path="/product" element={<Product />} className="route"></Route>
        <Route path="/users" element={<Users />} className="route"></Route>
        <Route path="/login" element={<Login />} className="route"></Route>
        <Route path="/dashboard" element={<Dashboard />} className="route"></Route>
        <Route path="/setting" element={<Setting />} className="route"></Route>
      </Routes>
    </div>
  );
}
