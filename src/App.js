import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  componentDidMount(){
    document.title = "Sam's React Bootstrapped App"
  }

  render() {
    return (
      <div>
        <NavBar />
        <Header />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Footer />
      </div>
    );
  }

}

export default App;
