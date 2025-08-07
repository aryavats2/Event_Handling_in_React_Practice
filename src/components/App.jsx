import React, { useState } from "react";

function App() {
  const [headingText, setHeadingtext] = useState("SuperGPT");
  const [hover, nextHover] = useState(false);
  function set() {
    setHeadingtext("The fastest AI");
  }
  function change() {
    //   console.log("hover hua hai!");
    nextHover(true);
  }
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: nextHover ? "black" : "white" }}
        onClick={set}
        onMouseOver={change}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
