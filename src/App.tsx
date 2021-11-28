import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Match from './components/Match';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/match' element={<Match/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
