import moment from "moment";
import axiosBase from "./axiosBase";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const CommentCard = ({
  comment,
  handleOptimisticDelete,
  handleOptimisticDeleteError,
}) => {
  const { userName } = useContext(UserContext);
  const handleDelete = () => {
    const savedComment = comment;

    handleOptimisticDelete(comment.comment_id);
    axiosBase
      .delete(`comments/${comment.comment_id}`)
      .then(() => {})
      .catch((err) => {
        alert(
          "Failed to delete comment, please refresh the page and try again"
        );
        handleOptimisticDeleteError(savedComment);
      });
  };

  const formatDate = moment(comment.created_at)
    .utc()
    .format("h:mm a, DD-MM-YYYY ");

  return (
    <section className="comment-card">
      <div className="comment-header-user">
        <p>{comment.author}</p>
      </div>
      <p>{formatDate}</p>

      <p>{comment.body}</p>
      <p>Votes: {comment.votes}</p>
      <div>
        {comment.author === userName && (
          <button onClick={handleDelete}>Delete comment</button>
        )}
      </div>
    </section>
  );
};

export default CommentCard;
