import React from "react";
import emojipedia from "../emojipedia.js";
import Term from "./Term.jsx";

function createTerm(props) {
  return (
    <Term
      key={props.id}
      emoji={props.emoji}
      name={props.name}
      meaning={props.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createTerm)}</dl>
    </div>
  );
}
export default App;
