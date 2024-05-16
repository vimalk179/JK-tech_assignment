const db = require('../db.js');

const Bucket = {
  create: (bucketData, callback) => {
    const query = 'INSERT INTO buckets SET ?';
    db.query(query, bucketData, callback);
  },
  listAll: (callback) => {
    const query = 'SELECT * FROM buckets';
    db.query(query, callback);
  },
  getObject: (bucketName, callback) => {
    const query = 'SELECT * FROM buckets WHERE name = ?';
    db.query(query, [bucketName], callback);
  }
};

module.exports = Bucket;