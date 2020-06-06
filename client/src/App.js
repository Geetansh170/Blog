import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home"
import Submit from "./pages/Submit"
import BlogState from "./context/blog/BlogState";

function App() {
  return (
    <Router>
    <BlogState>
      <Switch>
            <Route exact path='/home' component={Home} />
            <Route exact path='/submit' component={Submit} />
      </Switch>                                                          
    </BlogState>
    </Router>
  );
}

export default App;
