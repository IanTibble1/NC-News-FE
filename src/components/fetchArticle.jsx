import axiosBase from "./axiosBase";

const fetchArticles = () => {
  return axiosBase.get("articles");
};

export default fetchArticles;
