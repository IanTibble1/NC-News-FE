import axiosBase from "./axiosBase";

const fetchArticles = (searchParams, sortBy) => {
  const params = { ...searchParams, sort_by: sortBy };
  return axiosBase.get("articles", { params });
};

export default fetchArticles;
