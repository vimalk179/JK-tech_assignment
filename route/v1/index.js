const express = require('express');

const aws_route = require('./aws_route')

const router = express.Router();
const defaultRoutes = [
 
    {
        path: '/aws_route',
        route: aws_route,
    },
   
];
defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});


module.exports = router;