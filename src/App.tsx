import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HomePage } from './pages/HomePage';
import { ContactPage } from './pages/ContactPage';
import { HireMePage } from './pages/HireMePage';
import { ProjectDetailsPage } from './pages/ProjectDetailsPage';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/hire-me" element={<HireMePage />} />
        <Route path="/projects/:id" element={<ProjectDetailsPage />} />
      </Routes>
    </>
  );
}

export default App;