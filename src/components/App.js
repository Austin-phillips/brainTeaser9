import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Flash from './Flash';
import Home from './Home';
import Cities from './Cities';
import { Switch, Route } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <Segment basic>
        <NavBar />
        <Flash />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/cities' component={Cities} />
            <Route component={NoMatch} />
          </Switch>
      </Segment>
    );
  }
}

export default App;
