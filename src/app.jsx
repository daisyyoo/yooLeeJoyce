import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header';
import English from './pages/english';
import Korean from './pages/korean';
import NotFound from './pages/not-found';

export default function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route index path='/' element ={<English />}/>
      <Route path='/korean' element={<Korean />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
    </>
  )
}
