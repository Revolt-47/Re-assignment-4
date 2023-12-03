// wordRouter.js
const express = require('express');
const wordController = require('../Controllers/wordController'); // Adjust the path based on your project structure
const util = require('../util'); // Adjust the path based on your project structure

const wordRouter = express.Router();

// Get a specific word by name
wordRouter.get('/words/:word', wordController.getWordByName);

// Add a new word (protected route)
wordRouter.post('/words', util.verifyToken, wordController.addWord);

// Edit the meaning of a word (protected route)
wordRouter.put('/words/:word', util.verifyToken, wordController.editWord);

// Delete a word by name (protected route)
wordRouter.delete('/words/:word', util.verifyToken, wordController.deleteWordByName);

module.exports = wordRouter;
