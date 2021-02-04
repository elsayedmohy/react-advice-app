import React, { useState, useEffect } from "react";
import axios from "axios";
import "./app.css";

const App = () => {
  const [advice, setAdvice] = useState("");

  const fetchAdivce = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;
        setAdvice(advice);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchAdivce();
  }, []);

  return (
    <div className="app">
      <div className="card">
        <h1>{advice}</h1>
        <button onClick={fetchAdivce}>Give me an Advice !</button>
      </div>
    </div>
  );
};

export default App;
