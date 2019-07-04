import React from 'react';
import logo from './logo.svg';
import './App.css';
import Carousel from './Carousel';
function App() {
  return (
    <div className="App">
      <Carousel>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </Carousel>
    </div>
  );
}

export default App;
