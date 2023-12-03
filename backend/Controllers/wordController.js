// wordController.js
const Word = require('../Models/wordModel'); // Adjust the path based on your project structure

const wordController = {

  // Get a specific word by name
  getWordByName: async (req, res) => {
    try {
      const word = await Word.findOne({ word: req.params.word });
      if (!word) {
        return res.status(404).json({ message: 'Word not found' });
      }
      res.json(word);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Add a new word
  addWord: async (req, res) => {
    const { word, meaning } = req.body;
    try {
      const newWord = new Word({ word, meaning });
      await newWord.save();
      res.status(201).json(newWord);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Delete a word by name
  deleteWordByName: async (req, res) => {
    try {
      const deletedWord = await Word.findOneAndDelete({ word: req.params.word });
      if (!deletedWord) {
        return res.status(404).json({ message: 'Word not found' });
      }
      res.json({ message: 'Word deleted successfully', deletedWord });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  editWord: async (req, res) => {
    const { meaning } = req.body;
    try {
      const updatedWord = await Word.findOneAndUpdate(
        { word: req.params.word },
        { $set: { meaning } },
        { new: true }
      );
      if (!updatedWord) {
        return res.status(404).json({ message: 'Word not found' });
      }
      res.json(updatedWord);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = wordController;
