import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar';

const MainLayout = () => {
  return (
      <div>
          <Navbar></Navbar>
      <main className='max-w-7xl mx-auto'>
        <Outlet></Outlet>
      </main>
    </div>
  );
}

export default MainLayout