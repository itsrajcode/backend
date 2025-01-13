import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <h1>Jokes</h1>
      <p>JOKES: {jokes.length}</p>
      {jokes.map((joke) => (
        <div key={joke.id}>
          <h2>{joke.title}</h2>
          <p>{joke.joke}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
