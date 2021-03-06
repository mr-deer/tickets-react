import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { combineRequires } from './utils/require';
import App from './containers/App';
import SignIn from './containers/SignIn';
import SignInFirstStep from './containers/SignIn/FirstStep';
import SignInSecondStep from './containers/SignIn/SecondStep';
import Ticket from './containers/Ticket';
import BuyTicket from './containers/BuyTicket';
import ShowTicket from './containers/ShowTicket';
import Verify from './containers/Verify';
import VerifyBusTickets from './containers/VerifyBusTickets';
import Help from './containers/Help';
import About from './containers/About';
import News from './containers/News';
import Report from './containers/Report';
import ReportBus from './containers/ReportBus';
/*
import SignUp from './containers/SignUp';
import SignUpFirstStep from './containers/SignUp/SignUpFirstStep';
import SignUpSecondStep from './containers/SignUp/SignUpSecondStep';
import SignUpThirdStep from './containers/SignUp/SignUpThirdStep';
import SignUpForthStep from './containers/SignUp/SignUpForthStep';
*/

import IndexMarkup from './containers/markup/Index.jsx';
import CommentMarkup from './containers/markup/Comment.jsx';
import HelpMarkup from './containers/markup/Help.jsx';
import AboutMarkup from './containers/markup/About.jsx';
import NewsMarkup from './containers/markup/News.jsx';
import NewsExpandedMarkup from './containers/markup/NewsExpanded.jsx';
import IndexControlMarkup from './containers/markup/IndexControl.jsx';
import TempPageNotForUseMarkup from './containers/markup/TempPageNotForUse.jsx';
import ShowTicketMarkup from './containers/markup/ShowTicket.jsx';

export default function getRoutes({ requireAuth, requireController, requireTicket, requireBus, redirectBasedOnUserType }) { // eslint-disable-line
  return (
    <Route path="/" component={App}>
      <IndexRoute onEnter={redirectBasedOnUserType} />

      <Route path="signin" component={SignIn}>
        <IndexRoute component={SignInFirstStep} />
        <Route path="1" component={SignInFirstStep} />
        <Route path="2" component={SignInSecondStep} />
      </Route>

      <Route path="ticket" component={Ticket} onEnter={requireAuth} />
      <Route path="show-ticket" component={ShowTicket} onEnter={requireTicket} />
      <Route path="buy" component={BuyTicket} onEnter={requireAuth} />

      <Route path="verify" component={Verify} onEnter={requireController} />
      <Route
        path="verify-bus-tickets/:busCode"
        component={VerifyBusTickets}
        onEnter={combineRequires(requireController, requireBus)}
      />

      <Route path="help" component={Help} />
      <Route path="about" component={About} />
      <Route path="news" component={News} />
      <Route path="report" component={Report} />
      <Route path="report/:busCode" component={ReportBus} />

      <Route path="markup">
        <Route path="Index" component={IndexMarkup} />
        <Route path="Comment" component={CommentMarkup} />
        <Route path="Help" component={HelpMarkup} />
        <Route path="About" component={AboutMarkup} />
        <Route path="News" component={NewsMarkup} />
        <Route path="NewsExpanded" component={NewsExpandedMarkup} />
        <Route path="IndexControl" component={IndexControlMarkup} />
        <Route path="TempPageNotForUse" component={TempPageNotForUseMarkup} />
        <Route path="ShowTicket" component={ShowTicketMarkup} />
      </Route>
    </Route>
  );
}

/*

<Route path="signup" component={SignUp}>
  <IndexRoute component={SignUpFirstStep} />
    <Route path="1" component={SignUpFirstStep} />
    <Route path="2" component={SignUpSecondStep} />
    <Route path="3" component={SignUpThirdStep} />
    <Route path="4" component={SignUpForthStep} />
  </Route>


*/
