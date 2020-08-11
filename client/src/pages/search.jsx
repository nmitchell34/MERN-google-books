import React from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import SearchedBook from "../components/SearchedBook";
import Form from "../components/SearchForm";
import { useState } from "react";
import API from "../utils/API";
const Search = () => {
  const [searchQuery, setSearchQuery] = useState({});

  let searchedBooks = [];
  let searchedBoolean = false;

  function handleFormSubmit(event) {
    event.preventDefault();
    searchedBooks = [];
    API.getBooks(searchQuery).then((res) => {
      for (let i = 0; i < res.data.items.length; i++) {
        let varBookObj = {
          title: res.data.items[i].volumeInfo.title,
          authors: res.data.items[i].volumeInfo.authors[0],
          description: res.data.items[i].volumeInfo.description,
          // image: res.data.items[i].volumeInfo.imageLinks.thumbnail,
          link: res.data.items[i].selfLink,
        };
        searchedBooks.push(varBookObj);
      }
      console.log("Searched Books ", searchedBooks);
      searchedBoolean = true;
    });
    // setSearchQuery("")
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setSearchQuery(value);
  }

  return (
    <div>
      <Navbar />
      <Jumbotron />
      <form
        name="search"
        onSubmit={handleFormSubmit}
        onChange={handleInputChange}
      >
        <Form />
      </form>
      {searchedBooks.length ? (
        <div className="container">
          {searchedBooks.map((book) => (
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
      ) : (
        <h3>No Books To Show Yet</h3>
      )}
    </div>
  );
};

export default Search;
