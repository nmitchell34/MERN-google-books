import React from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Form from "../components/SearchForm";
import { useState } from "react";
import API from "../utils/API";
const Search = () => {
  const [searchQuery, setSearchQuery] = useState({});
  let searchedBooks = [];

  function handleFormSubmit(event) {
    event.preventDefault();
    searchedBooks = [];
    API.getBooks(searchQuery).then((res) => {
      console.log(res.data.items[0])
      console.log(res.data.items[0].volumeInfo.imageLinks.thumbnail)
      for (let i = 0; i < res.data.items.length; i++) {
        let varBookObj = {
          title: res.data.items[i].volumeInfo.title,
          authors: res.data.items[i].volumeInfo.authors[0],
          description: res.data.items[i].volumeInfo.description,
          image: res.data.items[i].volumeInfo.imageLinks.thumbnail,
          link: res.data.items[i].selfLink,
        };
        searchedBooks.push(varBookObj);
      }
        console.log("Searched Books ", searchedBooks);
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
    </div>
  );
};

export default Search;
