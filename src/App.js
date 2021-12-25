import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'
//import ListArticle from './components/ListArticle';
import CreateArticle from './components/CreateArticle';
import EditArticle from './components/EditArticle';
import DeleteArticle from './components/DeleteArticle';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
    <div className="app">
      <header className="header text-center">React CRUD App</header>
      <Routes>
       
        <Route path="/" element={<CreateArticle />} />
        <Route path="/" element={<EditArticle />} />
        <Route path="/" element={<DeleteArticle />} />
      </Routes>
    </div>
    </GlobalProvider>
  );
}

export default App;
