import React from "react";
import "./App.css";
import jobs from "./data/data";
import CardJob from "./components/CardJob";

function App() {
  return (
    <>
      <header className="App-header"></header>
      <main className="App-main">
        <CardJob jobs={jobs} />
      </main>
    </>
  );
}

export default App;
