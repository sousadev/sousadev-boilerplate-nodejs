require('dotenv').config();

const express = require('express');
const routes = express.Router();

//Database MongoDB
// const connection = require('./services/mongoDB/connection'); // >> Habilite para usar MongoDB

//JWT Auth
const jwt = require('jsonwebtoken');
const { validateUser, generateToken } = require('./helpers/jwtHelper');

// Indicate version

const version = 'v1';

routes.get(`/${version}/`, validateUser, async (req, res) => {
  await res.status(200).json({ message: 'started!' });
});

module.exports = routes;
