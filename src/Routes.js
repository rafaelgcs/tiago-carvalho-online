import React from 'react';
import { Route, Switch } from 'react-router-dom';

// SCREENS
import HomePage from './screens/HomePage';
import AboutPage from './screens/AboutPage';



class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/sobre' component={AboutPage} />
        
        <Route
          render={function() {
            return <h1>Página não encontrada</h1>;
          }}
        />
      </Switch>
    );
  }
}

export default Routes;
