import React from "react";
import "./App.css";
import Home from "./pages/Home";
import FloatingWhatsapp from "./components/FloatingWhatsapp";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Home />
      <FloatingWhatsapp />
      <ToastContainer />
    </div>
  );
}

export default App;
