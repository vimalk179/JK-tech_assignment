const express = require('express');
const BucketController = require('../../controllers/BucketController');

const router = express.Router();




router.get('/listBucket', BucketController.listBucket);

router.post('/createBucket', BucketController.createBucket);

router.delete('/deleteBucket', BucketController.deleteBucket);




module.exports = router;