const router = require ('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoute');
const dashboardRoute = require('./dashboardRoutes');

router.use('/',homeRoutes);
router.use('/api',apiRoutes);
router.use('/',dashboardRoute);

module.exports = router;
