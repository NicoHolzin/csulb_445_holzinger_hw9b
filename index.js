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


// Route pour l'exercice 1 (submit), qui renvoie une version modifiée de hex1.html
app.post("/submit", (req, res) => {
    // On renvoie hex1.html avec le script de confirmation
    res.sendFile('ex1.html', { root: __dirname + '/views' });
});

// Route principale qui sert hex1.html
app.get("/ex2", (req, res) => {
  res.sendFile('ex2.html', { root: __dirname + '/../views' });
});

// Route pour l'exercice 2 (API pour les pays visités)
app.post("/api/countries", (req, res) => {
    const { name, countries } = req.body;

    // Calcul du nombre de pays visités
    const numCountries = countries ? countries.length : 0;
    const message = `Votre nom est ${name} et vous avez visité ${numCountries} pays. Continuez à voyager !`;

    // Retourne le message en JSON
    res.json({ message });
});

// Route pour hex2.html (Exercice 2)
app.get("/hex2", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "hex2.html"));
});

app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
