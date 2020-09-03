import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import LoginContainer from './containers/LoginContainer';
import HomeContainer from './containers/HomeContainer';
import CommunityContainer from './containers/CommunityContainer';
import TrainingsContainer from './containers/TrainingsContainer';
import ChatContainer from './containers/ChatContainer';
import ProfileContainer from './containers/ProfileContainer';
import InfoTraining from './components/InfoTraining'


function App() {
  // const authEmailPassword = (email, password) => auth.signInWithEmailAndPassword(email, password)
  // .then(() => true);
  // const result = authEmailPassword("prueba@gmail.com", "prueba123");
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true)

  function LoggedInRoute({ children, ...rest }) {

    return (
      <Route
        {...rest}
        render={() => {
          if (isUserLoggedIn) {
            return <MainLayout>{children}</MainLayout>
          }
          return <Redirect to='/login' />
        }
        }
      >
      </Route>
    );
  }

  return (
    <Router>
      <Switch>
        <Route path='/' exact component={LoginContainer} />
        <LoggedInRoute path='/home' >
          <HomeContainer />
        </LoggedInRoute>
        <LoggedInRoute path='/community'>
          <CommunityContainer />
        </LoggedInRoute>
        <LoggedInRoute exact path='/trainings'>
          <TrainingsContainer />
        </LoggedInRoute>
        <LoggedInRoute exact path='/trainings/:id'>
          <InfoTraining />
        </LoggedInRoute>
        <LoggedInRoute path='/chat'>
          <ChatContainer />
        </LoggedInRoute>
        <LoggedInRoute path='/profile'>
          <ProfileContainer />
        </LoggedInRoute>
      </Switch>
    </Router>
  );
}

export default App;
