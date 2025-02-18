import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './routes/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
