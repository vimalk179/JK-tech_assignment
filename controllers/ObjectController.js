
const { request } = require('express');

const config = require('../config');
const ObjectService = require('../services/ObjectService');


const fs = require('fs');

const ObjectController = {}

ObjectController.getObject = async (req, res) => {
    let data =  await ObjectService.getObject(req)
    
    try {
     
        res
        .status(200)
        .send(data)
      
    }
    catch (error) {

        res
            .status(401)
            .send('Something went wrong')
    }
}
ObjectController.updateObject = async (req, res) => {
    let data =  await ObjectService.updateObject(req)
    
    try {
     
        res
        .status(200)
        .send(data)
      
    }
    catch (error) {

        res
            .status(401)
            .send('Something went wrong')
    }
}
ObjectController.delete = async (req, res) => {
    let data =  await ObjectService.delete(req)
    
    try {
     
        res
        .status(200)
        .send(data)
      
    }
    catch (error) {

        res
            .status(401)
            .send('Something went wrong')
    }
}
ObjectController.listObject = async (req, res) => {
    let data =  await ObjectService.listObject(req)
    
    try {
     
        res
        .status(200)
        .send(data)
      
    }
    catch (error) {

        res
            .status(401)
            .send('Something went wrong')
    }
}





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

    let data = await ObjectService.uploadObjectInBucket(req)

    try{

    res
    .status(200)
    .send(data)
      

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

