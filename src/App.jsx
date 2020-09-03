import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import LoginContainer from './containers/LoginContainer';
import HomeContainer from './containers/HomeContainer';
import AllCommunityContainer from './containers/AllCommunityContainer';
// import CommunityContainer from './containers/CommunityContainer';
import TrainingsContainer from './containers/TrainingsContainer';
import ChatContainer from './containers/ChatContainer';
import ProfileContainer from './containers/ProfileContainer';
import InfoTraining from './components/InfoTraining'
import { auth } from './firebase'
import Loader from './components/Loader'

function LoggedInRoute({ children, isUserLoggedIn, ...rest }) {

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
function NonLoggedInRoute({ children, isUserLoggedIn, ...rest }) {

  return (
    <Route
      {...rest}
      render={() => {
        if (!isUserLoggedIn) {
          return <>{children}</>
        }
        return <Redirect to='/home' />
      }
      }
    >
    </Route>
  );
}

function App() {

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsUserLoggedIn(true)
        console.log('existe');
      } else {
        setIsUserLoggedIn(false)
      }
      setLoading(false)

    })
  }, [])

  if (loading) return <Loader />

  return (
    <Router>
      <Switch>
        <NonLoggedInRoute isUserLoggedIn={isUserLoggedIn} path='/login'>
          <LoginContainer />
        </NonLoggedInRoute>
        <LoggedInRoute isUserLoggedIn={isUserLoggedIn} path='/home' >
          <HomeContainer />
        </LoggedInRoute>
        <LoggedInRoute isUserLoggedIn={isUserLoggedIn} path='/community'>
          <AllCommunityContainer />
        </LoggedInRoute>
        <LoggedInRoute isUserLoggedIn={isUserLoggedIn} exact path='/trainings'>
          <TrainingsContainer />
        </LoggedInRoute>
        <LoggedInRoute isUserLoggedIn={isUserLoggedIn} exact path='/trainings/:id'>
          <InfoTraining />
        </LoggedInRoute>
        <LoggedInRoute isUserLoggedIn={isUserLoggedIn} path='/chat'>
          <ChatContainer />
        </LoggedInRoute>
        <LoggedInRoute isUserLoggedIn={isUserLoggedIn} path='/profile'>
          <ProfileContainer />
        </LoggedInRoute>
      </Switch>
    </Router>
  );
}

export default App;
