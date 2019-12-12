import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './containers/Home';
import LayoutMain from './hoc/LayoutMain/LayoutMain';

class App extends Component { 
  
  render() {    

    let routes = (
      <Switch>
          <Route path="/" exact component={Home} />            
      </Switch>  
    );  

    return (
      <div>
          <LayoutMain />
      </div>
    );
  }  
}

export default App;