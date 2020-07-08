import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';
import Users from './Components/Users/Users';
import Profile from './Components/Profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
          <Header/>
          <Navbar/>

        <div className="app-wrapper-content">
          <Route path="/profile" render={()=> <Profile/>}/>
          <Route path="/users" render={()=> <Users/>}/>
        </div>    
      </div>
    </BrowserRouter>
  );
}

export default App;
