import React from 'react';
import Home from './home';
import Cuisine from './cuisine';
import {Route, Routes } from 'react-router-dom';

function Pages() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
      </Routes>
  );
}

export default Pages;
