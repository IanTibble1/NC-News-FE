const TopicList = ({ topic }) => {
  return (
    <div className="cat-buttons">
      <button>{topic.slug}</button>
    </div>
  );
};

export default TopicList;
