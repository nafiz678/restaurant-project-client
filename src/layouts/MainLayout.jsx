import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className=''>
            <nav className=''>
                <Navbar></Navbar>
            </nav>
            <div className=''>
                <Outlet></Outlet>
            </div>

            <footer >
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;