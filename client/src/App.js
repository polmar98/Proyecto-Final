import "./App.css";
import Home from "./Views/Home";
import LoginPage from "./Views/FormLogin.jsx";
import Detail from "./Views/Detail";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/?" element= {<LoginPage />}/>
        <Route path="/detail" element={<Detail/>}/>


      </Routes>
    </div>
  );
}

export default App;
