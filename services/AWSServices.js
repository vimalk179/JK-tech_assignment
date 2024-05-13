


const AWSServices = {}
AWSServices.listBucket = async (req, res) => {
    try {

       
        return { 'meesage': 'Successfully Saved', mappingData: mappingData };

    }
    catch (error) {
        return { meesage: 'Something Went Wrong', mappingData: error };
    }
}
AWSServices.createBucket = async (req, res) => {
    try {

      
        return { 'meesage': 'Successfully Saved', mappingData: mappingData };

    }
    catch (error) {
        return { meesage: 'Something Went Wrong', mappingData: error };
    }
}

AWSServices.deleteBucket = async (req, res) => {
    try {

      
        return { 'meesage': 'Successfully Saved', mappingData: mappingData };

    }
    catch (error) {
        return { meesage: 'Something Went Wrong', mappingData: error };
    }
}
AWSServices.listObjectInBucket = async (req, res) => {
    try {

      
        return { 'meesage': 'Successfully Saved', mappingData: mappingData };

    }
    catch (error) {
        return { meesage: 'Something Went Wrong', mappingData: error };
    }
}
AWSServices.uploadObjectInBucket = async (req, res) => {
    try {

        mappingData = await DataBaseCommonService.getData('as_name_mapping', {});
        return { 'meesage': 'Successfully Saved', mappingData: mappingData };

    }
    catch (error) {
        return { meesage: 'Something Went Wrong', mappingData: error };
    }
}

AWSServices.getObjectFromBucket = async (req, res) => {
    try {

        mappingData = await DataBaseCommonService.getData('as_name_mapping', {});
        return { 'meesage': 'Successfully Saved', mappingData: mappingData };

    }
    catch (error) {
        return { meesage: 'Something Went Wrong', mappingData: error };
    }
}

AWSServices.deleteObjectFromBucket = async (req, res) => {
    try {

        mappingData = await DataBaseCommonService.getData('as_name_mapping', {});
        return { 'meesage': 'Successfully Saved', mappingData: mappingData };

    }
    catch (error) {
        return { meesage: 'Something Went Wrong', mappingData: error };
    }
}

module.exports = AWSServices;