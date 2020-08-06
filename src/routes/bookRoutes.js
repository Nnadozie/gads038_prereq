const express = require('express');

const bookRouter = express.Router();

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
    nav: [
      { link: '/books', title: 'Books' },
      { link: '/authors', title: 'Authors' },
    ],
    title: 'Books',
    books,
  });
});

bookRouter.route('/:id').get((req, res) => {
  const { id } = req.params;
  res.render('bookView', {
    nav: [
      { link: '/books', title: 'Books' },
      { link: '/authors', title: 'Authors' },
    ],
    title: 'Books',
    book: books[id],
  });
});

module.exports = bookRouter;
