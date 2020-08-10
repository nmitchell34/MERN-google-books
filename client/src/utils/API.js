import axios from "axios";
import Axios from "axios";

const APIkey = "AIzaSyDBrljBHCaJ1VrrzLdhnrrz-_ZQv5UY2y8";
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
