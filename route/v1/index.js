const express = require('express');

const aws_route = require('./aws_route');

const bucket_route = require('./bucket_route')
// const routes = require('./routes')

const router = express.Router();
const defaultRoutes = [
 
    // {
    //     path: '/routes',
    //     route: routes,
    // },
    {
        path: '/aws_route',
        route: aws_route,
    },
    {
        path: '/bucket_route',
        route: bucket_route,
    },
];
defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});


module.exports = router;