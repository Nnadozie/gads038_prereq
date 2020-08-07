const express = require('express');
const { MongoClient, ObjectID } = require('mongodb');
const debug = require('debug')('app:bookRoutes');

const bookRouter = express.Router();

function router(nav) {
  bookRouter.route('/').get((req, res) => {
    const url = 'mongodb://localhost:27017';
    const dbName = 'prereqDb';

    (async function mongo() {
      let client;
      try {
        client = MongoClient.connect(url);
        debug('connected correctly to server');
        const db = (await client).db(dbName);
        const col = await db.collection('books');
        const books = await col.find().toArray();
        res.render('bookListView', {
          nav,
          title: 'Books',
          books,
        });
      } catch (error) {
        debug(error);
      }
      (await client).close();
    })();
  });

  bookRouter.route('/:id').get((req, res) => {
    const { id } = req.params;
    const url = 'mongodb://localhost:27017';
    const dbName = 'prereqDb';
    (async function mongo() {
      let client;
      try {
        client = MongoClient.connect(url);
        debug('connected correctly to server');
        const db = (await client).db(dbName);
        const col = await db.collection('books');
        const book = await col.findOne({ _id: new ObjectID(id) });
        res.render('bookView', {
          nav,
          title: 'Books',
          book,
        });
      } catch (error) {
        debug(error);
      }
      (await client).close();
    })();
  });

  return bookRouter;
}

module.exports = router;
