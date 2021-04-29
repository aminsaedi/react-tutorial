import React from "react";
import "./Preson.css";

const Person = ({ name, age, handleChange, handleDelete }) => {
  return (
    <div className="Person" onDoubleClick={handleDelete}>
      <p>
        My name is {name} and i'm {age} years old.
      </p>
      <input value={name} onChange={handleChange} />
    </div>
  );
};

export default Person;
