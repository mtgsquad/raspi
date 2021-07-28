const { Router } = require('express');
const router = Router();

const indexRoute = require('./routes/index');

router.use(indexRoute)

module.exports = router;