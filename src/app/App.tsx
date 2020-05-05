import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { About } from "../router/About";
import { Main } from "../router/Main";
import { Favorite } from "../router/Favorite";
import { TopBar } from "../ui/TopBar";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <TopBar />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/favorite" component={Favorite} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
