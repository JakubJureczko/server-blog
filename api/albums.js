const express = require("express");
const {
  getAlbums
} = require('../controllers/albums');

const api = express.Router();

api
.route("/")
.get(getAlbums)

module.exports = api;

