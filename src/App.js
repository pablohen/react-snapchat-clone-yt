import React from 'react';
import './App.css';
import WebcamCapture from './WebcamCapture';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Preview from './Preview';
import Chats from './Chats';

function App() {
  return (
    <div className="app">
      <Router>
        <div className="app__body">
          <Switch>
            <Route path="/chats">
              <Chats />
            </Route>
            <Route path="/preview">
              <Preview />
            </Route>
            <Route exact path="/">
              <WebcamCapture />
            </Route>
          </Switch>
        </div>
      </Router>


    </div>
  );
}

export default App;
