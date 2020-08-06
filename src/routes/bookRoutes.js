const express = require('express');

const bookRouter = express.Router();

function router(nav) {
  const books = [
    {
      title: 'life of someone',
      genre: 'History',
      author: 'Mark Twain',
      read: true,
    },
    {
      title: 'life of someone',
      genre: 'History',
      author: 'Mark Twain',
      read: true,
    },
    {
      title: 'life of someone',
      genre: 'History',
      author: 'Mark Twain',
      read: true,
    },
    {
      title: 'life of someone',
      genre: 'History',
      author: 'Mark Twain',
      read: true,
    },
    {
      title: 'life of someone',
      genre: 'History',
      author: 'Mark Twain',
      read: true,
    },
  ];
  bookRouter.route('/').get((req, res) => {
    res.render('bookListView', {
      nav,
      title: 'Books',
      books,
    });
  });

  bookRouter.route('/:id').get((req, res) => {
    const { id } = req.params;
    res.render('bookView', {
      nav,
      title: 'Books',
      book: books[id],
    });
  });

  return bookRouter;
}

module.exports = router;
