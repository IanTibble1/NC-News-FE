import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./homepage";
import AllArticles from "./all-articles";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles" element={<AllArticles />} />
      </Routes>
    </main>
  );
}

export default App;
