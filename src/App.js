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
import ProjectsPageComponent from './pages/projects/ProjectsPageComponent/ProjectsPageComponent';

import './App.css';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <MaterialTopNavBarComponent /> */}
      {/* <TopNavBarComponent /> */}
      <Route 
        path='/linkedin'
        component={() => { 
        window.location.href = "https://www.linkedin.com/company/route-consulting-group";
        return null;
      }}/>
      <Route 
        path='/facebook'
        component={() => { 
        window.location.href = "https://www.facebook.com/Route-102109138324421/?ref=settings";
        return null;
      }}/>
      <Route 
        path='/instagram'
        component={() => { 
        window.location.href = "https://instagram.com/route_consulting_group?igshid=mgml7n30cynp";
        return null;
      }}/>
      <Route path="/" component={HomePageComponent} exact={true}></Route>
      <Route path="/home" component={HomePageComponent} exact={true}></Route>
      <Route path="/about" component={AboutPageComponent} exact={true}></Route>
      <Route path="/members" component={MembersPageComponent} exact={true}></Route>
      <Route path="/projects" component={ProjectsPageComponent} exact={true}></Route>
      <Route path="/service" component={ServicePageComponent} exact={true}></Route>
      <Route path="/contact" component={ContactPageComponent} exact={true}></Route>
    </div>
  );
}
export default App;
