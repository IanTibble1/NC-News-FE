import { useEffect, useState } from "react";
import axiosBase from "./axios-base";

const CommentList = ({ article_id }) => {
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    axiosBase.get(`/articles/${article_id}/comments`).then(({ data }) => {
      setCommentList(data.comments);
    });
  }, []);
  return <h3> will be comment cards</h3>;
};

export default CommentList;
