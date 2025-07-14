import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import RecipeDetails from './pages/RecipeDetails';

function App() {

  return (
    <>
      <Navbar />
      <div className='layout'>
        <Sidebar />
        <div className='main-content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/recipes/:recipeId' element={<RecipeDetails />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
      
      <Footer />
    </>
  );
}

export default App
