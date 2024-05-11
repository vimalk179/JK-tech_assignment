const express = require('express');
const AWSController = require('../../controllers/AWSController');
const router = express.Router();




router.get('/listBucket', AWSController.listBucket);

router.get('/createBucket', AWSController.createBucket);

router.get('/deleteBucket', AWSController.deleteBucket);

router.get('/listObjectInBucket', AWSController.listObjectInBucket);

router.get('/uploadObjectInBucket', AWSController.uploadObjectInBucket);

router.get('/getObjectFromBucket', AWSController.getObjectFromBucket);

router.get('/deleteObjectFromBucket', AWSController.deleteObjectFromBucket);










module.exports = router;