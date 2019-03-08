require('dotenv').config();
const knexConfig = require('../knexfile');
const knex = require('knex');

const db_ENV = process.env.DB_ENV;
module.exports = knex(knexConfig[db_ENV])