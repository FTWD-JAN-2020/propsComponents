import React from 'react';
import './App.css';
import Welcome from './Welcome' //component stateful class
import Goodbye from './Goodbye' //component stateless functional 
//stateless or functional components 

function App() {
  return (
    <div className="App">
      <Welcome 
        emoji=":)" 
      />
      <Goodbye 
        emoji=":(" 
        />
    </div>
  );
}

export default App;
