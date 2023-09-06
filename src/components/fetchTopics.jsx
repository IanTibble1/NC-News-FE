import axiosBase from "./axiosBase";

const fetchTopics = () => {
  return axiosBase.get("topics");
};

export default fetchTopics;
