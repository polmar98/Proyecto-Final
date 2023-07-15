import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./Views/FormLogin.jsx";
import Home from "./Views/Home";
import Detail from "./Views/Detail";
import SearchResult from "./Views/SearchResult";
import Admin from "./Views/Admin";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/search" element={<SearchResult />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
