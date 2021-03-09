import React from "react";
import Part from "./Part";

const Content = (props) => {
  const { parts } = props;

  return (
    <>
      {parts.map((part) => (
        <Part part={part.name} exercises={part.exercises} key={part.id} />
      ))}
    </>
  );
};

export default Content;
