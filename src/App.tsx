import React from 'react';
import { BrowserRouter as Router, Routes, Route }  from 'react-router-dom';
import Home from './Routes/Home';
import Contacts from './Routes/Contacts';
import About from './Routes/About'; 
import Nav from './components/nav';

function App() {
  return (
    <Router>
      <div>
     <Nav/>

        {/* Definisci le rotte */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about" element={<About />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
