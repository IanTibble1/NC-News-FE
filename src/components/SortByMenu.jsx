const SortByMenu = ({ setSortBy }) => {
  return (
    <div>
      <label>
        Sort by:
        <select onChange={(event) => setSortBy(event.target.value)}>
          <option value="created_at">Date</option>
          <option value="title">Title</option>
          <option value="author">Author</option>
          <option value="votes">Highest Votes</option>
          <option value="comment_count">Number of Comments</option>
        </select>
      </label>
    </div>
  );
};

export default SortByMenu;
