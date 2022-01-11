import "./home.css";
import { Link } from "react-router-dom";
import book from "../assets/images/book.jpg";

const home = () => {
  return (
    <div className="container">
      <h3 className="text-center mt-5">
        Welcome to Abdukhalim`s books store🎉
      </h3>
      <p className="text-center">(Here you can find books with its prices)</p>
      <h4 className="text-info text-center">
        here is the Link to books page ▶ <Link to="/books">All Books</Link>
      </h4>
      <img
        className="img-responsive"
        src={book}
        alt="simple book"
        width="1000px"
        height="400px"
      />
    </div>
  );
};

export default home;
