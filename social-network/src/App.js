import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';
import Users from './Components/Users/Users';
import store from './redux/store';
import { Provider } from 'react-redux';
import ProfileContainer from './Components/Profile/ProfileContainer';

function App() {
  return (
    <BrowserRouter>
      <Provider  store={store}>
        <div className="app-wrapper">
            <Header/>
            <Navbar/>

          <div className="app-wrapper-content">
            <Route path="/profile" render={()=> <ProfileContainer store={store}/>}/>
            <Route path="/users" render={()=> <Users/>}/>
          </div>    
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
