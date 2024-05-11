
const { request } = require('express');

const config = require('../config');
const ObjectService = require('../services/ObjectService');


const fs = require('fs');

const ObjectController = {}




ObjectController.listObjectInBucket = async (req, res) => {
    let data =  await ObjectService.listObjectInBucket(req)
    try {

        let bucket =  {}
        res.json(Object.keys(buckets));
    
      

    }
    catch (error) {
      
        res
            .status(401)
            .send('Something went wrong')
    }
}
ObjectController.uploadObjectInBucket = async (req, res) => {

    try{
        console.log('TESTING ')

    // const files = req.files;

    // const media = files.map((val , i) => {
    //     return {
    //         type : val.mimetype =="video/mp4" ? "video" : "image",
    //         url : BASE_URL + val.filename
    //     }
    // })
    // req.body.media = media;
    // console.log(req.body);
    
    // let data = await ObjectService.uploadObjectInBucket(req.body);
    // res.status(200).send({data : data, status : true})


    res
    .status(200)
    .send('Its working')
      

    }
    catch (error) {
      
        res
            .status(401)
            .send('Something went wrong')
    }
}

ObjectController.getObjectFromBucket = async (req, res) => {
    let data = await ObjectService.getObjectFromBucket(req)
    try {

        let bucket =  {}
        res.json(Object.keys(buckets));
    
      

    }
    catch (error) {
      
        res
            .status(401)
            .send('Something went wrong')
    }
}

ObjectController.deleteObjectFromBucket = async (req, res) => {
    let data = await ObjectService.deleteObjectFromBucket(req)
    try {

        let bucket =  {}
        res.json(Object.keys(buckets));
    
      

    }
    catch (error) {
      
        res
            .status(401)
            .send('Something went wrong')
    }
}
// ObjectController.uploadObjectInBucket = async (req, res) => {
//     let data = await ObjectService.uploadObjectInBucket(req)
//     try {

//         let bucket =  {}
//         res.json(Object.keys(buckets));
    
      

//     }
//     catch (error) {
      
//         res
//             .status(401)
//             .send('Something went wrong')
//     }
// }

module.exports = ObjectController;

