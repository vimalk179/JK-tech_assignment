const Bucket = require('../models/BucketModel');
const fs = require('fs');
const path = require('path');

exports.createBucket = (req, res) => {
  const { name, userId } = req.body;

  const bucketData = {
    name,
    user_id: userId
  };

  Bucket.create(bucketData, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    const bucketId = result.insertId;
    const bucketDir = path.join(__dirname, '../../uploads', bucketId.toString());
    fs.mkdirSync(bucketDir, { recursive: true });
    res.status(201).send({ message: 'Bucket created successfully', bucketId });
  });
};

exports.listBuckets = (req, res) => {
  Bucket.listAll((err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(200).send(results);
  });
};