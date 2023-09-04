import Header from "./components/header";
import NavBar from "./components/navBar";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <section>
      <Header />
      <NavBar />
      <h3>Welcome Content will go here</h3>
      <Link to="/articles">
        <button>Go to our Articles</button>
      </Link>
    </section>
  );
};

export default HomePage;
