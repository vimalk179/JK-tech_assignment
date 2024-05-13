
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
    
        // Convert body to a string
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
    
        // Check if the file exists
        if (fs.existsSync(filePath)) {
            // Delete the file
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

        // Check if the bucket directory exists
        if (fs.existsSync(bucketPath)) {
            // Read the contents of the bucket directory
            const objects = fs.readdirSync(bucketPath);
            return { status: 200, bucket: bucket, objects: objects, message: `Objects listed successfully` };
        } else {
            return { status: 404, message: `Bucket not found` };
        }
    } catch (error) {
        return { message: 'Something Went Wrong', Error: error };
    }
}
ObjectService.listObjectInBucket = async (req, res) => {
    try {

      
        return { 'message': 'Successfully Saved', mappingData: mappingData };

    }
    catch (error) {
        return { meesage: 'Something Went Wrong', mappingData: error };
    }
}
ObjectService.uploadObjectInBucket = async (filePath,bucketName,keyName) => {
    try {


    let location = {};
            const file = fs.readFileSync(filePath);

            const uploadParams = {
                Bucket: bucketName, 
                Key: keyName, 
                Body: file 
            };
        
            s3.upload(uploadParams, function(err, data) {
                if (err) {
                    console.log("Error", err);
                } 
                if (data) {
                    console.log("Upload Success", data.Location);
                    location = data.Location;
                }
            });
        }
        catch (error) {
            return { status : 403 , meesage: 'Something Went Wrong' };
        }



        return { status : 200 , location : location , message : 'Object uploaded successfuly' };
    
}

ObjectService.getObjectFromBucket = async (req, res) => {
    try {

        mappingData = await DataBaseCommonService.getData('as_name_mapping', {});
        return { 'meesage': 'Successfully Saved', mappingData: mappingData };

    }
    catch (error) {
        return { meesage: 'Something Went Wrong', mappingData: error };
    }
}

ObjectService.deleteObjectFromBucket = async (req, res) => {
    try {

        mappingData = await DataBaseCommonService.getData('as_name_mapping', {});
        return { 'meesage': 'Successfully Saved', mappingData: mappingData };

    }
    catch (error) {
        return { meesage: 'Something Went Wrong', mappingData: error };
    }

}



const uploadFile = (filePath,bucketName,keyName) => {
    var fs = require('fs');
    // Read the file
    const file = fs.readFileSync(filePath);

    // Setting up S3 upload parameters
    const uploadParams = {
        Bucket: bucketName, // Bucket into which you want to upload file
        Key: keyName, // Name by which you want to save it
        Body: file // Local file 
    };

    s3.upload(uploadParams, function(err, data) {
        if (err) {
            console.log("Error", err);
        } 
        if (data) {
            console.log("Upload Success", data.Location);
        }
    });
};
module.exports = ObjectService;