const express = require('express');

const ObjectController = require('../../controllers/ObjectController');

const router = express.Router();




router.get('/getObject', ObjectController.getObject);

 router.put('/updateObject', ObjectController.updateObject);

 router.delete('/deleteObjectFromBucket', ObjectController.delete);

router.get('/listObject', ObjectController.listObject);


//from DB

// router.get('/getObjectFromDB', ObjectController.getObjectFromDB);

//  router.put('/updateObjectInDB', ObjectController.updateObjectInDB);

//  router.delete('/deleteObjectFromBucketDB', ObjectController.deleteObjectFromBucketDB);

// router.get('/listObjectFromDB', ObjectController.listObjectFromDB);







module.exports = router;