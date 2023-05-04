import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import {Routes, Route} from "react-router-dom"
import HomePage from './pages/Home';
import Colletion from './pages/Collection';
import Limitted from './pages/Limitted';
import Popular from './pages/Popular';

function App() {
  return (
    <Container>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/' element={<Colletion />}></Route>
        <Route path='/' element={<Limitted />}></Route>
        <Route path='/' element={<Popular />}></Route>
      </Routes>
    </Container>
  );
}

export default App;
