import React from "react";
import Part from "./Part";
import Total from "./Total";

const Content = (props) => {
  const { parts } = props;
// console.log(props)
  return (
    <div>
      <div>
        {parts.map((part) => (
          <Part part={part.name} exercises={part.exercises} key={part.id} />
        ))}
      </div>
      <div>
        <Total parts={props.parts} />
      </div>
    </div>
  );
};

export default Content;
