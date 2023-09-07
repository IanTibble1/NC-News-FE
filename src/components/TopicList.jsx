import { useSearchParams } from "react-router-dom";

const TopicList = ({ topic }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClick = () => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("topic", topic.slug);
    setSearchParams(newParams);
  };

  return (
    <div className="cat-buttons">
      <button onClick={handleClick}>{topic.slug}</button>
    </div>
  );
};

export default TopicList;
