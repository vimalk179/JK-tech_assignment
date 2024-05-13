const express = require('express');

const ObjectController = require('../../controllers/ObjectController');

const router = express.Router();




router.get('/getObject', ObjectController.getObject);

 router.put('/updateObject', ObjectController.updateObject);

 router.delete('/deleteObjectFromBucket', ObjectController.delete);

router.get('/listObject', ObjectController.listObject);








module.exports = router;