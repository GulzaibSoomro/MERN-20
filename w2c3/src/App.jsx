import React, { useState } from "react";
import "./App.css";

const App = () => {
  const colors = [
    "blue",
    "red",
    "purple",
    "pink",
    "yellow",
    "orange",
    "green",
    "royalblue",
    "brown",
  ];
  const [color, setColor] = useState();

  return (
    <>
      <div className="main">
        <div className="big" style={{ background: color }}></div>
        <div className="wrap">
          {colors.map((colorsItem) => {
            return (
              <div
                style={{ background: colorsItem }}
                onClick={() => setColor(colorsItem)}
              ></div>
            );
          })}
        </div>
        <button onClick={() => setColor(undefined)}>Reset</button>
      </div>
    </>
  );
};
export default App