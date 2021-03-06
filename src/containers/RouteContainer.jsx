import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import {Provider} from "react-redux";
import injectTapEventPlugin from 'react-tap-event-plugin';

import PrivateRoute from '../components/baseComponents/PrivateRoute';
import NavBarContainer from '../containers/NavBarContainer';
import Footer from '../components/Footer';
import TestContainer from '../containers/TestContainer';
import HomeContainer from '../containers/HomeContainer';
import BlogContainer from '../containers/BlogContainer';
import EventContainer from '../containers/EventContainer';
import BoardContainer from '../containers/board/BoardContainer';
import AboutContainer from '../containers/AboutContainer';
import InstaFeedContainer from '../containers/InstaFeedContainer';
import EditAbout from '../containers/board/EditAboutContainer';
import EditEventContainer from '../containers/board/EditEventContainer';
import SingleEventContainer from '../containers/SingleEventContainer';
import EventListContainer from '../containers/board/EventListContainer';
import MemberListContainer from '../containers/board/MemberListContainer';
import EventInfoContainer from '../containers/board/EventInfoContainer';
import BlogListContainer from '../containers/board/BlogListContainer';
import EditBlogContainer from '../containers/board/EditBlogContainer';
import ProfileContainer from '../containers/ProfileContainer';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: 'rgb(10, 79, 117)',
    alternateTextColor: 'rgb(246, 170, 111)',
  },

  icon: {
    color: '#ddd',
  },
});

const RouteContainer = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div >
      <BrowserRouter>
        <div className="routeContainer">
          <NavBarContainer />
          <div className="baseContainer">
            <Switch>
              <Route exact path="/" component={HomeContainer} />

              <Route path="/blog" component={BlogContainer} />
              <Route path="/events" component={EventContainer} />
              <Route path="/about" component={AboutContainer} />
              <Route path="/event/:eventId" component={SingleEventContainer} />
              <Route path="/images" component={InstaFeedContainer} />
              <Route path="/test" component={TestContainer} />
              <PrivateRoute path="/profile" component={ProfileContainer} />
              <PrivateRoute exact path="/board" component={BoardContainer} />
              <PrivateRoute path="/board/editabout" component={EditAbout} />
              <PrivateRoute path="/board/events" component={EventListContainer} />
              <PrivateRoute path="/board/editEvent/:eventId" component={EditEventContainer} />
              <PrivateRoute path="/board/event/:eventId" component={EventInfoContainer} />
              <PrivateRoute path="/board/memberlist" component={MemberListContainer} />
              <PrivateRoute path="/board/blog" component={BlogListContainer} />
              <PrivateRoute path="/board/postById/:postId" component={EditBlogContainer} />
            </Switch>
          </div>
          <Footer />
        </div>
      </BrowserRouter>

    </div>
  </MuiThemeProvider>
);

injectTapEventPlugin();

export default RouteContainer;
