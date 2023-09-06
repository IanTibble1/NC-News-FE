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
  const [topicsList, setTopicsList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("desc");

  useEffect(() => {
    setIsLoading(true);
    fetchArticles(searchParams, sortBy, order)
      .then(({ data }) => {
        setArticlesList(data.articles);
        setIsLoading(false);
      })
      .catch((err) => {});
  }, [searchParams, sortBy, order]);

  useEffect(() => {
    fetchTopics()
      .then(({ data }) => {
        setTopicsList(data.topics);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main>
      <Header />
      <NavBar />
      <h4>Filter by Topic</h4>
      {topicsList.map((topic) => (
        <TopicList
          key={topic.slug}
          topic={topic}
          setSearchParams={setSearchParams}
        />
      ))}
      <SortByMenu setSortBy={setSortBy} setOrder={setOrder} />

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
