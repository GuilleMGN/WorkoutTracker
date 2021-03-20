const path = require("path");
const router = require("express").Router();

// Route to exercise page
router.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});
// Route to stats page
router.get("/stats", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});
// Directs to home page
router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;