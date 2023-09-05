import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Header = () => {
  const { userName } = useContext(UserContext);
  return (
    <section>
      <h1 className="banner">NC News</h1>
      <h3>Logged in as: {userName} </h3>
    </section>
  );
};

export default Header;
