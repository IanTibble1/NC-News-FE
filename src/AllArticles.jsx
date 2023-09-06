import Header from "./components/Header";
import NavBar from "./components/NavBar";
import ArticleList from "./components/ArticleList";
import { useState, useEffect } from "react";
import fetchArticles from "./components/fetchArticle";
import fetchTopics from "./components/fetchTopics";
import TopicList from "./components/TopicList";

const AllArticles = () => {
  const [articlesList, setArticlesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [topicsList, setTopicsList] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetchArticles()
      .then(({ data }) => {
        setArticlesList(data.articles);
        setIsLoading(false);
      })
      .catch((err) => {});
  }, []);

  useEffect(() => {
    fetchTopics()
      .then(({ data }) => {
        setTopicsList(data.topics);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <main>
      <Header />
      <NavBar />
      <h4>Filter by Topic</h4>
      {topicsList.map((topic) => (
        <TopicList key={topic.slug} topic={topic} />
      ))}

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
