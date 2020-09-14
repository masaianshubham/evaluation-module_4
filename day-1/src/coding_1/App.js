import React from 'react';
import AuthContextProvider from './Context/AuthContext';
import Homepage from './Components/Homepage';
import './App.css'

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
          <Homepage />
      </div>
    </AuthContextProvider>
  );
}

export default App;
