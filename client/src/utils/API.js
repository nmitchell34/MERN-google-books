import Axios from "axios";

export default {
  // Gets all books
  getBooks: function (search) {
    Axios.get("https://www.googleapis.com/books/v1/volumes?q=" + search).then(
      (result) => {
        console.log(result.data.items);
        // Array of 10 Objects.
      }
    );
  },
};
