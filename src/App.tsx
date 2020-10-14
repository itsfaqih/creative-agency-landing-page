import Home from 'pages/Home';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import React from 'react';

function App() {
  return (
    <SimpleBar style={{ maxHeight: '100vh' }}>
      <Home />
    </SimpleBar>
  );
}

export default App;
