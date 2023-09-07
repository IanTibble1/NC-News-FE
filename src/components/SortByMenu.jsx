import { useSearchParams } from "react-router-dom";

const SortByMenu = ({}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChangeSort = (event) => {
    const newSort = event.target.value;
    const newParams = new URLSearchParams(searchParams);
    newParams.set("sort_by", newSort);
    setSearchParams(newParams);
  };

  const handleChangeOrder = (event) => {
    const newOrder = event.target.value;
    const newParams = new URLSearchParams(searchParams);
    newParams.set("order", newOrder);
    setSearchParams(newParams);
  };

  return (
    <div className="menu-container">
      <div className="sort-menu">
        <label>
          <strong>
            <p className="menu-p">Sort by:</p>
          </strong>
          <select onChange={handleChangeSort}>
            <option value="created_at">Date</option>
            <option value="title">Title</option>
            <option value="author">Author</option>
            <option value="votes">Highest Votes</option>
            <option value="comment_count">Number of Comments</option>
          </select>
        </label>
      </div>
      <div className="order-menu">
        <label>
          <strong>
            <p className="menu-p">Order:</p>
          </strong>
          <select onChange={handleChangeOrder}>
            <option value="DESC">Descending</option>
            <option value="ASC">Ascending</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default SortByMenu;
