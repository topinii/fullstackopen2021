import React, { useState } from "react";
import Name from "./components/Name";

const App = (props) => {
  const [names, setNames] = useState(props.names);
  const [newName, setNewName] = useState("");

  const addName = (event) => {
    event.preventDefault();
    const nameObject = {
      content: newName,
      id: names.length + 1,
    };

    setNames(names.concat(nameObject));
    setNewName("");
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  return (
    <div>
      <h1>Phonebook</h1>
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
        {names.map((name) => (
          <Name key={name.id} name={name} />
        ))}
      </ul>
    </div>
  );
};

export default App;
