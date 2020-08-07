const express = require('express');
const sql = require('mssql');
const debug = require('debug')('app:bookRoutes');

const bookRouter = express.Router();

function router(nav) {
  bookRouter.route('/').get((req, res) => {
    (async function query() {
      try {
        const request = new sql.Request();

        const result = await request.query('select * from books');
        res.render('bookListView', {
          nav,
          title: 'Books',
          books: result.recordset,
        });
      } catch (error) {
        debug(error);
      }
    })();
  });

  bookRouter.route('/:id').get((req, res) => {
    (async function query() {
      try {
        const { id } = req.params;
        const request = new sql.Request();

        const result = await request
          .input('id', sql.Int, id)
          .query('select * from books where id = @id');
        debug(result);
        res.render('bookView', {
          nav,
          title: 'Books',
          book: result.recordset[0],
        });
      } catch (error) {
        debug(error);
      }
    })();
  });

  return bookRouter;
}

module.exports = router;
