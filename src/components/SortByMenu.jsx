const SortByMenu = ({ setSortBy, setOrder }) => {
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

      <label>
        Order:
        <select onChange={(event) => setOrder(event.target.value)}>
          <option value="DESC">Descending</option>
          <option value="ASC">Ascending</option>
        </select>
      </label>
    </div>
  );
};

export default SortByMenu;
