const mysql = require('mysql2/promise');
require('dotenv').config();

const {
    DB_HOST,
    DB_USER,
    DB_SCHEMA,
    DB_PASSWORD,
    PORT,
} = process.env;

const db = mysql.createPool({
    connectionLimit: 10,
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_SCHEMA,
    });

module.exports = {
    db,
    backPort: PORT,
}