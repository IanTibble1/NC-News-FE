import axiosBase from "./axiosBase";

const fetchArticles = (searchParams, sortBy, order) => {
  const params = { ...searchParams, sort_by: sortBy, order: order };
  return axiosBase.get("articles", { params });
};

export default fetchArticles;
