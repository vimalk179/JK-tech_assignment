const express = require('express');


const bucketRoute = require('./bucketRoute')
const fileRoute = require('./fileRoute')
// const routes = require('./routes')

const router = express.Router();
const defaultRoutes = [
 
    {
        path: '/bucketRoute',
        route: bucketRoute,
    },

    {
        path: '/fileRoute',
        route: fileRoute,
    },
];
defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});


module.exports = router;