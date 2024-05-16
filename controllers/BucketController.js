const Bucket = require('../models/BucketModel');
const fs = require('fs');
const path = require('path');

exports.createBucket = (req, res) => {
  const { name, userId } = req.body;

  const bucketData = {
    name,
    user_id: userId
  };

  // Check if the bucket already exists
  Bucket.getObject(name, (err, results) => {
    if (err) {
      console.error('Error fetching bucket:', err);
      return res.status(500).send({ message: 'Internal server error' });
    }

    if (results && results.length > 0) {
      // If the bucket already exists, return an error response
      return res.status(400).send({ message: 'Bucket already exists' });
    }

    // If the bucket does not exist, create a new bucket
    Bucket.create(bucketData, (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }

      const bucketId = result.insertId;
      const bucketDir = path.join(__dirname, '../../uploads', bucketId.toString());

      // Create the directory for the bucket
      fs.mkdirSync(bucketDir, { recursive: true });

      // Send the success response
      res.status(201).send({ message: 'Bucket created successfully', bucketId });
    });
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