import React from "react";

const SearchedBook = (book) => {
  return (
    <div class="card" style="width: 18rem;">
      <img src="book.imageURL" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">book.title</h5>
        <p class="card-text">
          book.description
        </p>
        <a href="#" class="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default SearchedBook;
