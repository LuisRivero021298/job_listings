import React, { useState } from "react";
import CardGrid from "./components/CardGrid";

const App = () => {
  const [categories, setCategories] = useState([""]);

  const LabelsSelected = ({ categories, setCategories }) => {
    const handleClearAllFilters = () => {
      setCategories([""]);
    };

    const handleClearAfilter = (e) => {
      let item = e.target.value;

      if (e.target.localName === "img") {
        item = e.target.parentElement.value;
      }

      setCategories(([categories]) => {
        let i = categories.indexOf(item);

        if (i !== -1) {
          categories.splice(i, 1);
        }
        if (categories.length === 0) {
          return [""];
        }
        return [categories];
      });
    };

    return (
      <>
        <section className="show-labels-selected card-job">
          <div className="card-labels">
            {categories[0].map((category) => (
              <article key={category + 2} className="card-label">
                <div className="card-label-content">
                  <div>{category}</div>
                  <button
                    value={category}
                    onClick={handleClearAfilter}
                    className="btn-clear"
                  >
                    <img src="images/icon-remove.svg" alt="X" />
                  </button>
                </div>
              </article>
            ))}
          </div>
          <div className="clear-labels">
            <button onClick={handleClearAllFilters}>Clear</button>
          </div>
        </section>
      </>
    );
  };

  return (
    <>
      <header className="App-header">
        <img
          className="bg-mobile"
          src="images/bg-header-mobile.svg"
          alt="bg-header"
        />
        <img
          className="bg-desktop"
          src="images/bg-header-desktop.svg"
          alt="bg-header"
        />
      </header>
      <main className="App-main">
        {categories[0] === "" ? null : (
          <LabelsSelected
            categories={categories}
            setCategories={setCategories}
          />
        )}
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
