import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import {Routes, Route} from "react-router-dom"
import HomePage  from "./pages/Home";
import Colletion  from './pages/Collection';
import Limitted from './pages/Limitted';
import Popular from './pages/Popular';
import Navbar from './components/Navbar'
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import SignIn from './contact/SignIn';

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/collection' element={<Colletion />}></Route>
          <Route path='/limitted' element={<Limitted />}></Route>
          <Route path='/popular' element={<Popular />}></Route>
          <Route path='/signin' element={<SignIn />}></Route>
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
