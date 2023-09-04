const ArticleList = ({ article }) => {
  return (
    <section className="article-list">
      <img
        className="article-imgs"
        src={article.article_img_url}
        alt={article.article_name}
      />
      <p> {article.title}</p>
      <p> By {article.author}</p>
      <p>
        Votes: {article.votes} Comments: {article.comment_count}
      </p>
    </section>
  );
};

export default ArticleList;
