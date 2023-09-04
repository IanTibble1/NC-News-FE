import moment from "moment";

const CommentCard = ({ comment }) => {
  const formatDate = moment(comment.created_at)
    .utc()
    .format("h:mm a, DD-MM-YYYY ");
  return (
    <section>
      <p>{comment.author}</p>
      {formatDate}
      <p>{comment.body}</p>
      <p>Votes: {comment.votes}</p>
    </section>
  );
};

export default CommentCard;
