import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header';
import English from './pages/english';
import Korean from './pages/korean';
import NotFound from './pages/not-found';
import AppContext from './pages/app-context';

export default function App() {
  const [currentView, setCurrentView] = useState('');
  const contextValue = { currentView, setCurrentView };

  return (
    <AppContext.Provider value={contextValue}>
      <Header />
      <Routes>
        <Route index path='/' element ={<English />}/>
        <Route path='/korean' element={<Korean />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </AppContext.Provider>
  )
}
