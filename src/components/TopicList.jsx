const TopicList = ({ topic, setSearchParams }) => {
  return (
    <div className="cat-buttons">
      <button
        onClick={() => {
          setSearchParams({ topic: topic.slug });
        }}
      >
        {topic.slug}
      </button>
    </div>
  );
};

export default TopicList;
