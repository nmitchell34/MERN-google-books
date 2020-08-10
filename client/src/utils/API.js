import Axios from "axios";

export default {
  // Gets all books
  getBooks: function (search) {
    return Axios.get("https://www.googleapis.com/books/v1/volumes?q=" + search);
  },
};
