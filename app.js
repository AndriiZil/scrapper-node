const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require('helmet');
const { setCORSHeaders } = require("./utils/helper");
require('dotenv').config()

const parserService = require('./routes/service/parser-service');
const databaseConnection = require('./routes/service/database-connection');

const routes = require('./routes/api/routesApi');

const app = express();

process.on("uncaughtException", (err) => console.log(err));
process.on("unhandledRejection", (err) => console.log(err));

app.use(helmet())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Database connection
databaseConnection.connect();
// Parser RUN
parserService.parse();
// CORS Middleware if needed FRONTEND
app.all('/*', setCORSHeaders());
// Routes
app.use('/api', routes);

module.exports = app;
