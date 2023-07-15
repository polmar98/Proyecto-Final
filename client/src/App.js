import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./Views/FormLogin.jsx";
<<<<<<< HEAD
import Home from "./Views/Home";
import Detail from "./Views/Detail";
import SearchResult from "./Views/SearchResult";
import Admin from "./Views/Admin";
=======
import Detail from "./Views/Detail";
import {Route, Routes} from "react-router-dom";
>>>>>>> moichubr

function App() {
  return (
    <div className="App">
      <Routes>
<<<<<<< HEAD
        <Route exact path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/search" element={<SearchResult />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<Admin />} />
=======
        <Route path="/home" element={<Home/>}/>
        <Route path="/?" element= {<LoginPage />}/>
        <Route path="/detail" element={<Detail/>}/>


>>>>>>> moichubr
      </Routes>
    </div>
  );
}

export default App;
