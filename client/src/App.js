import "./App.css";
import LoginPage from "./Views/FormLogin.jsx";
import RegisterPage from "./Views/FormRegister.jsx";
import Home from "./Views/Home";
import Detail from "./Views/Detail";
import SearchResult from "./Views/SearchResult";
import FormAdmin from "./Views/FormAdmin";
import About from "./Views/About";
import LandingPage from "./Views/Landing";
import ShoppingCart from "./Views/ShoppingCart";
import UserProfile from "./Views/UserProfile";
import Contact from "./Views/Contact";
import PaymentComplete from "./Components/PaymentComplete";
import Checkout from "./Views/Checkout";
import { Routes, Route, Form } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "flowbite";
import Users from "./Views/Users";
import PackagesAdmin from "./Views/PackagesAdmin";
import Admin from "./Views/Admin";

function App() {
  return (
    <div className="App">
      <ToastContainer position={toast.POSITION.BOTTOM_RIGHT} autoClose={1500} />
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
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
