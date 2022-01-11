import "./books.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const Books = () => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/books")
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, []);

  return (
    <div className="container">
      <Link className="d-block" to="/">
        home
      </Link>
      <div className="mt-5 d-flex justify-content-evenly bm-5">
        {book &&
          book.map((e, i) => (
            <Button color="info" key={i}>
              {e.name}
            </Button>
          ))}
      </div>
      <div className="options d-flex justify-content-between mt-5">
        <Button color="success" key={1}>
          Push
        </Button>
        <Button color="success" key={2}>
          Update
        </Button>
        <Button color="success" key={3}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default Books;
