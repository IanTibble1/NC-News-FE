import moment from "moment";
import axiosBase from "./axios-base";
import { useParams } from "react-router-dom";

const ArticleCard = ({ article }) => {
  const handleClick = (event) => {
    event.preventDefault();

    axiosBase
      .patch(`articles/${article.article_id}`, { inc_vote: 1 })
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };

  const formatDate = moment(article.created_at).utc().format("DD-MM-YYYY");

  return (
    <main>
      <section className="article-card">
        <div className="article-image">
          <img src={article.article_img_url} alt={article.title} />
        </div>
        <div className="blurred-textbox">
          <p>
            <strong>
              {article.title} ({article.topic}){" "}
            </strong>
            <br />
            By {article.author} <br />
            {formatDate}
            <br />
            <br />
            {article.body} <br />
          </p>
          <div className="vote-section">
            <p>Votes: {article.votes}</p>
            <button onClick={handleClick} type="submit">
              Add vote
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ArticleCard;
