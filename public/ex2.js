const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3001;

// Middleware to parse JSON data
app.use(bodyParser.json());

// Route to handle POST request to "/api/countries"
app.post("/api/countries", (req, res) => {
    const { name, countries } = req.body;

    // Calculate the number of visited countries
    const numCountries = countries ? countries.length : 0;

    // Response message
    const message = `Your name is ${name} and you visited ${numCountries} countries. Keep traveling!`;

    // Send response as JSON
    res.json({ message });
});

// Serve the main HTML page
app.get("/", (req, res) => {
  res.sendFile('ex2.html', { root: __dirname + '/../views' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
