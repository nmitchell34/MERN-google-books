import React from "react";
import Navbar from "../components/navbar";
import Jumbotron from "../components/jumbotron";
import Form from "../components/searchForm";
import { useState } from "react";
import API from "../utils/API";
const Search = () => {
  const [searchQuery, setSearchQuery] = useState({});

  function handleFormSubmit(event) {
    event.preventDefault();
    API.getBooks(searchQuery);
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
