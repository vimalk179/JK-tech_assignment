const { request } = require('express');

const config = require('../config');
var AWS = require("aws-sdk");
const BucketService = require('../services/BucketService');

AWS.config.update({ region: "REGION" });
const fs = require('fs');

const BucketController = {}
s3 = new AWS.S3({ apiVersion: "2006-03-01" });

BucketController.listBucket = async (req, res) => {

    let data = await BucketService.listBucket(req);

    res
    .status(200)
    .send('its working')
    try {
        // s3.listBuckets(function (err, bucket) {
        //     if (err) {
        //         console.log("Error", err);
        //     } else {
        //         res.json(Object.keys(bucket));
        //     }
        // });

    }
    catch (error) {

        res
            .status(401)
            .send('Something went wrong')
    }
}
BucketController.createBucket = async (req, res) => {
    let data = await BucketService.createBucket(req)
    try {

        let bucket = {}
        res.json(Object.keys(buckets));



    }
    catch (error) {

        res
            .status(401)
            .send('Something went wrong')
    }
}

BucketController.deleteBucket = async (req, res) => {

    let data = await BucketService.deleteBucket
    try {

        let bucket = {}
        res.json(Object.keys(buckets));



    }
    catch (error) {

        res
            .status(401)
            .send('Something went wrong')
    }
}

module.exports = BucketController;