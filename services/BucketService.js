const { S3Client } = require('@aws-sdk/client-s3')
const express = require('express')
const multer = require('multer')
const multerS3 = require('multer-s3')
const AWS = require('aws-sdk');
const path = require('path');
var fs = require('fs');

const mysql = require('mysql2');

const dbConfig = {
    host: 'localhost',         
    user: 'admin',             
    password: 'admin',         
    database: 'jktech'         
  };
  
  const pool = mysql.createPool(dbConfig);


const BucketService = {}
BucketService.listBucket = async (req, res) => {
    try {
        const dataPath = path.join('data');
        const buckets = fs.existsSync(dataPath) ? fs.readdirSync(dataPath) : [];

        return { status: 200, buckets: dataPath, message: 'Bucket Fetched' };
    } catch (error) {
        console.log("Error", error);
        return { status: 403, message: 'Something Went Wrong' };
    }
}

BucketService.listFromDB = async (req, res) => {
    try {
     
        const result = await executeQuery('SELECT * FROM buckets');

        const buckets = result;

    
        return { status: 200, buckets: buckets, message: 'Buckets fetched successfully' };
    } catch (error) {
        console.error("Error fetching buckets:", error);
        return { status: 500, message: 'Something went wrong while fetching buckets' };
    }
};


function executeQuery(sql) {
    return new Promise((resolve, reject) => {
        pool.query(sql, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}



// BucketService.createBucket = async (bucketName) => {
//     try {
//         await s3.createBucket({ Bucket: bucketName }).promise();

//         console.log(`Bucket '${bucketName}' created successfully`);

//         return { status: 200, bucketName : bucketName ,message: `Bucket '${bucketName}' created successfully` };

//     } catch (error) {
//         console.log("Error", error);
//         return { status: 403, message: 'Failed to create bucket' };
//     }
// }

// BucketService.deleteBucket = async (bucketName) => {
//     try {
      
//         const headBucketParams = {
//             Bucket: bucketName
//         };
//         await s3.headBucket(headBucketParams).promise();

      
//         await s3.deleteBucket({ Bucket: bucketName }).promise();
//         console.log(`Bucket '${bucketName}' deleted successfully`);
//         return { status: 200, message: `Bucket '${bucketName}' deleted successfully` };
//     } catch (error) {
//         console.log("Error", error);
//         return { status: 403, message: 'Failed to delete bucket' };
//     }
// }

// BucketService.list= async (req, res) => {
//     try {
        

//         return { status: 200, buckets: data.Buckets, message: 'Bucket Fetched' };
//     } catch (error) {
//         console.log("Error", error);
//         return { status: 403, message: 'Something Went Wrong' };
//     }
// }

// BucketService.create= async (bucketName) => {
//     try {
       
//         return { status: 200, bucketName : bucketName ,message: `Bucket '${bucketName}' created successfully` };

//     } catch (error) {
//         console.log("Error", error);
//         return { status: 403, message: 'Failed to create bucket' };
//     }
// }

// BucketService.delete = async (bucketName) => {
//     try {
      
      
//         console.log(`Bucket '${bucketName}' deleted successfully`);
//         return { status: 200, message: `Bucket '${bucketName}' deleted successfully` };
//     } catch (error) {
//         console.log("Error", error);
//         return { status: 403, message: 'Failed to delete bucket' };
//     }
// }



module.exports = BucketService;