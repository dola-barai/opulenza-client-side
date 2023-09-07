import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Home';
import MenuItems from '../components/Menu/MenuItems';
import AddMenuItems from '../components/Menu/AddMenuItems';
import AboutUS from '../components/AboutUs/AboutUS';


function RouteApp() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUS />} />
      <Route path="/menu" element={<MenuItems />} />
      <Route path="/addMenu" element={<AddMenuItems />} />
      </Routes>
    </Router>
  );
}

export default RouteApp;
