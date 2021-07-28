const express = require('express');
const app = express();

const router = require('./router');

app.use(router);

app.listen(8080, () => console.log('Online on port 8080'));