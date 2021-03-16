import React, { useState } from "react";
import Name from "./components/Name";

const App = (props) => {
  const [names, setNames] = useState(props.names);
  const [newName, setNewName] = useState("");
  const [showAll, setShowAll] = useState(true);

  const checkDuplicate = names.filter(name => name.content);

  const addName = (event) => {
    event.preventDefault();
    const nameObject = {
      content: newName,
      id: names.length + 1,
    };

    setNames(names.concat(nameObject));
    setNewName("");

    if (newName === checkDuplicate.map(name => name.content)) {
      console.log('löytyy')
    } else {
      console.log('ei löydy')
      console.log(checkDuplicate.map(name => name.content))
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  // const duplicateCheck = names.filter((name) => name.content === event.target.value);

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
