import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import ListArticle from './components/ListArticle';
import CreateArticle from './components/CreateArticle';
import EditArticle from './components/EditArticle';
import DetailArticle from './components/DetailArticle';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
       <header className="text-center"><h5>React CRUD with Hooks and Context API</h5></header>
       <Switch>
        <Route path="/listarticle" component={ListArticle} exact/>
        <Route path="/" component={CreateArticle} exact/>
        <Route path="/edit/:id" component={EditArticle} exact/>
        <Route path="/detail/:id" component={DetailArticle} exact/>
      </Switch>
    </GlobalProvider>
  );
}

export default App;