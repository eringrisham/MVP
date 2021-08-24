import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './homePage.jsx';
import Favorites from './dogCards/favorites.jsx';

const App = () => {

	return (

		<Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

					<Switch>
						<Route path="/favorites">
							<Favorites />
						</Route>
						<Route path="/">
							<Home />
						</Route>
					</Switch>
      </div>
    </Router>

	)
};

export default App;