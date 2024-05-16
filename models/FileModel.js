const db = require('../db.js');

const File = {
  create: (fileData, callback) => {
    const query = 'INSERT INTO files SET ?';
    db.query(query, fileData, callback);
  },
  findByIdOrName: (identifier, callback) => {
    
      const query = 'SELECT * FROM files WHERE id = ? OR name = ?';
      db.query(query, [identifier, identifier], (err, results) => {
        if (err) {
          return callback(err, null);
        }
        callback(null, results);
      });
  },
  listByBucketId: (bucketId, callback) => {
    const query = 'SELECT * FROM files WHERE bucket_id = ?';
    db.query(query, [bucketId], callback);
  }
  ,
  deleteByName: (fileName, callback) => {
    const query = 'DELETE FROM files WHERE name = ?';
    db.query(query, [fileName], callback);
  }
};

module.exports = File;