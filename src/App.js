import react from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [current, setCurrent] = useState();

  const btnNames = [
    {
      name: "All product",
      value: "all",
    },
    {
      name: "Load More",
      value: "load",
    },
    {
      name: "Filter by category",
      value: "fCategory",
    },
    {
      name: "Filter by brand",
      value: "fBrand",
    },
    {
      name: "Add product",
      value: "add",
    },
  ];
  return (
    <div className="App">
      <div className="buttons">
        {btnNames.map((btn, index) => {
          <button>{btn.name}</button>;
        })}
      </div>
    </div>
  );
}

export default App;
