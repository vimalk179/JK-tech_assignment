const { request } = require('express');

const config = require('../config');
var AWS = require("aws-sdk");
const BucketService = require('../services/BucketService');

AWS.config.update({ region: "REGION" });
const fs = require('fs');

const BucketController = {}
s3 = new AWS.S3({ apiVersion: "2006-03-01" });

// BucketController.listBucket = async (req, res) => {

//     let data = await BucketService.listBucket(req);

   
//     try {
//       if(data.status == 200){
//         res
//         .status(200)
//         .send(data)
//       }
//     }
//     catch (error) {

//         res
//             .status(401)
//             .send('Something went wrong')
//     }
// }
// BucketController.createBucket = async (req, res) => {
//     let bucketName = req.body.bucketName;
//     let data = await BucketService.createBucket(bucketName)
   
//     try {
//         if(data.status == 200){
//           res
//           .status(200)
//           .send(data)
//         }
//       }
//       catch (error) {
  
//           res
//               .status(401)
//               .send('Something went wrong')
//       }
      

//     }
   

// BucketController.deleteBucket = async (req, res) => {

//     let bucketName = req.body.bucketName;

//     let data = await BucketService.deleteBucket(bucketName)
   
//     try {
     
//           res
//           .status(200)
//           .send(data)
        
//       }
//       catch (error) {
  
//           res
//               .status(401)
//               .send('Something went wrong')
//       }
// }

BucketController.list = async (req, res) => {

  let data = await BucketService.listBucket(req);

 
  try {
    if(data.status == 200){
      res
      .status(200)
      .send(data)
    }
  }
  catch (error) {

      res
          .status(401)
          .send('Something went wrong')
  }
}
BucketController.listFromDB = async (req, res) => {

  let data = await BucketService.listFromDB(req);

 
  try {
    if(data.status == 200){
      res
      .status(200)
      .send(data)
    }
    else{
      if(data.status == 200){
        res
        .status(403)
        .send(data)
      }
    }
  }
  catch (error) {

      res
          .status(401)
          .send('Something went wrong')
  }
}
// BucketController.create = async (req, res) => {

//   let data = await BucketService.listBucket(req);

 
//   try {
//     if(data.status == 200){
//       res
//       .status(200)
//       .send(data)
//     }
//   }
//   catch (error) {

//       res
//           .status(401)
//           .send('Something went wrong')
//   }
// }
// BucketController.delete = async (req, res) => {

//   let data = await BucketService.listBucket(req);

 
//   try {
//     if(data.status == 200){
//       res
//       .status(200)
//       .send(data)
//     }
//   }
//   catch (error) {

//       res
//           .status(401)
//           .send('Something went wrong')
//   }
// }

module.exports = BucketController;