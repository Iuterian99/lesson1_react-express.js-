import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Books from "./Components/books/books.jsx";
import Home from "./Components/home/home";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route path="/books" component={Books} />
        <Route path="/" component={Home} />
      </Switch>
    </>
  );
}

export default App;
