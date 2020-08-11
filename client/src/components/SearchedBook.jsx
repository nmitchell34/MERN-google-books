import React, { useEffect } from "react";

const SearchedBook = (props) => {

    

  return (
    <div className="container">
      {props.books.map((book) => (
        <div class="card" style="width: 18rem;">
          <img src={book.imageURL} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{book.title}</h5>
            <p class="card-text">{book.description}</p>
            <a href={book.link} class="btn btn-primary">
              See your book here.
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchedBook;
