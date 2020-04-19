import React from "react";
import Course from "./Course";

// Renders all the different courses instead of individual files for each course
const CourseContainer = (props) => {
  let courses = props.data.map((course) => {
    return (
      <Course
        title={course.title}
        desc={course.description}
        img={course.img_src}
        key={course.id}
      />
    );
  });
  return (
    <div>
      <ul>{courses}</ul>
    </div>
  );
};

export default CourseContainer;
