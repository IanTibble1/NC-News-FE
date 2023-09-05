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

  useEffect(() => {
    setIsLoading(true);
    axiosBase.get(`articles/${articleId}`).then(({ data }) => {
      setArticle(data.articles);
      setIsLoading(false);
    });
  }, []);
  return (
    <main>
      <Header />
      <NavBar />
      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : (
        <ArticleCard key={article.article_id} article={article} />
      )}
      <CommentList key={article.title} article_id={articleId} />
    </main>
  );
};

export default SingleArticle;
