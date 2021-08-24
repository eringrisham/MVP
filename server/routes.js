const router = require('express').Router();
const controllers = require('./controllers');


router.get('/', controllers.getAllDogs);


module.exports = router;