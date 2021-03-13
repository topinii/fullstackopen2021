import React, { useState } from "react";
import Name from "./components/Name";

const App = (props) => {
  const [names, setNames] = useState(props.names);
  const [newName, setNewName] = useState("");
  const [showAll, setShowAll] = useState(true);

  const addName = (event) => {
    event.preventDefault();
    const nameObject = {
      content: newName,
      id: names.length + 1,
      important: Math.random() > 0.5,
    };

    setNames(names.concat(nameObject));
    setNewName("");
  };

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const namesToShow = showAll ? names : names.filter((name) => name.important);

  return (
    <div>
      <h1>Phonebook</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? "important" : "all"}
        </button>
      </div>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {namesToShow.map((name) => (
          <Name key={name.id} name={name} />
        ))}
      </ul>
    </div>
  );
};

export default App;
