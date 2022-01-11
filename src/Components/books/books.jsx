import "./books.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";

const Books = () => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/books")
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, []);

  const handleBook = (e) => {
    const bookId = e.target.id;
    console.log(bookId);
  };

  return (
    <div className="container">
      <Link className="d-block mt-2" to="/">
        ◀home page 🏠
      </Link>
      <div className="mt-3 d-flex justify-content-evenly bm-5">
        {book &&
          book.map((e, i) => (
            <Button onClick={handleBook} color="info" key={i}>
              {e.name}
            </Button>
          ))}
      </div>
      <div className="mt-5">
        <Card>
          <CardImg
            alt="Card image cap"
            src="https://picsum.photos/256/186"
            top
            width="100%"
          />
          <CardBody>
            <CardTitle tag="h5"></CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Card subtitle
            </CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
            <Button className="bg-danger">ORDER😍</Button>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Books;
