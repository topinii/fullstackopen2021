import React from "react";

const Total = (props) => {
  const exercises = props.parts;
  const count = exercises.reduce(
    (result, { exercises }) => result + exercises,
    0
  );

  return <div><b>Total of {count} exercises</b></div>;
};

export default Total;
