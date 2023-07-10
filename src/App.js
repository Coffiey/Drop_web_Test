import logo from "./logo.svg";
import NavBar from "./components/NavBar";
import Sales from "./components/Sale";
import Sidebar from "./components/Sidebar";
import Homepage from "./components/Homepage";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Sidebar />
      {/* <Homepage /> */}
      <Sales />
    </div>
  );
}

export default App;
