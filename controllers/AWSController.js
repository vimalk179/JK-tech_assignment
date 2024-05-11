const { request } = require('express');

const config = require('../config');
const AWSServices = require('../services/AWSServices');


const fs = require('fs');

const AWSController = {}

AWSController.listBucket = async (req, res) => {
    try {

        let bucket = 'testing data '
       
        res.json(Object.keys(bucket));
    
      

    }
    catch (error) {
      
        res
            .status(401)
            .send('Something went wrong')
    }
}
AWSController.createBucket = async (req, res) => {
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

AWSController.deleteBucket = async (req, res) => {
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
AWSController.listObjectInBucket = async (req, res) => {
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
AWSController.uploadObjectInBucket = async (req, res) => {
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

AWSController.getObjectFromBucket = async (req, res) => {
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

AWSController.deleteObjectFromBucket = async (req, res) => {
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

module.exports = AWSController;