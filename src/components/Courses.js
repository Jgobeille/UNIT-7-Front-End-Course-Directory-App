import React from "react";
import { Route, NavLink, Redirect } from "react-router-dom";
import CSS from "./courses/CSS.js";
import HTML from "./courses/HTML.js";
import JavaScript from "./courses/JavaScript.js";

//match property is passed in from "Route"
const Courses = ({ match }) => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2>
      <ul className="course-nav">
        <li>
          <NavLink to={`${match.url}/html`}>HTML</NavLink>
        </li>
        <li>
          <NavLink to={`${match.url}/css`}>CSS</NavLink>
        </li>
        <li>
          <NavLink to={`${match.url}/javascript`}>JavaScript</NavLink>
        </li>
      </ul>
    </div>

    {/* Write routes here... */}
    {/* BrowserRouter is not needed here because the courses path is already
    wrapped in browserRouter an passed through to its child files */}
    <Route
      exact
      path={match.path}
      /*
      Remember: Redirect component is like regular React component
      Therefore, you can pass functions into it.
      */
      /*
      match.path ensures that even if the route name gets changed, it 
      will still render correctly
      */

      render={() => <Redirect to={`${match.path}/html`} />}
    ></Route>
    <Route path={`${match.path}/html`} component={HTML} />
    <Route path={`${match.path}/css`} component={CSS} />
    <Route path={`${match.path}/javascript`} component={JavaScript} />
  </div>
);

export default Courses;
