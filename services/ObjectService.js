
const { S3Client } = require('@aws-sdk/client-s3')

const express = require('express')
const multer = require('multer')
const multerS3 = require('multer-s3')
var fs = require('fs');
const path = require('path');

const ObjectService = {}

ObjectService.getObject = async (req, res) => {
    try {

        const bucket = req.query.bucket;
        const object = req.query.object;
        const filePath = path.join('data', bucket, object);
        if (fs.existsSync(filePath)) {
            const data = fs.readFileSync(filePath, 'utf-8');
         
      
      
        return { status: 200, fileName : object , content : data ,message: `Object fetched successfully` };
    } else {
        return { status: 404, object : data ,message: `Unable to fetch` };

      
    }

    }
    catch (error) {
        return { meesage: 'Something Went Wrong', mappingData: error };
    }
}

ObjectService.updateObject = async (req, res) => {
    try {
        const body = req.body;

        const bucket = req.query.bucket;
        const object = req.query.object;
        const filePath = path.join('data', bucket, object);
    
      
        const data = JSON.stringify(body);
      
        fs.writeFileSync(filePath, data);
      
        return { status: 200, fileName : object , content : body , message: `Object UPDATED successfully` };
    } catch (error) {
        return { message: 'Something Went Wrong', Error: error };
    }
}
ObjectService.delete = async (req, res) => {
    try {
        const bucket = req.query.bucket;
        const object = req.query.object;
        const filePath = path.join('data', bucket, object);
    
     
        if (fs.existsSync(filePath)) {
           
            fs.unlinkSync(filePath);
            return { status: 200, fileName: object, message: `Object DELETED successfully` };
        } else {
            return { status: 404, message: `Object not found` };
        }
    } catch (error) {
        return { message: 'Something Went Wrong', Error: error };
    }
}
ObjectService.listObject = async (req, res) => {
    try {
        const bucket = req.query.bucket;
        const bucketPath = path.join('data', bucket);

       
        if (fs.existsSync(bucketPath)) {
          
            const objects = fs.readdirSync(bucketPath);
            return { status: 200, bucket: bucket, objects: objects, message: `Objects listed successfully` };
        } else {
            return { status: 404, message: `Bucket not found` };
        }
    } catch (error) {
        return { message: 'Something Went Wrong', Error: error };
    }
}

module.exports = ObjectService;