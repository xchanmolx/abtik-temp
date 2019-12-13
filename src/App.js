import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Home from './containers/Home/Home';
import Preparedness from './containers/Preparedness/Preparedness';
import Team from './components/Team/Team';
import Contact from './components/Contact/Contact';

class App extends Component {

  render() {
    
    return (
      <div>
        <Layout>          
          <Switch>                        
            <Route path="/preparedness" component={Preparedness} />
            <Route path="/team" component={Team} />
            <Route path="/contact" component={Contact} />
            <Route path="/" exact component={Home} />            
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
