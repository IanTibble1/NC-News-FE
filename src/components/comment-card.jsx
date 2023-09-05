import moment from "moment";

const CommentCard = ({ comment }) => {
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
    </section>
  );
};

export default CommentCard;
