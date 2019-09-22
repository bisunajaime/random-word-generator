import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from "./components/Footer"
import RandomWord from "./components/RandomWord"
import Header from "./components/Header"

function App() {
  return (
    <div className="">
      <Header />
      <RandomWord/>
      <Footer />
    </div>
  );
}

export default App;
