require('dotenv').config()

const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const { cookiesCleaner, sessionChecker } = require("../middleware/auth");
const path = require("path");
const cors = require("cors");
const sessionConfig = require('./sessionConfig')

const corsOptions = {
  origin : ['http://localhost:3000'],
  allowedHeaders: ['Content-Type'],
  credentials: true,
}

const config = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(session(sessionConfig));
  app.use(cookiesCleaner);
  app.use(sessionChecker)
  app.use(cors(corsOptions));
};

module.exports = config
