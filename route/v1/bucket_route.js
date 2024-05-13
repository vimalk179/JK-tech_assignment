const express = require('express');
const BucketController = require('../../controllers/BucketController');
const ObjectController = require('../../controllers/ObjectController');

const router = express.Router();




// router.get('/listBucket', BucketController.listBucket);

// router.post('/createBucket', BucketController.createBucket);

// router.delete('/deleteBucket', BucketController.deleteBucket);


// router.get('/getObject', ObjectController.getObject);

//  router.put('/updateObject', ObjectController.updateObject);

//  router.delete('/deleteObjectFromBucket', ObjectController.delete);

// router.get('/listObject', ObjectController.listObject);

router.get('/list', BucketController.list);

router.get('/listfromDB', BucketController.listFromDB);






module.exports = router;