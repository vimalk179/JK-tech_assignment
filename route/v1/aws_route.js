const express = require('express');
const BucketController = require('../../controllers/BucketController');

const ObjectController = require('../../controllers/ObjectController');

const router = express.Router();






router.get('/listObjectInBucket', ObjectController.listObjectInBucket);

router.post('/uploadObjectInBucket', ObjectController.uploadObjectInBucket);

router.get('/getObjectFromBucket', ObjectController.getObjectFromBucket);

router.delete('/deleteObjectFromBucket', ObjectController.deleteObjectFromBucket);

router.post('/uploadObject',  ObjectController.uploadObjectInBucket);



module.exports = router;