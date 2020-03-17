import React from 'react';
import logo from './logo.svg';
import './App.css';

import Rapor from './Rapor';
import Home from './Home'

import { BrowserRouter as Router, Route,Link } from "react-router-dom";

export default class App extends  React.Component
{


  render() {
    return (
     
        <Router>
          <section style={{display:'flex', width:'100%',boxSizing:'border-box', height:'100vh', padding:'20px', background:'yellow'}}>
           
            <nav style={{background:'red',width:'200px'}}>
              <ul >
                <li> <Link to="/">Home</Link></li>
                <li> <Link to="/rapor">About</Link></li>
              </ul>
            </nav>
          
          
            <main style={{background:'orange',width:'100%'}}>

              <div>
                Üst
              </div>
              
              <div>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/rapor" component={Rapor}/>
              </div>
            </main>
        

          </section>
        </Router>
        
      
  )}
}



