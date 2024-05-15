const db = require('../db.js');

const Bucket = {
  create: (bucketData, callback) => {
    const query = 'INSERT INTO buckets SET ?';
    db.query(query, bucketData, callback);
  },
  listAll: (callback) => {
    const query = 'SELECT * FROM buckets';
    db.query(query, callback);
  }
};

module.exports = Bucket;