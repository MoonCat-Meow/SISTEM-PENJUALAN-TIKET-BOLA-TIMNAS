const Match = require("../models/Match");

// Create a new match
exports.createMatch = async (req, res) => {
  try {
    const match = new Match(req.body);
    const savedMatch = await match.save();
    res.status(201).json(savedMatch);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all matches
exports.getAllMatches = async (req, res) => {
  try {
    const matches = await Match.find();
    res.status(200).json(matches);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single match by ID
exports.getMatchById = async (req, res) => {
  try {
    const match = await Match.findById(req.params.id);
    if (!match) return res.status(404).json({ error: "Match not found" });
    res.status(200).json(match);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a match by ID
exports.updateMatch = async (req, res) => {
  try {
    const updatedMatch = await Match.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updatedMatch)
      return res.status(404).json({ error: "Match not found" });
    res.status(200).json(updatedMatch);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a match by ID
exports.deleteMatch = async (req, res) => {
  try {
    const deletedMatch = await Match.findByIdAndDelete(req.params.id);
    if (!deletedMatch)
      return res.status(404).json({ error: "Match not found" });
    res.status(200).json({ message: "Match deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
