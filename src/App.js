import React from 'react';
import logo from './logo.svg';

// common component
import TopNavBarComponent from './components/TopNavBarComponent/TopNavBarComponent';

// page component
import HomePageComponent from './pages/home/HomePageComponent/HomePageComponent';
import AboutPageComponent from './pages/about/AboutPageComponent/AboutPageComponent';

import './App.css';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <TopNavBarComponent />
      <Route path="/" component={HomePageComponent} exact={true}></Route>
      <Route path="/about" component={AboutPageComponent} exact={true}></Route>
    </div>
  );
}
export default App;
