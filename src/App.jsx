import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./homepage";
import AllArticles from "./all-articles";
import SingleArticle from "./individual-article";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles" element={<AllArticles />} />
        <Route path="/articles/:articleId" element={<SingleArticle />} />
      </Routes>
    </main>
  );
}

export default App;
