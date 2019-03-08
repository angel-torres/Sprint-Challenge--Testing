const express = require('express');
const db = require('./data/knexConfig');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send('hello')
})

module.exports = server;