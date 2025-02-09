import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
const app = express();
const port = 3000;
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "worldquiz",
  password: "postgressql9090",
  port: 5432,
});
db.connect();
// here we are configuring our express server to use body-parser
let quiz = [];
db.query("SELECT * FROM capitals", (err, res) => {
  if (err) {
    console.error("Error executing query", err.stack);
  } else {
    quiz = res.rows;
  }
  db.end();
});
// total score
let totalCorrect = 0;
// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
// this is our in-memory database
let currentQuestion = {};
// GET home page
// npm module axios for generating server side requests
app.get("/", async (req, res) => {
  totalCorrect = 0;
  await nextQuestion();
  console.log(currentQuestion);
  res.render("index.ejs", { question: currentQuestion });
});
// POST a new post
app.post("/submit", (req, res) => {
  // npm module body-parser for parsing the request from the body
  let answer = req.body.answer.trim();
  let isCorrect = false;
  if (currentQuestion.capital.toLowerCase() === answer.toLowerCase()) {
    totalCorrect++;
    console.log(totalCorrect);
    isCorrect = true;
  }
  nextQuestion();
  res.render("index.ejs",{
    question: currentQuestion,
    wasCorrect: isCorrect,
    totalScore: totalCorrect,
  });
});
// Here is the code for the nextQuestion function for the quiz gerenrating a random country
async function nextQuestion() {
  const randomCountry = quiz[Math.floor(Math.random() * quiz.length)];

  currentQuestion = randomCountry;
}

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
