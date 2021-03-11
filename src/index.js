import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import data from "./books.js";

import Book from "./components/Book.jsx";

const BookList = () => {
  return (
    <section className="booklist">
      {data.map((book) => {
        let { child, id } = book;
        return (
          <Book key={id} book={book} /*{...book}*/ >
            {child}
          </Book>
        );
      })}
    </section>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
