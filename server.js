// Dependencies
// =============================================================
const express = require("express");
const path = require("path");
const viewRoutes = require("./routes/view");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/", viewRoutes);
// Defaults to homepage if route unknown
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
