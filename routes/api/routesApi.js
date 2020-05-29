const express = require('express');
const apiRoutes = express.Router();

const server = require("./server");

apiRoutes.use('/', server);

module.exports = apiRoutes;