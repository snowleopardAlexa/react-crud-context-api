import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import ListArticle from './components/ListArticle';
import CreateArticle from './components/CreateArticle';
import EditArticle from './components/EditArticle';
import DeleteArticle from './components/DeleteArticle';

function App() {
  return (
    <main>
      <header className="text-center">React CRUD App</header>
      <Switch>
        <Route path="/" component={ListArticle} exact />
        <Route path="/create" component={CreateArticle} exact />
        <Route path="/edit/:id" component={EditArticle} exact />
        <Route path="/detail/:id" component={DeleteArticle} exact />
      </Switch>
    </main>
  );
}

export default App;
