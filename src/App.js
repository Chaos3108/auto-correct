import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [text,setText] = useState("");
  const customDictionary = {
    teh: "the",
    wrok: "work",
    fot: "for",
    exampl: "example",
  };

  return (
    <div className="container">
      <h1>Spell check and Auto-correction</h1>
      <textarea
        rows="10"
        cols="50"
        placeholder="Enter text"
        spellCheck="true"
        autoCorrect="on"
        autoCapitalize="sentences"
        value={text}
        setText={setText}
        onChange={(e) => setText(e.target.value)}
        className="text-input"
      ></textarea>
      {text && (
        <div className="suggestions">
          <ul>
            {text.split(" ").map((word, index) => {
              const correctedWord = customDictionary[word.toLowerCase()];
              return (
                <>
                  {correctedWord ? (
                    <span>
                      {"Did you mean:"}  {correctedWord}?
                    </span>
                  ) :(null)}
                  </>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
