 
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from "./authcontext.js";


import './styles/styles.scss'
import HomePage from './pages/homePage.js'
import MapPage from './pages/mapPage.js'
import Leaderboard from './pages/Leaderboard.js'
import Form from './components/form.js'



function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path='/'>
          <section className = 'backgroundS'>
            <HomePage />
            {/* <Leaderboard /> */}
          </section>
          </Route>
          
          <Route exact path='/map' component={MapPage} />
          <Route exact path='/form' component={Form} />

        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
