const app = require('../app');
const router = require('express').Router();

router.use('/recipe', require('./recipe'));
router.use('/nutrition', require('./nutrition'));

app.use(router);

module.exports = router;