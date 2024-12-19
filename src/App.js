import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import TablazatReceptek from './TablazatReceptek';
import Recept from './Recept';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TablazatReceptek />} />
        <Route path="/recept" element={<Recept />} />
      </Routes>
    </Router>
  );
}

export default App;