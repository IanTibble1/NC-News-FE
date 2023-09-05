import moment from "moment";
import axiosBase from "./axios-base";
import { useState } from "react";

const ArticleCard = ({ article }) => {
  const [voteCount, setVoteCount] = useState(article.votes);
  const [hasVoted, setHasVoted] = useState(false);
  const [hasRemovedVote, setHasRemovedVote] = useState(false);

  const handleClickAdd = (event) => {
    event.preventDefault();
    if (hasVoted === false) {
      setVoteCount((prevVoteCount) => prevVoteCount + 1);
      setHasVoted(true);

      axiosBase
        .patch(`articles/${article.article_id}`, { inc_vote: 1 })
        .then(() => {
          alert("You vote has been registered");
          setHasRemovedVote(false);
        })
        .catch((err) => {
          console.log(err);
          setVoteCount((prevVoteCount) => prevVoteCount - 1);
          setHasVoted(false);
          alert("There was a problem with your vote, please try again");
        });
    }
  };

  const handleClickRemove = (event) => {
    event.preventDefault();
    if (hasRemovedVote === false) {
      setVoteCount((prevVoteCount) => prevVoteCount - 1);
      setHasRemovedVote(true);

      axiosBase
        .patch(`articles/${article.article_id}`, { inc_vote: 1 })
        .then(() => {
          alert("Your vote has been registered");
          setHasVoted(false);
        })
        .catch((err) => {
          console.log(err);
          setVoteCount((prevVoteCount) => prevVoteCount + 1);
          setHasRemovedVote(false);
          alert("There was a problem with your vote, please try again");
        });
    }
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
            <button onClick={handleClickAdd} type="submit">
              👍 Add Vote
            </button>
            Votes: {voteCount}
            <button onClick={handleClickRemove} type="submit">
              👎 Remove Vote
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ArticleCard;
