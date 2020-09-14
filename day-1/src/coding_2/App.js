import React from 'react';
import JobContextProvider from './Context/JobContext';
import Display from './Components/Display';

function App() {
  return (
    <JobContextProvider>
          <Display />
    </JobContextProvider>
  );
}

export default App;