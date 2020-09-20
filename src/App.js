import React from 'react';
// import './App.scss';

// common component
// import MaterialTopNavBarComponent from './components/MaterialTopNavBarComponent/MaterialTopNavBarComponent';

// page component
import HomePageComponent from './pages/home/HomePageComponent/HomePageComponent';
import AboutPageComponent from './pages/about/AboutPageComponent/AboutPageComponent';
import ContactPageComponent from './pages/contact/ContactPageComponent/ContactPageComponent';
import MembersPageComponent from './pages/members/MembersPageComponent/MembersPageComponent';
import ServicePageComponent from './pages/service/ServicePageComponent/ServicePageComponent';

import './App.css';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <MaterialTopNavBarComponent /> */}
      {/* <TopNavBarComponent /> */}
      <Route path="/" component={HomePageComponent} exact={true}></Route>
      <Route path="/home" component={HomePageComponent} exact={true}></Route>
      <Route path="/about" component={AboutPageComponent} exact={true}></Route>
      <Route path="/members" component={MembersPageComponent} exact={true}></Route>
      <Route path="/career" component={HomePageComponent} exact={true}></Route>
      <Route path="/service" component={ServicePageComponent} exact={true}></Route>
      <Route path="/contact" component={ContactPageComponent} exact={true}></Route>
    </div>
  );
}
export default App;
