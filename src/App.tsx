import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route
} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Match from './components/Match';
import MatchList from './components/MatchList';
import UserInformation from './components/UserInformation';
import NavBar2 from './components/NavBar2';

function App() {
  return (
    <Router>
      <NavBar2 />
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/match' element={<Match />}></Route>
        <Route path='/match2' element={<MatchList />}></Route>
        <Route path='/user' element={<UserInformation/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
