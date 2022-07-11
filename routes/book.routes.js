const Book = require("../models/Book.model");

const router = require("express").Router();

/* GET books page */
router.get("/books", (req, res, next) => {

  Book.find()
    .then((booksFromDB)=> {
      const data = {booksFromDB}; // this is the same as { booksFromDB: booksFromDB }
      res.render('books/book-list', data);
    })
    .catch((error) => {
      console.log('Error getting data from DB', error);
      next(error);
    })
});

module.exports = router;