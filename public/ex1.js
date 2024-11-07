const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));

// Route to serve the HTML form (GET request to "/")
app.get("/", (req, res) => {
    res.sendFile('ex1.html', { root: __dirname + '/../views' });
});

// Route to handle form submission (POST request)
app.post("/submit", (req, res) => {
    const { name, email } = req.body;

    // Send back the HTML with the confirmation message
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Confirmation</title>
            <link rel="stylesheet" href="/css/style.css">
        </head>
        <body>
            <h1>Confirmation</h1>
            <p>${name}, thank you for your order. We will keep you posted on delivery status at ${email}.</p>
            <a href="/">Back to Form</a>
        </body>
        </html>
    `);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
