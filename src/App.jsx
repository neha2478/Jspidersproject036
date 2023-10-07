import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import "./Global.css";

import Home from './Payload/Home.jsx';
import About from './Payload/About.jsx';
import Gallery from './Payload/Gallary.jsx';
import Register from './Authentication/Register.jsx';
import Navbar from './Navbar/Navbar.jsx';
import Loginhere from './Authentication/Loginhere.jsx';
import Adimregister from './Admin/Adimregister.jsx';
import ProtectedRoutes from './Services Routers/ProtectedRoutes.jsx';
import AdminDashboard from './Admin/AdminDashboard.jsx';
import Addacademymanager from './Admin/Manager/Addacademymanager.jsx';
import ViewAcademyManager from './Admin/Manager/ViewAcademyManager.jsx';
import Viewacademy from './Admin/Manager/Viewacademy.jsx';
import Viewbranch from './Admin/Manager/Viewbranch.jsx';
import Viewcourse from './Admin/Manager/Viewcourse';

const App = () => {
  return (
    <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={
              <ProtectedRoutes>
                <Home/>
              </ProtectedRoutes>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/gallary' element={<Gallery/>}/>
            <Route path='/login' element={<Loginhere/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/adminregister' element={<Adimregister/>}/>
            <Route path='/adminDashbord' element={<AdminDashboard/>}>
              <Route path='/adminDashbord/addacamdymanager' element={<Addacademymanager/>}/>
              <Route path='/adminDashbord/viewacamdymanager' element={<ViewAcademyManager/>}/>
              <Route path='/adminDashbord/viewacademy' element={<Viewacademy/>}/>
              <Route path='/adminDashbord/viewbranch' element={<Viewbranch/>}/>
              <Route path='/adminDashbord/viewcourse' element={<Viewcourse/>}/>
            </Route>
        </Routes>
    </Router>
  )
}

export default App

//Here we are adding Functionality to the  to Home ...page itself and we need to wrap it into a <ProtectedRoutes></ProtectedRoutes>
// So we need to give it as a child... fo this one...