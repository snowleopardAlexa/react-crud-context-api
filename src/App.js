import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import ListBook from './components/ListBook';
import CreateBook from './components/CreateBook';
import EditBook from './components/EditBook';
import DetailBook from './components/DetailBook';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
       <header className="text-center"><h5>Library CRUD App</h5></header>
       <Switch>
        <Route path="/" component={ListBook} exact/>
        <Route path="/create" component={CreateBook} exact/>
        <Route path="/edit/:id" component={EditBook} exact/>
        <Route path="/detail/:id" component={DetailBook} exact/>
      </Switch>
    </GlobalProvider>
  );
}

export default App;