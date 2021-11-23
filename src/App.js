import React, { Component } from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import ProgramList from './components/Dashboard/ProgramList';
import Aboutus from './components/Dashboard/Aboutus';
import Contact from './components/Dashboard/Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


class App extends Component{
  render(){
    return(
      <Router>
      <div>
        <Header />
        <div style={{textAlign:'center',marginTop:'20px'}}>
        <Route path="/" exact component={ProgramList} />
        <Route path="/program-list" component={ProgramList} />
        <Route path="/about-us" component={Aboutus} />
        <Route path="/contact" component={Contact} />
        </div>
        <Footer year="2021" company="Tata Elxsi" />
      </div>
      </Router>
    );
  }
}

export default App;