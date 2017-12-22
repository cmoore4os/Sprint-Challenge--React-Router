import React from 'react';
import NavLinks from './components/NavLinks';
import Home from './components/Home';
import Mac from './components/Mac/Mac';
import IPad from './components/IPad/IPad';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <NavLinks />
    <Route exact path="/" component={Home} />
    <Route path="/mac" component={Mac} />
    <Route path="/ipad" component={IPad} />
  </div>
);

export default App;
