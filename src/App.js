import React from 'react';
// import './App.scss';

// common component
// import MaterialTopNavBarComponent from './components/MaterialTopNavBarComponent/MaterialTopNavBarComponent';
import TopNavBarComponent from './components/TopNavBarCompontnent/TopNavBarComponent';

// page component
import HomePageComponent from './pages/home/HomePageComponent/HomePageComponent';
import AboutPageComponent from './pages/about/AboutPageComponent/AboutPageComponent';
import MainPageComponent from './pages/main/MainPageComponent/MainPageComponent';
import ContactPageComponent from './pages/contact/ContactPageComponent/ContactPageComponent';

import './App.css';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <MaterialTopNavBarComponent /> */}
      <TopNavBarComponent />
      <Route path="/" component={MainPageComponent} exact={true}></Route>
      <Route path="/about" component={AboutPageComponent} exact={true}></Route>
      <Route path="/home" component={HomePageComponent} exact={true}></Route>
      <Route path="/contact" component={ContactPageComponent} exact={true}></Route>
    </div>
  );
}
export default App;
