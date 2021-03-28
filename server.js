// Dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
const viewRoutes = require("./routes/view");
const apiRoutes = require("./routes/api");

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
app.use(express.static("public"));
app.use("/", viewRoutes);
app.use(apiRoutes);
// Defaults to homepage if route unknown
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

// Starts the server to begin listening
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
