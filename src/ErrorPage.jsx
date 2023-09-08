import Header from "./components/Header";
import NavBar from "./components/NavBar";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <sectio>
      <Header />
      <NavBar />
      <h1>Sorry!</h1>
      <h2 className="h2-error">
        The page you are trying to access does not exist.
      </h2>

      <Link to="/">
        <button>Return to Home</button>
      </Link>
    </sectio>
  );
};
export default ErrorPage;
