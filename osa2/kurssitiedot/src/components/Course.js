import React from "react";
import Header from "./Header";
import Content from "./Content";

const Course = (props) => {
  const { courses } = props;

  return (
    <div>
      <h1>Web dev curriculum</h1>
      {courses.map((course) => (
        <div key={course.id}>
          <Header course={course.name} />
          <Content parts={course.parts} />
        </div>
      ))}
    </div>
  );
};

export default Course;
