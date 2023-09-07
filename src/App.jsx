import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage";
import AllArticles from "./AllArticles";
import SingleArticle from "./SingleArticle";
import ErrorPage from "./ErrorPage";

function App() {
  return (
    <main>
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/articles" element={<AllArticles />} />
        <Route path="/articles/:articleId" element={<SingleArticle />} />
      </Routes>
    </main>
  );
}

export default App;
