import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from 'pages/Auth';
import Home from 'pages/Home';
import Navigation from 'components/Navigation';
import Profile from 'pages/Profile';

const AppRouter = ({login, userObject, currentUserName}) => {
  return (
    <Router>
      {login && <Navigation userObject={userObject}/>}
      <Routes>
        {
          login ?
          <>
            <Route exact path="/" element={<Home userObject={userObject}/>} />
            <Route exact path="/profile" element={<Profile userObject={userObject} currentUserName={currentUserName}/>} />
          </> 
          : <Route exact path="/" element={<Auth/>} />
        }
      </Routes>
    </Router>
  )
};

export default AppRouter;