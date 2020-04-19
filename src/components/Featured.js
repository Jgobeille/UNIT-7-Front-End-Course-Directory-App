import React from "react";

/*
match is a component from the data being passed into the route that renders the 
the Featured component. The data is coming from the url params(courses/teachers/:name)
*/

const Featured = ({ match }) => {
  // console.log(match);
  let name = match.params.name;
  let topic = match.params.topic;
  return (
    <div className="main-content">
      <h2>{name}</h2>
      <p>
        Introducing <strong>{name}</strong>, a teacher who loves teaching
        courses about <strong>{topic}</strong>!
      </p>
    </div>
  );
};

export default Featured;
