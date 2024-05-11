const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// In-memory storage for simplicity (You may replace this with a database or actual file system storage)
let buckets = {};

// List Buckets
app.get('/buckets', (req, res) => {
  res.json(Object.keys(buckets));
});

// Create Bucket
app.post('/buckets/:bucketName', (req, res) => {
  const { bucketName } = req.params;
  if (!buckets[bucketName]) {
    buckets[bucketName] = [];
    res.status(201).send();
  } else {
    res.status(409).send('Bucket already exists');
  }
});

// Delete Bucket
app.delete('/buckets/:bucketName', (req, res) => {
  const { bucketName } = req.params;
  if (buckets[bucketName]) {
    delete buckets[bucketName];
    res.send();
  } else {
    res.status(404).send('Bucket not found');
  }
});

// List Objects in a Bucket
app.get('/buckets/:bucketName/objects', (req, res) => {
  const { bucketName } = req.params;
  const objects = buckets[bucketName];
  if (objects) {
    res.json(objects);
  } else {
    res.status(404).send('Bucket not found');
  }
});

// Upload Object to Bucket
app.post('/buckets/:bucketName/objects/:objectName', (req, res) => {
  const { bucketName, objectName } = req.params;
  const { data } = req.body;
  if (!buckets[bucketName]) {
    res.status(404).send('Bucket not found');
  } else {
    buckets[bucketName].push({ name: objectName, data });
    res.status(201).send();
  }
});

// Get Object from Bucket
app.get('/buckets/:bucketName/objects/:objectName', (req, res) => {
  const { bucketName, objectName } = req.params;
  const objects = buckets[bucketName];
  if (objects) {
    const object = objects.find(obj => obj.name === objectName);
    if (object) {
      res.json(object);
    } else {
      res.status(404).send('Object not found');
    }
  } else {
    res.status(404).send('Bucket not found');
  }
});

// Delete Object from Bucket
app.delete('/buckets/:bucketName/objects/:objectName', (req, res) => {
  const { bucketName, objectName } = req.params;
  const objects = buckets[bucketName];
  if (objects) {
    const index = objects.findIndex(obj => obj.name === objectName);
    if (index !== -1) {
      objects.splice(index, 1);
      res.send();
    } else {
      res.status(404).send('Object not found');
    }
  } else {
    res.status(404).send('Bucket not found');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
