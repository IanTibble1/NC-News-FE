import { useState } from "react";
import axiosBase from "./axiosBase";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

let placeHolderId = -1;
const PostCommentForm = ({
  article_id,
  handleOptimisticComment,
  setCommentList,
}) => {
  const [comment, setComment] = useState("");
  const { userName } = useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (comment.length > 0) {
      const optimisticComment = {
        comment_id: placeHolderId--,
        author: userName,
        body: comment,
        votes: 0,
      };

      handleOptimisticComment(optimisticComment);

      axiosBase
        .post(`articles/${article_id}/comments`, {
          username: `${userName}`,
          body: `${comment}`,
        })
        .then((response) => {
          const realComment = response.data.comments;

          setCommentList((prevCommentList) =>
            prevCommentList.map((comment) =>
              comment.comment_id === optimisticComment.comment_id
                ? realComment
                : comment
            )
          );
          setComment("");
        })
        .catch((err) => {
          alert("Something went wrong. Please try posting again");
          setCommentList((prevCommentList) => {
            return prevCommentList.filter((comment) => {
              comment !== optimisticComment;
            });
          });
        });
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label htmlFor="post-comment">Write a comment</label>
        <input
          type="text"
          id="postComment"
          name="postComment"
          value={comment}
          onChange={(event) => {
            setComment(event.target.value);
          }}
        />
        <button type="submit">Post Comment</button>
      </form>
    </section>
  );
};

export default PostCommentForm;
