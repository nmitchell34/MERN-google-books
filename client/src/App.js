import React, { useEffect } from "react";
import Axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron"
import Search from "./pages/search"
import Saved from "./pages/saved"

function App() {
  useEffect(() => {});

  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Search}/>
        <Route exact path='/saved' component={Saved}/>
      </Router>
    </div>
  );
}

export default App;
