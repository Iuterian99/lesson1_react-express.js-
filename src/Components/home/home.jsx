import "./home.css";
import { Link } from "react-router-dom";

const home = () => {
  return (
    <div>
      <nav>
        <Link to="/books">All Books</Link>
      </nav>
      you are at home
    </div>
  );
};

export default home;
