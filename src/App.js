import logo from "./logo.svg";
import NavBar from "./components/NavBar";
import Sales from "./components/Sale";
import Sidebar from "./components/Sidebar";
import Homepage from "./components/Homepage";
import Category from "./components/Category";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Sidebar />
      <Routes>
        <Route
          path='/'
          element={<Homepage />}
        />
        <Route
          path='/sale'
          element={<Sales />}
        />
        <Route
          path='/:category'
          element={<Category />}
        />
      </Routes>
    </div>
  );
}

export default App;
