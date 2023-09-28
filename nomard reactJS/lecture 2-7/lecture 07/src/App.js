import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from "./7.6/Home";
import Detail from "./7.6/Detail";

function App() {
  return <Router>
    <Switch>
      <Route path="/detail/:id/:date" ><Detail /></Route>
      <Route path="/"><Home /></Route>
    </Switch>
  </Router>;
  
}

export default App;


