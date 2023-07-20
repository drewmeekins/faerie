import './App.css';
import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar'

function App () {
  return(
    <div className='App'>
      <h1>Hello World</h1>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" />
          <Route path="/cart" />
        </Routes>
      </Router>
      
    </div>
  )
}
 
export default App; 