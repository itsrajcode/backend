import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

const jokes = [
  {
    id: 1,
    title: "A joke",
    joke: "What's the best thing about Switzerland? I don't know, but the flag is a big plus!",
  },
  {
    id: 2,
    title: "ANother joke",
    joke: "this is another joke",
  },
  {
    id: 3,
    title: "Another one",
    joke: "I told my wife she was drawing her eyebrows too high. She looked surprised.",
  },
  {
    id: 4,
    title: "Why don't scientists trust atoms?",
    joke: "Because they make up everything.",
  },
  {
    id: 5,
    title: "Why don't eggs tell jokes?",
    joke: "They'd crack each other up!",
  },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/jokes", (req, res) => {
  res.send(jokes);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

