const express = require("express");


const app = express();
const PORT = 3000;

// Middleware pour parser les données JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Route principale 
app.get("/", (req, res) => {
  res.sendFile('index.html', { root: __dirname + '/views' });
});

app.get("/ex1", (req, res) => {
  res.sendFile('ex1.html', { root: __dirname + '/views' });
});

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

// Route principale qui sert hex1.html
app.get("/ex2", (req, res) => {
  res.sendFile('ex2.html', { root: __dirname + '/views' });
});

app.post("/api/countries", (req, res) => {
    const { name, countries } = req.body;

    // Calcul du nombre de pays visités
    const numCountries = countries ? countries.length : 0;
    const message = `Votre nom est ${name} et vous avez visité ${numCountries} pays. Continuez à voyager !`;

    // Retourne le message en JSON
    res.json({ message });
});


app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
