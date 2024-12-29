import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className=''>
            <nav className='max-w-screen-xl mx-auto'>
                <Navbar></Navbar>
            </nav>
            <div className='max-w-screen-xl mx-auto h-screen'>
                <Outlet></Outlet>
            </div>

            <footer >
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;