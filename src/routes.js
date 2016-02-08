import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Index from './containers/Index';
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';
import BuyTicket from './containers/BuyTicket';

export default (requireAuth) => <Route path="/" component={ App }>
  <IndexRoute component={ Index } />
  <Route path="signin" component={ SignIn } />
  <Route path="signup" component={ SignUp } />
  <Route path="buy" component={ BuyTicket } onEnter={ requireAuth } />
</Route>;
