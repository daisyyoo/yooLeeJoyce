import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PageContainer from './components/page-container';
import English from './pages/english';
import Korean from './pages/korean';

export default function App() {
  return (
    <Routes>
      {/* <Route path='/' element={<PageContainer />}> */}
        <Route index path='/english' element ={<English />}/>
        <Route path='/korean' element={<Korean />} />
        <Route path="*" element={<NotFound />} />
      {/* </Route> */}
    </Routes>
  )
}
