import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Preson";

function App() {
  const [persons, setPersons] = useState([
    { id: 1, name: "Amin", age: 18 },
    { id: 2, name: "Farnaz", age: 16 },
  ]);
  const handleDeletePerson = (personId) => {
    let localPersons = [...persons];
    const personIndex = localPersons.findIndex((p) => p.id === personId);
    localPersons = localPersons.filter((value, index) => {
      return index !== personIndex;
    });
    setPersons(localPersons);
  };
  const handleChangePerson = (personId, event) => {
    const localPersons = [...persons];
    const person = localPersons.find((p) => p.id === personId);
    const personIndex = localPersons.findIndex((p) => p.id === personId);
    person.name = event.target.value;
    localPersons[personIndex] = person;
    setPersons(localPersons);
  };
  return (
    <div className="App">
      {persons.map((person) => (
        <Person
          key={person.id}
          name={person.name}
          age={person.age}
          handleChange={(event) => handleChangePerson(person.id, event)}
          handleDelete={() => handleDeletePerson(person.id)}
        />
      ))}
    </div>
  );
}

export default App;
