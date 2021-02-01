import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  const [greeting, setGreeting] = useState();
  useEffect(() => {
    fetch("http://localhost:8000/api")
      .then((res) => res.json())
      .then((data) => setGreeting(data.greeting));
  }, []);

  return <div>{greeting}</div>;
}
