const express = require("express");
const {
  createMatch,
  getAllMatches,
  getMatchById,
  updateMatch,
  deleteMatch,
} = require("../controllers/matchController");

const router = express.Router();

// Routes
router.post("/", createMatch);
router.get("/", getAllMatches);
router.get("/:id", getMatchById);
router.put("/:id", updateMatch);
router.delete("/:id", deleteMatch);

module.exports = router;
