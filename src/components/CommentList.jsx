import { useEffect, useState } from "react";
import axiosBase from "./axiosBase";
import CommentCard from "./CommentCard";
import PostCommentForm from "./PostCommentForm";

const CommentList = ({ article_id }) => {
  const [commentList, setCommentList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleOptimisticComment = (comment) => {
    setCommentList((prevCommentList) => {
      return [comment, ...prevCommentList];
    });
  };

  const handleOptimisticDelete = (commentId) => {
    const optimisitcCommentList = commentList.filter(
      (comment) => comment.comment_id !== commentId
    );
    setCommentList(optimisitcCommentList);
  };

  const handleOptimisticDeleteError = (savedComment) => {
    setCommentList((prevCommentList) => [savedComment, ...prevCommentList]);
  };

  useEffect(() => {
    setIsLoading(true);
    axiosBase.get(`/articles/${article_id}/comments`).then(({ data }) => {
      setCommentList(data.comments);
      setIsLoading(false);
    });
  }, [article_id]);

  return (
    <section>
      <PostCommentForm
        article_id={article_id}
        handleOptimisticComment={handleOptimisticComment}
        setCommentList={setCommentList}
      />
      <h3>Comments</h3>
      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : commentList.length === 0 ? (
        <p>Be the first to comment!</p>
      ) : (
        commentList.map((comment) => (
          <CommentCard
            key={comment.comment_id}
            comment={comment}
            handleOptimisticDelete={handleOptimisticDelete}
            handleOptimisticDeleteError={handleOptimisticDeleteError}
          />
        ))
      )}
    </section>
  );
};

export default CommentList;
