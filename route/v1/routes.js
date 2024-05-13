const express = require('express');
const BucketController = require('../../controllers/BucketController');
const ObjectController = require('../../controllers/ObjectController');

const router = express.Router();






// router.post('/create', BucketController.create);

// router.delete('/delete', BucketController.delete);

router.get('/getObject', ObjectController.getObject);

router.put('/updateObject', ObjectController.updateObject);

router.delete('/deleteObjectFromBucket', ObjectController.delete);

router.get('/listObject', ObjectController.listObject);

router.get('/list', BucketController.list);

// router.get('/listObjectInBucket', ObjectController.list);

// router.post('/uploadObjectInBucket', ObjectController.upload);

// router.get('/getObjectFromBucket', ObjectController.getObject);



// Get object
// Put object
// Delete object
// List objects
// List buckets





module.exports = router;