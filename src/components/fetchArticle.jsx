import axiosBase from "./axiosBase";

const fetchArticles = (searchParams) => {
  return axiosBase.get("articles", { params: searchParams });
};

export default fetchArticles;
