import { useEffect, useState } from "react";
import axiosBase from "./axios-base";
import CommentCard from "./comment-card";

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
      <h3>Comments</h3>
      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : (
        commentList.map((comment) => (
          <CommentCard key={comment.comment_id} comment={comment} />
        ))
      )}
    </section>
  );
};

export default CommentList;