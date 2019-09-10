import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from '../../ui/pages/HomePage/HomePage';

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Route exact path="/" component={HomePage} />
    </React.Fragment>
  </BrowserRouter>
);

export default App;

