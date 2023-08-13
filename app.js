const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// Serve static files from the current directory (including "logina.html")
app.use(express.static(__dirname));

// Parse URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve "logina.html" when users visit the root URL ('/')
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/logina.html");
});

// Handle form submissions and respond with a "thank you" message
app.post("/", (req, res) => {
    res.send("Thank you for subscribing!");
});

// Start the server
const PORT = 3000; // Choose a port number that's not in use
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
