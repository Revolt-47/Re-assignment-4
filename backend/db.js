// db.js
const mongoose = require('mongoose');

// Use the following connection string for a local MongoDB instance
const localConnection = 'mongodb://localhost:27017/Req';

mongoose.connect(localConnection, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;
