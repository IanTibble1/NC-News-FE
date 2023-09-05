import { useEffect, useState } from "react";
import axiosBase from "./axios-base";
import CommentCard from "./comment-card";
import PostComment from "./post-comment-form";

const CommentList = ({ article_id }) => {
  const [commentList, setCommentList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axiosBase.get(`/articles/${article_id}/comments`).then(({ data }) => {
      setCommentList(data.comments);
      setIsLoading(false);
    });
  }, []);

  return (
    <section>
      <PostComment article_id={article_id} />
      <h3>Comments</h3>
      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : commentList.length === 0 ? (
        <p>Be the first to comment!</p>
      ) : (
        commentList.map((comment) => (
          <CommentCard key={comment.comment_id} comment={comment} />
        ))
      )}
    </section>
  );
};

export default CommentList;
