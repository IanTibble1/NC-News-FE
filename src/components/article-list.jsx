import { Link } from "react-router-dom";

const ArticleList = ({ article }) => {
  return (
    <section className="article-list">
      <Link to={`/articles/${article.article_id}`}>
        <img
          className="article-imgs"
          src={article.article_img_url}
          alt={article.article_name}
        />
      </Link>
      <Link to={`/articles/${article.article_id}`}>
        <p> {article.title}</p>
      </Link>
      <p> By {article.author}</p>
      <p>
        Votes: {article.votes} Comments: {article.comment_count}
      </p>
    </section>
  );
};

export default ArticleList;
