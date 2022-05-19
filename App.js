// import {useState} from 'react';
// For using the following, use Router as below to render the page
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Home />
        <Routes>
            <Route path='./' exact component={Home} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
