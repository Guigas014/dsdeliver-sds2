import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Home from './Home';
import Orders from './Orders';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/orders" component={Orders} /> 
      </Switch> 
    </BrowserRouter>
  )
}

export default Routes;

