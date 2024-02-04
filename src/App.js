import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Master from './Layout/Master';
import Home from './Pages/Home';
import Fav from './Pages/Fav';
import IndexPage from './Pages/IndexPage';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='' element={<Master/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/fav' element={<Fav/>}/>
        <Route path='/IndexPage' element={<IndexPage/>}/>
        </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
