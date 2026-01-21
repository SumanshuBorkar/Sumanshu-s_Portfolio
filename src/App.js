// src/App.js
import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import NavBar from './Components/NavBar';
import Banner from './Components/Banner';
import About from './Components/About';
import Skills from './Components/Skills';
import Project from './Components/Project';
import Contacts from './Components/Contacts';
import ChatBot from './Components/ChatBot'; // Import the ChatBot component
import Footer from './Components/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Banner />
        <About/>
        <Skills />
        <Project />
        <Contacts />
        <ChatBot />
        <Footer/>
      </div>
    </Router>
  );
}

export default App;