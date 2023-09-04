import Header from "./components/header";
import NavBar from "./components/navBar";
import ArticleList from "./components/article-list";
import { useState, useEffect } from "react";
import axios from "axios";

const AllArticles = () => {
  const [articlesList, setArticlesList] = useState([]);

  useEffect(() => {
    axios
      .get("https://news-server-1ny4.onrender.com/api/articles")
      .then(({ data }) => {
        setArticlesList(data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main>
      <Header />
      <NavBar />
      <button>Topics filler</button>
      <div className="article-grid">
        {articlesList.map((article) => (
          <ArticleList key={article.article_id} article={article} />
        ))}
      </div>
    </main>
  );
};

export default AllArticles;
