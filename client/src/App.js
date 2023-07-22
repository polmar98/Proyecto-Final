import "./App.css";
import LoginPage from "./Views/FormLogin.jsx";
import RegisterPage from "./Views/FormRegister.jsx";
import Home from "./Views/Home";
import Detail from "./Views/Detail";
import SearchResult from "./Views/SearchResult";
import Admin from "./Views/Admin";
import About from "./Views/About";
import LandingPage from "./Views/Landing";
import ShoppingCart from "./Views/ShoppingCart";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/search" element={<SearchResult />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/about" element={<About />} />
        <Route path="/shoppingCart" element={<ShoppingCart />} />
      </Routes>
    </div>
  );
}

export default App;
