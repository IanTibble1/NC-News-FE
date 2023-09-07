import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosBase from "./components/axiosBase";
import ArticleCard from "./components/ArticleCard";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import CommentList from "./components/CommentList";

const SingleArticle = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    axiosBase
      .get(`articles/${articleId}`)
      .then(({ data }) => {
        setArticle(data.articles);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        if (err.response.data.msg) {
          setError(err.response.data.msg);
        } else {
          setError(
            "Unable to connect, please check internet connection and try again"
          );
        }
      });
  }, []);
  return (
    <main>
      <Header />
      <NavBar />
      {!error && (
        <section>
          <ArticleCard key={article.article_id} article={article} />
          <CommentList key={article.title} article_id={articleId} />
        </section>
      )}

      {isLoading && (
        <div>
          <p className="loading">Loading...</p>
        </div>
      )}

      {error && <p>{error}</p>}
    </main>
  );
};

export default SingleArticle;
