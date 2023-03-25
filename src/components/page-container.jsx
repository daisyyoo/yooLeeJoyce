import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header';

export default function PageContainer() {
  return (
    <>
    <Header />
    <Outlet />
    </>
  );
}
