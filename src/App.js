import React from 'react';
import './App.css';
import AppRouter from './Routing/AppRouting'
//import AppRouter from './Routing/Router'
import Auxiliary from './HOC/Auxiliary'

function App() {
  return (
    <Auxiliary>
      <div>
        <AppRouter />
      </div>
      <div className="App">
      </div>
    </Auxiliary>
  );
}

export default App;
