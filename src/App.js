import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import BgParticles from "./pages/particles/BgParticles";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
