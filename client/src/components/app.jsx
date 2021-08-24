import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './homePage.jsx';
import Favorites from './dogCards/favorites.jsx';
import AddForm from './addForm.jsx';

const App = () => {

	const useStickyState = (defaultValue, key) => {
    key++;
    const [favorites, setFavorites] = useState(() => {
      const stickyValue = window.localStorage.getItem(key);
      return stickyValue !== null
        ? JSON.parse(stickyValue)
        : defaultValue;
    });
    useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(favorites));
    }, [key, favorites]);
    return [favorites, setFavorites];
  }

  let keyVal = 0;

  const [favorites, setFavorites] = useStickyState([], keyVal);

	return (
		<Router>
      <div>
				<Switch>
					<Route path='/favorites'>
						<Favorites favorites={favorites}/>
					</Route>
					<Route path='/add'>
						<AddForm/>
					</Route>
					<Route path='/'>
						<Home setFavorites={setFavorites} favorites={favorites}/>
					</Route>
				</Switch>
      </div>
    </Router>
	)
};

export default App;