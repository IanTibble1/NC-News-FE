import Header from "./components/Header";
import NavBar from "./components/NavBar";
import ArticleList from "./components/ArticleList";
import { useState, useEffect } from "react";
import fetchArticles from "./components/fetchArticle";
import fetchTopics from "./components/fetchTopics";
import TopicList from "./components/TopicList";
import { useSearchParams } from "react-router-dom";
import SortByMenu from "./components/SortByMenu";

const AllArticles = () => {
  const [articlesList, setArticlesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [topicsList, setTopicsList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (topicsList.length === 0) {
      setIsLoading(true);
      fetchTopics()
        .then(({ data }) => {
          setTopicsList(data.topics);
        })
        .catch((err) => {
          setIsLoading(false);

          if (err.response) {
            setError(err.response.data.msg);
          } else {
            setError(
              "Unable to connect, please check internet connection and try again"
            );
          }
        });
    }
  }, []);

  useEffect(() => {
    if (topicsList.length > 0) {
      setIsLoading(true);
      fetchArticles(searchParams)
        .then(({ data }) => {
          setArticlesList(data.articles);
          setIsLoading(false);
          setError(null);
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
    }
  }, [searchParams, topicsList]);

  return (
    <main>
      <Header />
      <NavBar />
      {!error && (
        <section>
          <h4>Filter by Topic</h4>
          {topicsList.map((topic) => (
            <TopicList key={topic.slug} topic={topic} />
          ))}
          <SortByMenu />
        </section>
      )}

      {isLoading && (
        <div>
          <p className="loading">Loading...</p>
        </div>
      )}
      <div className="article-grid">
        {articlesList.map((article) => (
          <ArticleList key={article.article_id} article={article} />
        ))}
      </div>
      {error && <p>{error}</p>}
    </main>
  );
};

export default AllArticles;
