const router = require('express').Router();
const controllers = require('./controllers');


router.get('/', controllers.getDogs);


module.exports = router;