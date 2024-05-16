const express = require('express');

const bucketController = require('../../controllers/BucketController');
const router = express.Router();

/**
 * @swagger
 * /v1/bucketRoute/bucket:
 *   post:
 *     summary: Create a new bucket
 *     description: Creates a new bucket.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 userId :
 *                  type: Integer
 *                 description: Name of the bucket to be created.
 *     responses:
 *       200:
 *         description: Successfully created the bucket.
 *       400:
 *         description: Bad request. Invalid input data.
 *       500:
 *         description: Internal server error. Failed to create the bucket.
 *
 * /v1/bucketRoute/buckets:
 *   get:
 *     summary: List all buckets
 *     description: Retrieves a list of all buckets.
 *     responses:
 *       200:
 *         description: Successfully retrieved the list of buckets.
 *       500:
 *         description: Internal server error. Failed to retrieve the list of buckets.
 */

router.post('/bucket', bucketController.createBucket);
router.get('/buckets', bucketController.listBuckets);

module.exports = router;