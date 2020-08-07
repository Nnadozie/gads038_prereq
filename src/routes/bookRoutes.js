const express = require('express');
const sql = require('mssql');
const debug = require('debug')('app:bookRoutes');

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
    const request = new sql.Request();

    request
      .query('select * from books')
      .then((result) => {
        debug(result);
        res.render('bookListView', {
          nav,
          title: 'Books',
          books: result.recordset,
        });
      })
      .catch((reas) => {
        debug(reas);
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
