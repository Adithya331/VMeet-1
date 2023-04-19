import React from 'react';
import { Route,Routes } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
//import logo from './logo.svg';
//import './App.css';
//import Landing from './Landing';
import Landing from './Landing';
import Login from './Login';
import Signup from './Signup';

function App() {
  return (
      <Router>
      <div>
        <section>                              
            <Routes>                                                                        
               <Route path="/" element={<Landing/>}/>
               <Route path="/login" element={<Login/>}/>
               <Route path="/signup" element={<Signup/>}/>
            </Routes>                    
        </section>
      </div>
    </Router>
  );
}

export default App;
