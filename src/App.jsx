import React from "react";
import Navbar from "./components/Navbar";
import ProductSection from "./components/ProductSection";
import LibraryManagement from "./components/LibraryManagement";
import PersonHierarchy from "./components/PersonHierarchy";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />

      <header className="hero" id="home">
        <h1>React Component Experiments</h1>
        <p>
          This project contains multiple React experiments demonstrating reusable
          components, props, hooks, state management, object-oriented concepts,
          and responsive user interface design.
        </p>
      </header>

      <ProductSection />
      <LibraryManagement />
      <PersonHierarchy />
      <Footer />
    </div>
  );
}

export default App;