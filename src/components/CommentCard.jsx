import moment from "moment";
import axiosBase from "./axiosBase";

const CommentCard = ({
  comment,
  handleOptimisticDelete,
  handleOptimisticDeleteError,
}) => {
  const handleDelete = () => {
    const savedComment = comment;

    handleOptimisticDelete(comment.comment_id);
    axiosBase
      .delete(`comments/${comment.comment_id}`)
      .then(() => {
        alert("Your comment has been deleted");
      })
      .catch((err) => {
        alert("Failed to delete comment, please try again");
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
        <button onClick={handleDelete}>Delete Comment</button>
      </div>
    </section>
  );
};

export default CommentCard;
