import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosBase from "./components/axios-base";
import ArticleCard from "./components/article-card";
import Header from "./components/header";
import NavBar from "./components/navBar";

const SingleArticle = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    axiosBase.get(`articles/${articleId}`).then(({ data }) => {
      setArticle(data.articles);
    });
  }, []);
  return (
    <main>
      <Header />
      <NavBar />
      <ArticleCard key={article.article_id} article={article} />
    </main>
  );
};

export default SingleArticle;
