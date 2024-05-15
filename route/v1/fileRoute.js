const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const fileController = require('../../controllers/FileController');

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let bucketId = req.query.bucketId;
    // bucketId = 1;
    if (!bucketId) {
      return cb(new Error('bucketId is missing'), null);
    }
    const uploadPath = path.join(__dirname, '../../uploads', bucketId.toString());

    // Ensure the directory exists
    fs.mkdir(uploadPath, { recursive: true }, (err) => {
      if (err) {
        console.error('Error creating directory', err);
        return cb(err);
      }
      cb(null, uploadPath);
    });
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});


const upload = multer({ storage: storage });

/**
 * @swagger
 * /v1/fileRoute/upload/{bucketId}:
 *   post:
 *     summary: Upload a file
 *     description: Uploads a file and saves it on disk, storing the URL in the database.
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: File uploaded successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */

router.post('/upload', upload.single('file'), fileController.uploadFile);


/**
 * @swagger
 * /v1/fileRoute/file/{identifier}:
 *   get:
 *     summary: Get a file by identifier
 *     description: Retrieves a file by its identifier.
 *     parameters:
 *       - in: path
 *         name: identifier
 *         schema:
 *           type: string
 *         required: true
 *         description: The identifier of the file
 *     responses:
 *       200:
 *         description: File retrieved successfully
 *       404:
 *         description: File not found
 *       500:
 *         description: Internal server error
 */


/**
 * @swagger
 * /v1/fileRoute/file/{identifier}:
 *   get:
 *     summary: Get a file by identifier
 *     description: Retrieves a file by its identifier.
 *     parameters:
 *       - in: path
 *         name: identifier
 *         required: true
 *         description: Identifier of the file to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully retrieved the file.
 *         content:
 *           application/octet-stream:
 *             schema:
 *               type: string
 *               format: binary
 *       404:
 *         description: File not found.
 *       500:
 *         description: Internal server error. Failed to retrieve the file.
 *
 * /v1/fileRoute/files/{bucketId}:
 *   get:
 *     summary: List files by bucket ID
 *     description: Retrieves a list of files belonging to a specific bucket.
 *     parameters:
 *       - in: path
 *         name: bucketId
 *         required: true
 *         description: ID of the bucket to list files from.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully retrieved the list of files.
 *       404:
 *         description: Bucket not found or no files found in the bucket.
 *       500:
 *         description: Internal server error. Failed to retrieve the list of files.
 *
 * /v1/fileRoute/file/{:identifier}:
 *   delete:
 *     summary: Delete a file by identifier
 *     description: Deletes a file by its identifier.
 *     parameters:
 *       - in: path
 *         name: identifier
 *         required: true
 *         description: Identifier of the file to delete.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully deleted the file.
 *       404:
 *         description: File not found.
 *       500:
 *         description: Internal server error. Failed to delete the file.
 */

router.get('/file/:identifier', fileController.getFile);
router.get('/files/:bucketId', fileController.listFilesByBucketId);
router.delete('/file/:identifier', fileController.deleteFile);

module.exports = router;
