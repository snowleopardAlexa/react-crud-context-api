import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ListArticle from './components/ListArticle';
import CreateArticle from './components/CreateArticle';
import EditArticle from './components/EditArticle';
import DeleteArticle from './components/DeleteArticle';

function App() {
  return (
    <div className="app">
      <header className="header text-center">React CRUD App</header>
      <Routes>
        <Route path="/listarticle" element={<ListArticle />} />
        <Route path="/" element={<CreateArticle />} />
        <Route path="/" element={<EditArticle />} />
        <Route path="/" element={<DeleteArticle />} />
      </Routes>
    </div>
  );
}

export default App;
