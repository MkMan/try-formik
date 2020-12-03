import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from './home';
import { User } from './user';

export const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/user">Users</Link>
          </li>
        </ul>
      </nav>
      <Switch>
          <Route path="/user">
            <User />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      <div className="App"></div>
    </Router>
  );
};
