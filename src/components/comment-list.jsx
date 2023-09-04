import { useEffect, useState } from "react";
import axiosBase from "./axios-base";
import CommentCard from "./comment-card";

const CommentList = ({ article_id }) => {
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    axiosBase.get(`/articles/${article_id}/comments`).then(({ data }) => {
      setCommentList(data.comments);
    });
  }, []);
  return (
    <section>
      {commentList.map((comment) => (
        <CommentCard key={comment.comment_id} comment={comment} />
      ))}
    </section>
  );
};

export default CommentList;
