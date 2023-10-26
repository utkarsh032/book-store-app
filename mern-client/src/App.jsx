import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <MyFooter />
    </>
  );
}

export default App;
