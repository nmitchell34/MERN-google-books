import React from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import { useEffect, useState } from "react";
import API from "../utils/API";
const Saved = () => {
  const [books, setBooks] = useState([]);


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

export default Saved;
