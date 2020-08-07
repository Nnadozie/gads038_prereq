const express = require('express');
const { MongoClient } = require('mongodb');
const debug = require('debug')('app:adminRoutes');

const adminRouter = express.Router();

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

module.exports = function router() {
  adminRouter.route('/').get((req, res) => {
    const url = 'mongodb://localhost:27017';
    const dbName = 'prereqDb';

    (async function mongo() {
      let client;
      try {
        client = MongoClient.connect(url);
        debug('connected correctly to server');
        const db = (await client).db(dbName);
        const response = await db.collection('books').insertMany(books);
        res.json(response);
      } catch (error) {
        debug(error);
      }
      (await client).close();
    })();
  });

  return adminRouter;
};
