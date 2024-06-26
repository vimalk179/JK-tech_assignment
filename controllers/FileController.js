const File = require('../models/FileModel');
const path = require('path');
const fs = require('fs');

exports.uploadFile = (req, res) => {
    let bucketId = req.query.bucketId;
    const file = req.file;
    if (!file) {
        return res.status(400).send({ message: 'No file uploaded' });
      }
  
    const fileData = {
      name: file.originalname,
      url: `/uploads/${bucketId}/${file.filename}`,
      bucket_id: bucketId
    };
    
  
    File.create(fileData, (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.status(201).send({ message: 'File uploaded successfully', file: fileData });
    });
  };
  
  exports.getFile = (req, res) => {
    const { identifier } = req.params;
  
   
    File.findByIdOrName(identifier, (err, results) => {
      if (err) {
        return res.status(500).send(err);
      }
      if (results.length === 0) {
        return res.status(404).send({ message: 'File not found' });
      }
  
      const file = results[0];
      const filePath = path.resolve(__dirname, '../uploads', file.bucket_id.toString(), path.basename(file.url));
  
     
      console.log('Constructed file path:', filePath);

      let readData = fs.readFileSync(`${filePath}`, "utf8");
  
      
      fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
          console.error('File not found on disk:', filePath); 
          return res.status(404).send({ message: 'File not found on disk' });
        }
  
        res.setHeader('Content-Type', 'application/octet-stream');
        const readStream = fs.createReadStream(filePath);
  
     
        readStream.on('error', (error) => {
          console.error('Error reading file:', error);
          res.status(500).send({ message: 'Error reading file' });
        });
  
        readStream.pipe(res);
      });
    });
  };


  exports.listFilesByBucketId = (req, res) => {
    const { bucketId } = req.params;
  
    File.listByBucketId(bucketId, (err, results) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.status(200).send(results);
    });
  };

  exports.deleteFile = (req, res) => {
    const { identifier } = req.params;
  
  
    File.findByIdOrName(identifier, (err, results) => {
      if (err) {
        return res.status(500).send(err);
      }
      if (results.length === 0) {
        return res.status(404).send({ message: 'File not found' });
      }
  
      const file = results[0];
      const filePath = path.resolve(__dirname, '../uploads', file.bucket_id.toString(), path.basename(file.url));
  
     
      console.log('Constructed file path:', filePath);
  
 
      fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
          console.error('File not found on disk:', filePath); 
          return res.status(404).send({ message: 'File not found on disk' });
        }
  
      
        fs.unlink(filePath, (err) => {
          if (err) {
            console.error('Error deleting file:', err);
            return res.status(500).send({ message: 'Error deleting file' });
          }
          
         
          res.status(200).send({ message: 'File deleted successfully' });
        });
      });
    });

    File.deleteByName(identifier, (err, results) => {
      if (err) {
        return res.status(500).send(err);
      }
      if (results && results.length === 0) {
        return res.status(200).send({ message: 'file deleted' });
      }
    
  });
}