import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    const { pathname } = useLocation()

    const isLogin = pathname.includes("login") || pathname.includes("signup")
    return (
        <div className=''>
            <div><Toaster/></div>
            {isLogin || <nav className=''>
                <Navbar></Navbar>
            </nav>}
            <div className=''>
                <Outlet></Outlet>
            </div>

            {
                isLogin ||
                <footer >
                    <Footer></Footer>
                </footer>
            }
        </div>
    );
};

export default MainLayout;