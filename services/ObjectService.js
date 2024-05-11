
const ObjectService = {}
ObjectService.listObjectInBucket = async (req, res) => {
    try {

      
        return { 'meesage': 'Successfully Saved', mappingData: mappingData };

    }
    catch (error) {
        return { meesage: 'Something Went Wrong', mappingData: error };
    }
}
ObjectService.uploadObjectInBucket = async (req, res) => {
    try {

        mappingData = await DataBaseCommonService.getData('as_name_mapping', {});
        return { 'meesage': 'Successfully Saved', mappingData: mappingData };

    }
    catch (error) {
        return { meesage: 'Something Went Wrong', mappingData: error };
    }
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
module.exports = ObjectService;