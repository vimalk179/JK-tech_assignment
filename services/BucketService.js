


const BucketService = {}
BucketService.listBucket = async (req, res) => {
    try {

       
        return { 'meesage': 'Successfully Saved', mappingData: mappingData };

    }
    catch (error) {
        return { meesage: 'Something Went Wrong', mappingData: error };
    }
}
BucketService.createBucket = async (req, res) => {
    try {

      
        return { 'meesage': 'Successfully Saved', mappingData: mappingData };

    }
    catch (error) {
        return { meesage: 'Something Went Wrong', mappingData: error };
    }
}

BucketService.deleteBucket = async (req, res) => {
    try {

      
        return { 'meesage': 'Successfully Saved', mappingData: mappingData };

    }
    catch (error) {
        return { meesage: 'Something Went Wrong', mappingData: error };
    }
}


module.exports = BucketService;