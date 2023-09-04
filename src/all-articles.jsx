import Header from "./components/header";
import NavBar from "./components/navBar";
import ArticleList from "./components/article-list";
import { useState, useEffect } from "react";
import fetchArticles from "./components/fetch-articles";

const AllArticles = () => {
  const [articlesList, setArticlesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchArticles()
      .then(({ data }) => {
        setArticlesList(data.articles);
        setIsLoading(false);
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
      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : (
        <div className="article-grid">
          {articlesList.map((article) => (
            <ArticleList key={article.article_id} article={article} />
          ))}
        </div>
      )}
    </main>
  );
};

export default AllArticles;
