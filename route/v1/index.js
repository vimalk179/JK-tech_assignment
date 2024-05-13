const express = require('express');

const bucket_route = require('./bucket_route')
const object_route = require('./object_route')
// const routes = require('./routes')

const router = express.Router();
const defaultRoutes = [
 
    {
        path: '/object',
        route: object_route,
    },

    {
        path: '/bucket',
        route: bucket_route,
    },
];
defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});


module.exports = router;