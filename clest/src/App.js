 
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



import HomePage from './pages/homePage.js'
import MapPage from './pages/mapPage.js'


function App() {
  return (
    <Router>
      <Switch>

        <Route exact path='/'>
          <HomePage />
        </Route>
        
        <Route path='/map'>
          <MapPage />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
