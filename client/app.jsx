import React, { useState, useEffect } from 'react';
import Home from './pages/home';
import HomeAdmin from './pages/homeAdmin';
import Login from './pages/login';
import ProtectedRoutes from './pages/protected-routes';
import { Route, Routes } from 'react-router-dom';
// import Header from './components/header';
import Footer from './components/footer';
import AppContext from './lib/app-context';
import PageContainer from './components/page-container';
// import NotFound from './pages/not-found';
import jwtDecode from 'jwt-decode';

export default function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    const token = window.localStorage.getItem('basketToken');
    const user = token ? jwtDecode(token) : null;
    setUser(user);
  }, []);

  const login = result => {
    const { user, token } = result;
    window.localStorage.setItem('basketToken', token);
    setUser(user);
  };

  const logout = () => {
    window.localStorage.removeItem('basketToken');
    setUser('');
  };

  // const submittedInfo = info => {
  //   const { guestId, token } = info;
  //   window.localStorage.setItem('guestToken', token);
  //   setGuestId(guestId);
  //   // this.setState({ guestId });
  // }

  // renderPage() {
  //   const { route } = this.state;
  //   if (route.path === '') {
  //     return <Home />;
  //   }
  //   return <NotFound />;
  // }

  const contextValue = { user, login, logout };
  return (
    <AppContext.Provider value={contextValue}>
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<PageContainer />}/>
        <Route index element ={<Login />}/>
        <Route element={<ProtectedRoutes />} >
          <Route path='home' element={<Home /> } />
          <Route path='homeAdmin' element={<HomeAdmin />} />
        </Route>
      </Routes>
      <Footer />
    </AppContext.Provider>

  );
}
