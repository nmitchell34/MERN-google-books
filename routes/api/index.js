const router = require("express").Router();
const bookRoutes = require("./api");

// Book routes
router.use("/books", bookRoutes);

module.exports = router;
