require('dotenv').config();
const knexConfig = require('../knexfile');
const knex = require('knex');

const dbEnv = process.env.DB_ENV || 'development';

module.exports = knex(knexConfig[dbEnv]);