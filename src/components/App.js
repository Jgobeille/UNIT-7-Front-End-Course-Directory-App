import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//App Components
import Home from "./Home";
import About from "./About";
import Header from "./Header";
import Teachers from "./Teachers";
import Courses from "./Courses";
import NotFound from "./NotFound";
import Featured from "./Featured";

const App = () => (
  /*BrowserRouter tag renders the route router that listens to URL changes, and
  provides other react rather component information about the current URL and,
  which components to render, that way your UI is always in sync with the URL.
  */
  <BrowserRouter>
    <div className="container">
      <Header />
      {/* 
      The Switch component checks each route to see if there is a match
      If there is a match, it will render the component.
      If no match, it falls back on the "catch all" route that renders the 404  
        */}
      <Switch>
        {/** Render routes via the route component*/}
        {/**Path specifies which URL to match */}
        {/**Component matches which component to render when there is a match  */}
        {/**any route you write in the app container will render a child's component when its path matches the URL. */}
        <Route exact path="/" component={Home} />
        {/**render ets you do inline component rendering */}
        {/**render is used if you need to pass props to your components */}
        <Route path="/about" render={() => <About title="About" />} />
        {/* 
            By having two routes the go to the same url but render different components
            but making the main component exact, it allows the other to accept additional 
            queries to load data. 
        */}
        <Route exact path="/teachers" component={Teachers} />
        {/* 
            To display content from the data passed to the url
            we use "url parameters"
         */}
        <Route path="/teachers/:topic/:name" component={Featured} />
        <Route path="/courses" component={Courses} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
