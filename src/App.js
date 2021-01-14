import React from 'react';

import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';

function App() {
  return (
    <div className="App">
      <div class="container-fluid">
        <Nav />
        <Home />
      </div>
    </div>
  );
}

export default App;
