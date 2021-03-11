import React from "react";

const Book = ({ book: { imgSrc, title, author }, children }) => {
    const clickHandler = (e) => {
      console.log(e.target);
    };
    const complexHandler = (author) => {
      console.log(author);
    };
    const mouseHandler = async (e) => {
      
      console.log(e.target.style.rotate);
    };
    return (
      <>
        <article
          onClick={clickHandler}
          onMouseOver={mouseHandler}
          className="book"
        >
          <img src={imgSrc} alt="Imagem não Encontrada" />
          <h1 onClick={() => console.log(title)}>
            {title || "Título não Encontrado"}
          </h1>
          <h4 onClick={() => complexHandler(author)}>
            {author || "Autor não Encontrado"}
          </h4>
          <p>{children}</p>
        </article>
      </>
    );
  };
export default Book;