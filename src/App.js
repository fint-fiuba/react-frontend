import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';
import NavBar from './components/NavBar';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Login></Login>
    <Routes>
      <Route exact path='/' component={Login}></Route>
    </Routes>
    </Router>
  );
}

export default App;
