import React from "react";
import Navbar from "../components/navbar";
import Jumbotron from "../components/jumbotron";
import { useEffect } from "react";
import API from "../utils/API"
const saved = () => {
  useEffect(() => {
    loadBooks();
  }, []);

  function loadBooks() {
    API.getBooks()
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }
  return (
    <div>
      <Navbar />
      <Jumbotron />
    </div>
  );
};

export default saved;
