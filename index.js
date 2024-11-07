const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile('index.html', { root: __dirname + '/views' });
});

app.get("/ex1", (req, res) => {
  res.sendFile('ex1.html', { root: __dirname + '/views' });
});

app.post("/submit", (req, res) => {
  const { name, email } = req.body;
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

app.get("/ex2", (req, res) => {
  res.sendFile('ex2.html', { root: __dirname + '/views' });
});

app.post("/api/countries", (req, res) => {
    const { name, countries } = req.body;
    const numCountries = countries ? countries.length : 0;
    const message = `Votre nom est ${name} et vous avez visité ${numCountries} pays. Continuez à voyager !`;
    res.json({ message });
});

app.get("/ex3", (req, res) => {
  res.sendFile('ex3.html', { root: __dirname + '/views' });
});

let articles = [];
app.post("/articles", (req, res) => {
  const { title, content } = req.body;
  const maxId = articles.length > 0 ? Math.max(...articles.map(article => article.id)) : 0;
  const newId = maxId + 1;
  const newArticle = { id: newId, title, content };
  articles.push(newArticle);
  res.send(`New article added successfully with title "${title}" and ID ${newId}!`);
});

app.get("/api/articles", (req, res) => {
  res.json(articles);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
