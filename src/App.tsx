import "./App.css";
import Home from "./Pages/Home/Home";
import Navbar from "./Shared/Navbar";

function App() {
  return (
    <div className="bg-gray-100">
      <Navbar></Navbar>
      <Home></Home>
    </div>
  );
}

export default App;
