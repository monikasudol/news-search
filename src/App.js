import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import NewsBoard from './views/NewsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NewsBoard />} />
      </Routes>
    </Router>
  );
}

export default App;
