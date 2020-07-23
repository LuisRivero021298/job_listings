import React, { useState } from "react";
import "./App.css";
import CardGrid from "./components/CardGrid";

const App = () => {
  const [categories, setCategories] = useState([""]);
  return (
    <>
      <header className="App-header">
        <img src="images/bg-header-mobile.svg" alt="bg-header" />
      </header>
      <main className="App-main">
        {categories.map((category) => (
          <CardGrid
            key={category}
            category={category}
            setCategories={setCategories}
          />
        ))}
      </main>
    </>
  );
};

export default App;
