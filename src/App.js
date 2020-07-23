import React, { useState } from "react";
import "./App.css";
import CardGrid from "./components/CardGrid";

const App = () => {
  const [categories, setCategories] = useState([""]);

  console.log(categories);
  const LabelsSelected = () => {
    const handleClearFilter = () => {
      setCategories([""]);
    };

    return (
      <>
        <article className="show-labels-selected card-job">
          <div className="card-labels">
            {categories[0].map((category) => (
              <div key={category + 2} className="card-label">
                <div>{category}</div>
              </div>
            ))}
          </div>
          <div className="clear-labels">
            <button onClick={handleClearFilter}>Clear</button>
          </div>
        </article>
      </>
    );
  };

  return (
    <>
      <header className="App-header">
        <img src="images/bg-header-mobile.svg" alt="bg-header" />
      </header>
      <main className="App-main">
        {categories[0] === "" ? null : <LabelsSelected />}
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
