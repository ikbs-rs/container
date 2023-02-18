import React from "react";
import "./App.css";
import Header from "./components/regions/Header";
import Sidebar from "./components/regions/Sidebar";
import Body from "./components/regions/Body";
import Footer from "./components/regions/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Sidebar />
        <Body />
      </div>
      <Footer />
    </div>
  );
}

export default App;
