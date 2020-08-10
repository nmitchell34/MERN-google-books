const query = "";
const key = "&key=AIzaSyDBrljBHCaJ1VrrzLdhnrrz-_ZQv5UY2y8";
const queryString =
  "https://www.googleapis.com/books/v1/volumes?q=" + query + key;

const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/")
.get(booksController.findAll)
.post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
