import { useState } from "react";
import axiosBase from "./axios-base";
import { useContext } from "react";
import { UserContext } from "../contexts/userContext";

const PostComment = ({ article_id }) => {
  const [comment, setComment] = useState("");
  const { userName } = useContext(UserContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    axiosBase
      .post(`articles/${article_id}/comments`, {
        username: `${userName}`,
        body: `${comment}`,
      })
      .then(() => {
        setComment("");
      })
      .catch((err) => {
        console.log(err);
      });
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

export default PostComment;
