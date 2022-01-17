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
        <Route path="/" element={<Home />}>
          {" "}
        </Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/setting" element={<Setting />}></Route>
      </Routes>
    </div>
  );
}
