import axiosBase from "./axios-base";

const fetchArticles = () => {
  return axiosBase.get("articles");
};

export default fetchArticles;
