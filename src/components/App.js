import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

//App Components
import Home from "./Home";
import About from "./About";
import Header from "./Header";
import Teachers from "./Teachers";
import Courses from "./Courses";

const App = () => (
  /*BrowserRouter tag renders the route router that listens to URL changes, and
  provides other react rather component information about the current URL and,
  which components to render, that way your UI is always in sync with the URL.
  */
  <BrowserRouter>
    <div className="container">
      <Header />
      {/** Render routes via the route component*/}
      {/**Path specifies which URL to match */}
      {/**Component matches which component to render when there is a match  */}
      {/**any route you write in the app container will render a child's component when its path matches the URL. */}
      <Route exact path="/" component={Home} />
      {/**render ets you do inline component rendering */}
      {/**render is used if you need to pass props to your components */}
      <Route path="/about" render={() => <About title="About" />} />
      <Route path="/teachers" component={Teachers} />
      <Route path="/courses" component={Courses} />
    </div>
  </BrowserRouter>
);

export default App;
